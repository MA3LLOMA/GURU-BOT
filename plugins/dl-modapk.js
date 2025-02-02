import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'modapk', 'apk', 'app') {
      if (!text) throw `*قم باإرسال إسم التطبيق الذي تريده..* \n \n *مثال: .apk facebook lite*`;
      m.react(rwait)
      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 500) {
        return await conn.sendMessage(m.chat, { text: '*هاذا التطبيق كبير جدا. ..*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*هاذا التطبيق كبير جدا. ...*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  m.react(done)
  } catch {
    throw `*هل أنت متأكد أن إسم التطبيق صحيح..*`;
  }
};

handler.help = ['modapk', 'apk', 'app']
handler.tags = ['downloader']
handler.command = ['modapk', 'apk', 'app'];
export default handler;
