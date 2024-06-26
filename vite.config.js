import path from "node:path";
import fs from "node:fs/promises";
import prependFile from "prepend-file";

/* ========================= */
/* = Copyright (c) NullDev = */
/* ========================= */

const navigator = global.navigator || {};
if (!navigator.userAgent) navigator.userAgent = "";

/**
 * Prepends a header to the generated files
 *
 * @returns {Promise<void>}
 */
const writeHeaderToFiles = async function(){
    const files = await fs.readdir(path.resolve("snippets"));
    const matches = files.filter(file => file.endsWith(".js") || file.endsWith(".css"));
    matches.forEach(async file => {
        await prependFile(
            path.resolve("snippets", file),
            "/* - COPY & PASTE THIS INTO THE DISCORD DEVTOOLS CONSOLE (Ctrl + Shift + i) - */\n\n",
        );
    });
};

/**
 * Vite plugin to inline utils.js into the snippets
 *
 * @return {import("vite").Plugin}
 */
const inlineUtilsPlugin = () => {
    return {
        name: "inline-utils",
        async transform(code, id){
            if (id.endsWith(".js")){
                const utilsCode = await fs.readFile(path.resolve("src/util/utils.js"), "utf8");
                return {
                    code: utilsCode + "\n" + code.replace(/import\s*{[^}]*}\s*from\s*['"][^'"]+['"];\s*/g, ""),
                    map: null,
                };
            }
            return null;
        },
    };
};

export default {
    build: {
        target: "esnext",
        outDir: "snippets",
        emptyOutDir: true,
        minify: true,
        polyfill: false,
        rollupOptions: {
            input: {
                ...Object.fromEntries((await fs.readdir("src/snippets")).map((snippet) => [snippet.replace(".js", ""), path.resolve("src/snippets", snippet)])),
            },
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                format: "es",
            },
            plugins: [
                inlineUtilsPlugin(),
            ],
        },
    },
    plugins: [{
        name: "post-build",
        async closeBundle(){
            await writeHeaderToFiles();
        },
    }],
};
