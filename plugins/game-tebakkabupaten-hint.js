let handler = async (m, { conn }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {};
  let id = m.chat;
  if (!(id in conn.tebakkabupaten)) throw false;
  let json = conn.tebakkabupaten[id][1];
  conn.reply(
    m.chat,
    "```" + json.title.replace(/[AIUEOaiueo]/gi, "_") + "```",
    m
  );
};
handler.command = /^hkab$/i;

module.exports = handler;
