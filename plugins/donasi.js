import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/8f28fa10f53223a88f0d7.jpg'
    return conn.sendButton(m.chat, 'Donasi Bisa Ke:\nGopay:081326024103\nPulsa:081326024103\nDana:\n❏ Donasi minimal 500p :v', donate, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://bit.ly/3eggcxd",
                mediaType: "VIDEO",
                title: 'Donasi To Gaara',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler