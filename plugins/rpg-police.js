let handler = async (m, { conn }) => {
  let __timers = new Date() - global.db.data.users[m.sender].lastngojek;
  let _timers = 300000 - __timers;
  let order = global.db.data.users[m.sender].ojekk;
  let timers = clockString(_timers);
  let name = conn.getName(m.sender);
  let user = global.db.data.users[m.sender];

  if (new Date() - global.db.data.users[m.sender].lastngojek > 300000) {
    let randomaku1 = `${Math.floor(Math.random() * 10)}`;
    let randomaku2 = `${Math.floor(Math.random() * 10)}`;
    let randomaku4 = `${Math.floor(Math.random() * 5)}`;
    let randomaku3 = `${Math.floor(Math.random() * 10)}`;
    let randomaku5 = `${Math.floor(Math.random() * 10)}`.trim();

    let rbrb1 = randomaku1 * 2;
    let rbrb2 = randomaku2 * 10;
    let rbrb3 = randomaku3 * 1;
    let rbrb4 = randomaku4 * 15729;
    let rbrb5 = randomaku5 * 120;

    var zero1 = `${rbrb1}`;
    var zero2 = `${rbrb2}`;
    var zero3 = `${rbrb3}`;
    var zero4 = `${rbrb4}`;
    var zero5 = `${rbrb5}`;

    var dimas = `
Mengejar Pencuri....
`;

    var dimas2 = `
Menangkap Pencuri....
`;

    var dimas3 = `
Membawa Ke Kantor Polisi\nDan Di Penjara
`;

    var dimas4 = `
Menerima Gaji....
`;

    var hsl = `Mendapatkan
Uang: ${zero4}
Exp: ${zero5} 
Order Selesai = +1
Total Order Sebelumnya : ${order}
`;

    var dimas5 = `
*Waktunya Cosplay Jadi Polisi Lagi Kak....*
`;

    global.db.data.users[m.sender].money += rbrb4;
    global.db.data.users[m.sender].exp += rbrb5;
    global.db.data.users[m.sender].ojekk += 1;

    setTimeout(() => {
      setTimeout(() => {
        m.reply(`${dimas5}`);
      }, 79200000);

      m.reply(`${hsl}`);
    }, 27000);

    setTimeout(() => {
      m.reply(`${dimas4}`);
    }, 25000);

    setTimeout(() => {
      m.reply(`${dimas3}`);
    }, 20000);

    setTimeout(() => {
      m.reply(`${dimas2}`);
    }, 15000);

    setTimeout(() => {
      m.reply(`${dimas}`);
    }, 10000);

    setTimeout(() => {
      m.reply(
        "Mencari Data Data Pencuri Yang Di Ada Di Data Laporan Database Kepolisian RPG....."
      );
    }, 0);
    user.lastngojek = new Date() * 1;
  } else
    conn.reply(
      m.chat,
      `Sepertinya Kamu Sudah Kecapekan Silahkan Istirahat Dulu Sekitar\n${timers}`,
      m
    );
};
handler.tags = ["rpg"];
handler.command = /^(polisi)$/i;
handler.group = true;
handler.fail = null;
handler.exp = 0;
handler.register = true;
module.exports = handler;

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    "\n" + d,
    " *Hari*\n ",
    h,
    " *Jam*\n ",
    m,
    " *Menit*\n ",
    s,
    " *Detik* ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
