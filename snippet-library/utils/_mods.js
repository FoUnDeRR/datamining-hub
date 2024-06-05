let wreq; webpackChunkdiscord_app.push([[Symbol()], {}, (r) => wreq = r]);
webpackChunkdiscord_app.pop();

const findModuleId = (...codes) => {
    return Object.keys(wreq.m).find(chunk => codes.every(code => wreq.m[chunk].toString().includes(code)))
}