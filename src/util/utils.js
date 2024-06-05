let wreq = {};

// @ts-ignore
// eslint-disable-next-line camelcase
const wpcd = webpackChunkdiscord_app || [];

wpcd.push([[Symbol()], {}, r => (wreq = r)]);
wpcd.pop();

const _mods = Object.values(wreq?.c);

/**
 * Find a module by searching for the given properties in the modules.
 *
 * @param {...string} props - The properties to search for in the modules.
 * @return {object|null} The module.
 */
const findByProps = (...props) => {
    for (const m of _mods){
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;

            for (const ex in m.exports){
                if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
            }
        }
        catch {
            continue;
        }
    }
    return null;
};

/**
 * Find the module ID by searching for the given codes in the modules.
 *
 * @param {...string} codes - The codes to search for in the modules.
 * @return {string|undefined} The module ID.
 */
const findModuleId = (...codes) => {
    return Object.keys(wreq.m).find(chunk => codes.every(code => wreq.m[chunk].toString().includes(code)));
};

export {
    findByProps,
    findModuleId,
    _mods,
};
