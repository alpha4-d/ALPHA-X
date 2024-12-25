const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "hyNmnDJA#QBh_kBjtCoCNDLYbZikBuHWhF3SSlvZLUJ27gwrirag",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/9ZpgPk2/FB-IMG-17316065326480038.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 👋 i am ALPHA-X, I am alive!!!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
  
