let handler = async (m, { conn, text }) => {
  let users = global.db.data.users;

  var total = 0;
  for (let jid in users) {
    if (users[jid].limit > 0) {
      users[jid].limit = 0;
      total += 1;
    }
    if (users[jid].money > 0) {
      users[jid].money = 0;
      total += 1;
    }
    if (users[jid].exp > 0) {
      users[jid].exp = 0;
      total += 1;
    }
    users[jid].money = Math.floor(users[jid].koin);
    users[jid].limit = Math.floor(users[jid].limit);
    users[jid].exp = Math.floor(users[jid].exp);
  }
  return conn.reply(
    m.chat,
    `*Berhasil Memperbaiki ${total} Error Di Database.*`,
    m
  );
};
handler.help = ["fixdb"];
handler.tags = ["owner"];
handler.command = /^(fixdb)$/i;
handler.owner = true;
handler.register = true;
module.exports = handler;
