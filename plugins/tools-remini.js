const fetch = require("node-fetch");
const uploadImage = require("../lib/uploadImage.js");

async function handler(m, { conn, usedPrefix, command }) {
  try {
    await m.reply(wait);
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || "";
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(
        `https://api.botcahx.eu.org/api/tools/remini?url=${out}&apikey=${btc}`
      );
      const image = await api.json();
      const { url } = image;
      conn.sendFile(m.chat, url, null, wm, m);
    } else {
      m.reply(
        `Kirim gambar dengan caption *${
          usedPrefix + command
        }* atau tag gambar yang sudah dikirim.`
      );
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi.`);
  }
}

handler.help = ["remini"];
handler.tags = ["ai"];
handler.command = ["remini"];
handler.limit = 5;
handler.register = true;
module.exports = handler;
