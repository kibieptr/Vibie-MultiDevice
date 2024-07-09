let fetch = require("node-fetch");
let handler = async (m, { text, command, conn }) => {
  if (!text) throw "Masukan teks untuk diubah menjadi gambar";
  try {
    let response = await fetch(
      `https://api.botcahx.eu.org/api/search/openai-image?text=${encodeURIComponent(
        text
      )}&apikey=${btc}`
    );
    let image = await response.buffer();
    conn.sendFile(m.chat, image, "aiimg.jpg", wm, m);
  } catch (e) {
    throw `Error: ${eror}`;
  }
};
handler.command = handler.help = ["aiimg", "dalle"];
handler.tags = ["ai"];
handler.register = true;
handler.limit = true;
module.exports = handler;
