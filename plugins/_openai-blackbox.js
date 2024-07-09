var fetch = require("node-fetch");
var handler = async (m, { text, usedPrefix, command }) => {
  if (!text)
    throw `Masukkan pertanyaan!\n\n*Contoh:* buatkan saya code express.js`;
  try {
    await m.reply(wait);
    var apii = await fetch(
      `https://api.botcahx.eu.org/api/search/blackbox-chat?text=${text}&apikey=${btc}`
    );
    var res = await apii.json();
    await m.reply(res.message);
  } catch (err) {
    console.error(err);
    throw "Terjadi kesalahan dalam menjawab pertanyaan";
  }
};
handler.command = handler.help = ["aicoding"];
handler.tags = ["ai"];
handler.premium = false;
handler.register = true;
module.exports = handler;
