const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/qr/Z4MLSKW4NXBBH1`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Rull`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*Hai Ngab*`
let isi =`I'm RullBOT Yang Di Buat Gak Niat Oleh Rull Karena Males Recode Jadi Pake Aja Apa Yang Ada Yah.\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n${tag} (Owner)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/6411cc04828f3cc335324.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw',
    mediaType: 2, 
    description: urlnya,
    title: "Subs Yete Gw Banh:)",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
