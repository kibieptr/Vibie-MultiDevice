const fetch = require("node-fetch");

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0])
    throw `*Contoh:* ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`;

  try {
    await m.reply(wait);
    const api = await fetch(
      `https://api.botcahx.eu.org/api/dowloader/igdowloader?url=${args[0]}&apikey=${btc}`
    );
    const res = await api.json();

    const limitnya = 10; // ini jumlah foto yang ingin di kirim ke user (default 10 foto)

    for (let i = 0; i < Math.min(limitnya, res.result.length); i++) {
      await sleep(3000);
      conn.sendFile(
        m.chat,
        res.result[i].url,
        null,
        `*Instagram Downloader By Raza MD*`,
        m
      );
    }
  } catch (e) {
    throw `*Server Down!*`;
  }
};

handler.help = ["instagram", "ig"].map((v) => v + " <url>");
handler.tags = ["downloader"];
handler.command = /^(igdl|ig)$/i;
handler.limit = true;
handler.register = true;
module.exports = handler;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
