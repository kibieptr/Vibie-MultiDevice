let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw "Berikan URL dari YouTube!";
  try {
    m.reply(wait);
    var aud = `https://widipe.com/youtube?url=${text}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`;
    await conn.sendMessage(
      m.chat,
      { audio: { url: aud }, mimetype: "audio/mpeg" },
      { quoted: m }
    );
  } catch (e) {
    throw "Video/Audio Tidak Ditemukan";
  }
};
handler.command = handler.help = ["ytaudio"];
handler.tags = ["downloader"];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
handler.register = true;
module.exports = handler;
