import { findByProps } from "../util/utils.js";

const link = await findByProps("createFriendInvite").createFriendInvite();
console.log("https://discord.gg/" + link.code);
