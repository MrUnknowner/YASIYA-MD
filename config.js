const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD?tL0l77',
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
