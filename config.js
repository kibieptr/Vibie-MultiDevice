global.owner = ["YOUR NUMBER"];
global.creator = ["YOUR NUMBER", "YOUR NUMBER"];
global.mods = ["YOUR NUMBER", "YOUR NUMBER"];
global.prems = ["YOUR NUMBER", "YOUR NUMBER"];
global.nameowner = "YOUR NAME";
global.numberowner = "YOUR NUMBER";
global.numberowner1 = "YOUR NUMBER";
global.numberowner2 = "YOUR NUMBER";
global.mail = "YOUR EMAIL";
global.version = "10.5.2";
global.gc = "YOUR LINK GROUPCHAT";
global.instagram = "YOUR INSTAGRAM";
global.botchannel = "YOUR LINK CHANNEL BOT";
global.wm = "YOUR NAME BOT";
global.wait = "_*Tunggu sedang di proses...*_";
global.eror = "_*Server Error*_";
global.stiker_wait = "*⫹⫺ Stiker sedang dibuat...*";
global.packname = "Made With";
global.author = "YOUR NAME BOT";
global.namebot = "YOUR NAME BOT";
global.autobio = false; // Set true untuk mengaktifkan autobio
global.maxwarn = "3"; // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = "YOUR_APIKEY_HERE";
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = "YOUR_APIKEY_HERE";
//Daftar https://api.betabotz.eu.org

global.APIs = {
  btc: "https://api.botcahx.eu.org",
};

global.APIKeys = {
  "https://api.botcahx.eu.org": "YOUR_APIKEY_HERE",
};

let fs = require("fs");
let chalk = require("chalk");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("File 'config.js' was changed"));
  delete require.cache[file];
  require(file);
});
