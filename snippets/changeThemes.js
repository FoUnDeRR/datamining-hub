/* - COPY & PASTE THIS INTO THE DISCORD DEVTOOLS CONSOLE (Ctrl + Shift + i) - */

let s={};const n=webpackChunkdiscord_app||[];n.push([[Symbol()],{},t=>s=t]);n.pop();const p=Object.values(s?.c),r=(...t)=>{for(const e of p)try{if(!e.exports||e.exports===window)continue;if(t.every(o=>e.exports?.[o]))return e.exports;for(const o in e.exports)if(t.every(c=>e.exports?.[o]?.[c]))return e.exports[o]}catch{continue}return null},{ThemeTypes:i}=r("ThemeTypes"),h="DARK";r("saveClientTheme").saveClientTheme({theme:i[h]});
