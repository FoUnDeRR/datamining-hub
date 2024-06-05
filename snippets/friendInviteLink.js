/* - COPY & PASTE THIS INTO THE DISCORD DEVTOOLS CONSOLE (Ctrl + Shift + i) - */

let r={};const n=webpackChunkdiscord_app||[];n.push([[Symbol()],{},t=>r=t]);n.pop();const s=Object.values(r?.c),i=(...t)=>{for(const e of s)try{if(!e.exports||e.exports===window)continue;if(t.every(o=>e.exports?.[o]))return e.exports;for(const o in e.exports)if(t.every(c=>e.exports?.[o]?.[c]))return e.exports[o]}catch{continue}return null},p=await i("createFriendInvite").createFriendInvite();console.log("https://discord.gg/"+p.code);
