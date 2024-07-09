const fetch = require("node-fetch");

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Masukan detail gambar!* `;
  try {
    conn.reply(m.chat, wait, m);
    const res = await fetch(
      `https://api.botcahx.eu.org/api/maker/text2img?text=${text}&apikey=${btc}`
    ).then((res) => res.buffer());
    conn.sendFile(m.chat, res, "image.jpg", `Result: ${text}`, m);
  } catch (error) {
    m.reply(`Error: ${eror}`);
  }
};

handler.command = handler.help = ["text2img"];
handler.tags = ["ai"];
handler.limit = true;
handler.register = true;
module.exports = handler;
