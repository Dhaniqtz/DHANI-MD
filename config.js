const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WawhCJqZ#UsA5S18oR0uPFq7-LPbRwfP_l3BOyT6PF6trg2noKmQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Dhaniqtz/DHANI-MD/blob/main/Image/file_00000000d60871fd86e88fa5ba092f9d.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DHANI-MD Is Alive Now😍*",
BOT_OWNER: '94719002563',  // Replace with the owner's phone number



};
