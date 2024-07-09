const axios = require("axios");
const cheerio = require("cheerio");

let handler = async (m, { conn, text }) => {
  let res = await Jadwal_Sepakbola();
  res = res.map((v) => `${v}\n`).join`\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`;
  let loadd = [
    "▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%",
    "██▒▒▒▒▒▒▒▒▒▒▒ 10%",
    "████▒▒▒▒▒▒▒▒▒ 30%",
    "███████▒▒▒▒▒▒ 50%",
    "██████████▒▒▒ 70%",
    "█████████████ 100%",
    `${res}`,
  ];

  let { key } = await conn.sendMessage(m.chat, { text: "_Bentar_" });

  for (let i = 0; i < loadd.length; i++) {
    await conn.sendMessage(m.chat, { text: loadd[i], edit: key });
  }
};
handler.help = ["jadwalbola"];
handler.tags = ["internet"];
handler.command = /^(jadwalbola)$/i;
handler.limit = true;
handler.register = true;
module.exports = handler;

async function Jadwal_Sepakbola() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(
        "https://www.jadwaltv.net/jadwal-sepakbola"
      );
      const $ = cheerio.load(data);
      let tv = [];
      $("table.table.table-bordered > tbody > tr.jklIv").each((u, i) => {
        let an = $(i)
          .html()
          .replace(/<td>/g, "")
          .replace(/<\/td>/g, " - ");
        tv.push(`${an.substring(0, an.length - 3)}`);
      });
      if (tv.every((x) => x === undefined))
        return resolve({ developer: "@Zeltoria", mess: "no result found" });
      resolve(tv);
    } catch (err) {
      console.error(err);
    }
  });
}
