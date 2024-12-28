const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const hariRaya = new Date('February 26, 2023 00:00:00')
const sekarang = new Date().getTime()
const Selisih = hariRaya - sekarang
let timestamp = speed()
const kecepatan = speed() - timestamp
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

const db_respon_list = JSON.parse(fs.readFileSync('./lib/list.json'));
//━━━━━━━━━JHON BOTZ━━━━━━━━━━
const { edit_info,urlpepe,namaowner,noowner,packname,author } = require('./edit_disini/edit_info')

const { edit_payment,QRgopay,NOgopay,QRdana,NOdana,QRovo,NOovo,QRshopee,NOshopee,QRallpay } = require('./edit_disini/edit_payment')
const { edit_testi,testi1,testi2,testi3,testi4,testi5,testi6,testi7 } = require('./edit_disini/edit_testi')

global.owner = [`${noowner}`,`6285894955362`]
const kata_suruh = (`${namaowner}`)
const { judul1,produk1 } = require('./edit_produk/judul1')
const { judul2,produk2 } = require('./edit_produk/judul2')
const { judul3,produk3 } = require('./edit_produk/judul3')
const { judul4,produk4 } = require('./edit_produk/judul4')
const { judul5,produk5 } = require('./edit_produk/judul5')
const { judul6,produk6 } = require('./edit_produk/judul6')
const { judul7,produk7 } = require('./edit_produk/judul7')

const lodingpros = ['▰▰▰▰▰▱▱▱▱▱ 50%','▰▰▰▰▰▱▱▱▱▱ 55%','▰▰▰▰▰▰▱▱▱▱ 60%','▰▰▰▰▰▰▱▱▱▱ 65%','▰▰▰▰▰▰▰▱▱▱ 70%','▰▰▰▰▰▰▰▱▱▱ 75%','▰▰▰▰▰▰▰▰▱▱ 80%','▰▰▰▰▰▰▰▰▱▱ 85%','▰▰▰▰▰▰▰▰▰▱ 90%','▰▰▰▰▰▰▰▰▰▱ 95%']

const lodconk = lodingpros[Math.floor(Math.random() * lodingpros.length)]
//━━━━━━━━━━━[KALIMAT]━━━━━━━━━━━━━━━
global.mess = {
wait: '𝗣𝗿𝗼𝘀𝗲𝘀♻️',
loding: '𝗟𝗼𝗮𝗱𝗶𝗻𝗴.....',
succes: '𝗦𝘂𝗸𝘀𝗲𝘀✅',
aksesmts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝗲𝗹𝘂𝗺 𝗧𝗲𝗿𝗔𝗸𝘀𝗲𝘀🤔',
premiummts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺🤔',
vvipmts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗨𝘀𝗲𝗿 𝗩𝗶𝗽🤔',
daftarusermts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝗲𝗹𝘂𝗺 𝗕𝗲𝗿𝗹𝗮𝗻𝗴𝗴𝗮𝗻𝗮𝗻🤔',
pemilikbot: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗣𝗲𝗺𝗶𝗹𝗶𝗸 𝗕𝗼𝘁 𝗜𝗻𝗶🤔',
dalamgroup: '𝗙𝗶𝘁𝘂𝗿 𝗜𝗻𝗶 𝗞𝗵𝘂𝘀𝘂𝘀 𝗗𝗮𝗹𝗮𝗺 𝗚𝗿𝗼𝘂𝗽😐',
botadmin: '𝗕𝗼𝘁 𝗛𝗮𝗿𝘂𝘀 𝗠𝗲𝗻𝗷𝗮𝗱𝗶 𝗔𝗱𝗺𝗶𝗻😅',
adminonly: '𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗶😑',
}
const os = require('os')
const { color, bgcolor } = require('./lib/color')
//━━━━━━━━━━━━━━━━━━━━━━━━━━
global.prefa = ['','.']

module.exports = diablo = async (mts, mts4you, chatUpdate, store) => {
try {
const body = (mts4you.mtype === 'conversation') ? mts4you.message.conversation : (mts4you.mtype == 'imageMessage') ? mts4you.message.imageMessage.caption : (mts4you.mtype == 'videoMessage') ? mts4you.message.videoMessage.caption : (mts4you.mtype == 'extendedTextMessage') ? mts4you.message.extendedTextMessage.text : (mts4you.mtype == 'buttonsResponseMessage') ? mts4you.message.buttonsResponseMessage.selectedButtonId : (mts4you.mtype == 'listResponseMessage') ? mts4you.message.listResponseMessage.singleSelectReply.selectedRowId : (mts4you.mtype == 'templateButtonReplyMessage') ? mts4you.message.templateButtonReplyMessage.selectedId : (mts4you.mtype === 'messageContextInfo') ? (mts4you.message.buttonsResponseMessage?.selectedButtonId || mts4you.message.listResponseMessage?.singleSelectReply.selectedRowId || mts4you.text) : ''
const budy = (typeof mts4you.text == 'string' ? mts4you.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const content = JSON.stringify(mts4you.message)
const totalFitur = () =>{
var mytext = fs.readFileSync("./mts.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
const { type, quotedMsg, mentioned, now, fromMe } = mts4you
const from = mts4you.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const pushname = mts4you.pushName || "No Name"
const botNumber = await mts.decodeJid(mts.user.id)
const itsNe = mts4you.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = mts4you.quoted ? mts4you.quoted : mts4you
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const waktumts = dt.charAt(0).toUpperCase() + dt.slice(1)
const wib = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm')
const wit = moment.tz('Asia/Jayapura').format('HH:mm')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
const sender = mts4you.isGroup ? (mts4you.key.participant ? mts4you.key.participant : mts4you.participant) : mts4you.key.remoteJid
 const isGroup = mts4you.chat.endsWith('@g.us')
const groupMetadata = mts4you.isGroup ? await mts.groupMetadata(mts4you.chat).catch(e => {}) : ''
const groupName = mts4you.isGroup ? groupMetadata.subject : ''
const participants = mts4you.isGroup ? await groupMetadata.participants : ''
const qmsg = (quoted.msg || quoted)
const groupAdmins = mts4you.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = mts4you.isGroup ? groupMetadata.owner : ''
const groupMembers = mts4you.isGroup ? groupMetadata.participants : ''
	const isBotAdmins = mts4you.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = mts4you.isGroup ? groupAdmins.includes(mts4you.sender) : false
	const isAdmins = mts4you.isGroup ? groupAdmins.includes(mts4you.sender) : false
var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
var dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList
//━━━━━━━━━━━━━━━━━━━━━━━━━━
const targetnya = (`𝗡𝗼𝗺𝗼𝗿 𝗧𝗮𝗿𝗴𝗲𝘁 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮?\nContoh : ${command} 628xxx`)

const itsAksesUser = [botNumber, `${global.owner}`, `6285894955362`].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(mts4you.sender)

if (!mts.public) {
if (!mts4you.key.fromMe) return
}

if (!mts4you.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(mts4you.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (mts4you.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(mts4you.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (mts4you.sender.startsWith('212')) return mts.updateBlockStatus(mts4you.sender, 'block')

const ownget = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Copyright ©2023\n➺ 𝙾𝚠𝚗𝚎𝚛 : ${namaowner}\n➺ 𝙽𝚘𝚖𝚘𝚛 : ${noowner}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;CPM_JHON,;;;\nFN:Halo ${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: `${urlpepe}` }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const useret = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Copyright ©2023\nHallo Kak ${mts4you.pushName}👋🏻\nStatus : ${itsAksesUser ? 'Owner' : `User`} {${sender.split("@")[0]}}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;CPM_JHON,;;;\nFN:Halo ${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: `${urlpepe}` }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const _0x551abc=_0xce47;function _0xce47(_0x59c1d8,_0x179247){const _0x5e7d89=_0x5e7d();return _0xce47=function(_0xce4771,_0x21d331){_0xce4771=_0xce4771-0x173;let _0x77b59e=_0x5e7d89[_0xce4771];return _0x77b59e;},_0xce47(_0x59c1d8,_0x179247);}(function(_0x4002aa,_0x39768e){const _0x483cd1=_0xce47,_0x3e4ac5=_0x4002aa();while(!![]){try{const _0x23c395=parseInt(_0x483cd1(0x173))/0x1*(-parseInt(_0x483cd1(0x17b))/0x2)+-parseInt(_0x483cd1(0x179))/0x3+-parseInt(_0x483cd1(0x17e))/0x4+-parseInt(_0x483cd1(0x180))/0x5*(-parseInt(_0x483cd1(0x175))/0x6)+-parseInt(_0x483cd1(0x17a))/0x7+-parseInt(_0x483cd1(0x178))/0x8*(parseInt(_0x483cd1(0x174))/0x9)+parseInt(_0x483cd1(0x176))/0xa*(parseInt(_0x483cd1(0x177))/0xb);if(_0x23c395===_0x39768e)break;else _0x3e4ac5['push'](_0x3e4ac5['shift']());}catch(_0x7b11e3){_0x3e4ac5['push'](_0x3e4ac5['shift']());}}}(_0x5e7d,0x7a2c6),ppuser=_0x551abc(0x17f),ppnyauser=await reSize(ppuser,0xc8,0xc8));const lep={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':_0x551abc(0x17c),'caption':_0x551abc(0x17d),'jpegThumbnail':ppnyauser}}};function _0x5e7d(){const _0x447031=['➺\x20𝚆𝙰\x20:\x20𝟼𝟸𝟾𝟿𝟾𝟿𝟷𝟶𝟻𝟼𝟾𝟻\x0a➺\x20𝚈𝚃\x20:\x20galeri_car_cpm8048\x20cpm8048\x0a➺\x20𝙸𝙶\x20:\x20@cpm_jhon','1307920tmMGPu','https://telegra.ph/file/dce1d824b4258874f6db6.jpg','655MkgcsS','171461dZBVJa','9wefhtl','16134EMUouJ','100jnbWQb','2130425IRNOAq','6073576dtvATL','623787RCkrwp','1060913XqNwWX','4brSLyz','image/jpeg'];_0x5e7d=function(){return _0x447031;};return _0x5e7d();}

// Response Addlist
if (!isCmd && isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
mts.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: mts4you
})
} else {
mts.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: mts4you
})
}
}

if (command) {
mts.sendPresenceUpdate('composing', from)
mts.readMessages([mts4you.key])
}

async function replyNya(teks) {
   const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }] 
   const buttonMessage = { 
text: teks, 
footer: "", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}   
   }
   return mts.sendMessage(from, buttonMessage)
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `mts`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {

let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod)
return mts.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'help':
case 'menu': {
let maiiyek = `*Hallo Kak ${mts4you.pushName} 👋🏻* ㅤㅤ
🛍️️𝗕𝗢𝗧 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗦𝗧𝗢𝗥𝗘🛍️

╭───═[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]═─────⋆
│╭───────────────···
││➺ 𝙽𝙰𝙼𝙰 : ${namaowner}
││➺ 𝙽𝙾𝙼𝙾𝚁 : ${noowner}
││➺ 𝙱𝙾𝚃 : 𝚂𝚃𝙾𝚁𝙴
│╰───────────────···
├─═[ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ ${prefix}addlist
││➣ ${prefix}dellist
││➣ ${prefix}self
││➣ ${prefix}public
││➣ ${prefix}hidetag
││➣ ${prefix}tagall
││➣ ${prefix}setppbot
││➣ ${prefix}setppgc
││➣ ${prefix}setnamagc
││➣ ${prefix}setdeskgc
││➣ ${prefix}idgroup (Munculkan ID Group)
││➣ ${prefix}pushkontak [ Jeda|Teks ]
││➣ ${prefix}pushkontakid [ ID|Jeda|Teks ]
│╰───────────────···
├──═[ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ ${prefix}list
││➣ ${prefix}cekproduk
││➣ ${prefix}payment
││➣ ${prefix}testimoni
││➣ ${prefix}kalkulator
││➣ ${prefix}done
││➣ ${prefix}proses
││➣ ${prefix}batal
││➣ ${prefix}pending
││➣ ${prefix}listjapost
│╰───────────────···
├───═[ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ ${prefix}creator
││➣ ${prefix}owner
││➣ ${prefix}script
││➣ ${prefix}ping
││➣ ${prefix}fitur (Jumlah Fitur Bot)
││➣ ${prefix}tourl
││➣ ${prefix}toimg
││➣ ${prefix}tomp4
││➣ ${prefix}sticker
││➣ ${prefix}sgif
││➣ ${prefix}smeme
││➣ ${prefix}emojimix
│╰───────────────···
╰───────────────────⋆`
mts.sendMessage(mts4you.chat, { text: maiiyek }, { quoted: useret })
}
break

case 'cekproduk':
peotkop = `
╭─═[🛍️𝗣𝗥𝗢𝗗𝗨𝗞 𝗦𝗧𝗢𝗥𝗘🛍️]═──⋆
│╭───────────────···
││「️🛍️」${judul1}
││➣ ${prefix}prodaktop1
││
││「️🛍️」${judul2}
││➣ ${prefix}prodaktop2
││
││「️🛍️」${judul3}
││➣ ${prefix}prodaktop3
││
││「️🛍️」${judul4}
││➣ ${prefix}prodaktop4
││
││「️🛍️」${judul5}
││➣ ${prefix}prodaktop5
││
││「️🛍️」${judul6}
││➣ ${prefix}prodaktop6
││
││「️🛍️」${judul7}
││➣ ${prefix}prodaktop7
││
││「️📮𝗖𝗔𝗥𝗔 𝗣𝗘𝗠𝗕𝗘𝗟𝗜𝗔𝗡📮」
││➣ ${prefix}carapembeli
│╰───────────────···
╰───────────────────⋆`
mts.sendMessage(mts4you.chat, {text: peotkop}, {quoted: useret})
break

case 'payment':
gajdev = `
╭───═[💸𝗣𝗔𝗬𝗠𝗘𝗡𝗧💸]═───⋆
│╭───────────────···
││「💰️」𝗔𝗹𝗹𝗣𝗮𝘆
││➣ ${prefix}allpaylet
││➺ [Bayar Tanpa Premium]
││
││「️💰」𝗚𝗼𝗽𝗮𝘆
││➣ ${prefix}gopaylet
││➺ [Bayar Menggunakan Gopay]
││
││「💰」𝗗𝗮𝗻𝗮
││➣ ${prefix}danalet
││➺ [Bayar Menggunakan Dana]
││
││「️💰」𝗢𝗩𝗢
││➣ ${prefix}ovolet
││➺ [Bayar Menggunakan OVO]
││
││「💰」𝗦𝗵𝗼𝗽𝗲𝗲𝗣𝗮𝘆
││➣ ${prefix}shopeelet
││➺ [Bayar Menggunakan ShopeePay]
│╰───────────────···
╰───────────────────⋆`
mts.sendMessage(mts4you.chat, {text: gajdev}, {quoted: useret})
break

case 'testimoni':
bengkak = `
╭──═[📊️𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜📊️]═───⋆
│╭───────────────···
││➣ ${prefix}testi1
││➣ ${prefix}testi2
││➣ ${prefix}testi3
││➣ ${prefix}testi4
││➣ ${prefix}testi5
││➣ ${prefix}testi6
││➣ ${prefix}testi7
│╰───────────────···
╰───────────────────⋆`
mts.sendMessage(mts4you.chat, {text: bengkak}, {quoted: useret})
break

case 'kalkulator':
kalbek = `
╭─═[📠𝗞𝗔𝗟𝗞𝗨𝗟𝗔𝗧𝗢𝗥📠]═──⋆
│╭───────────────···
││➣ ${prefix}tambah
││➣ ${prefix}kurang
││➣ ${prefix}kali
││➣ ${prefix}bagi
│╰───────────────···
╰───────────────────⋆`
mts.sendMessage(mts4you.chat, {text: kalbek}, {quoted: useret})
break

case 'listjapost':
japjep = `*Format Japost ${namaowner}*
(Bukan Milik Admin)

Speck : 
Item : 
Log : 
Harga : 
No Wa : 

✅ Tawar Menawar Langsung Hubungi Kontak Di Atas !
✅ Wajib Menggunakan Jasa Admin Supaya Terhindar Dari Penipuan !
✅ Be Smart Buyer`
mts.sendMessage(mts4you.chat, {text: japjep})
break

case 'tourl': {
mts4you.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await mts.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
mts4you.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
mts4you.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'self': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
mts.public = false
mts4you.reply('Sukses Ubah Ke Penggunaan Sendiri')
}
break

case 'public': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
mts.public = true
mts4you.reply('Sukses Ubah Ke Penggunaan Umum')
}
break

case 'fitur': 
mts4you.reply(`Jumlah Fitur Yang Tersedia\nSaat Ini : ${totalFitur()}fitur`)
break

case 'owner': {
mts.sendContact(mts4you.chat, global.owner, mts4you)
}
break

case 'done':
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 ${namaowner}
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️`
mts.sendMessage(mts4you.chat, {text: text_done}, {quoted: ownget})
break

case 'proses':
text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`
mts.sendMessage(mts4you.chat, {text: text_proses}, {quoted: ownget})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
mts.sendMessage(mts4you.chat, {text: text_trxbatal}, {quoted: ownget})
break

case 'pending':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
mts.sendMessage(mts4you.chat, {text: text_trxpending}, {quoted: ownget})
break

case 'prodaktop1':
bekajs = `${judul1}
···─────────────···

${produk1}`
mts.sendMessage(mts4you.chat, {text: bekajs}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul1}\nNama Item :\nHarga :`)
break

case 'prodaktop2':
bekaffa = `${judul2}
···─────────────···

${produk2}`
mts.sendMessage(mts4you.chat, {text: bekaffa}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul2}\nNama Item :\nHarga :`)
break

case 'prodaktop3':
bjaggs = `${judul3}
···─────────────···

${produk3}`
mts.sendMessage(mts4you.chat, {text: bjaggs}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul3}\nNama Item :\nHarga :`)
break

case 'prodaktop4':
hgfas = `${judul4}
···─────────────···

${produk4}`
mts.sendMessage(mts4you.chat, {text: hgfas}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul4}\nNama Item :\nHarga :`)
break

case 'prodaktop5':
bvvas = `${judul5}
···─────────────···

${produk5}`
mts.sendMessage(mts4you.chat, {text: bvvas}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul5}\nNama Item :\nHarga :`)
break

case 'prodaktop6':
hgfas = `${judul6}
···─────────────···

${produk6}`
mts.sendMessage(mts4you.chat, {text: hgfas}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul6}\nNama Item :\nHarga :`)
break

case 'prodaktop7':
bvvas = `${judul7}
···─────────────···

${produk7}`
mts.sendMessage(mts4you.chat, {text: bvvas}, {quoted: useret})
await sleep (`1000`)
mts4you.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul7}\nNama Item :\nHarga :`)
break

case 'carapembeli':
bvvas = `📮𝗖𝗔𝗥𝗔 𝗣𝗘𝗠𝗕𝗘𝗟𝗜𝗔𝗡📮
┉━━━━━━━━━━━━━━┉
🛍️𝗔𝗞𝗨𝗡 𝗕𝗘𝗟𝗨𝗠 𝗧𝗘𝗥𝗗𝗔𝗙𝗧𝗔𝗥🛍️️

*_Note : KHUSUS GMAIL BISA REQUEST/DARI SAYA_*

➺ 𝐏𝐀𝐒𝐓𝐈𝐊𝐀𝐍 𝐆𝐌𝐀𝐈𝐋 𝐀𝐍𝐃𝐀 𝐆𝐌𝐀𝐈𝐋 𝐀𝐒𝐋𝐈 𝐘𝐀𝐍𝐆 
   𝐓𝐄𝐑𝐃𝐀𝐅𝐓𝐀𝐑 𝐃𝐈 𝐆𝐎𝐎𝐆𝐋𝐄

➺ 𝐊𝐈𝐑𝐈𝐌 𝐆𝐌𝐀𝐈𝐋 (𝐊𝐀𝐍 𝐆𝐌𝐀𝐈𝐋 𝐀𝐉𝐀) 𝐔𝐍𝐓𝐔𝐊
   𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃 𝐆𝐀𝐌𝐄 𝐁𝐈𝐀𝐑 𝐃𝐀𝐑𝐈 𝐒𝐀𝐘𝐀
   
➺ 𝐓𝐔𝐍𝐆𝐆𝐔 𝐒𝐀𝐌𝐏𝐀𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 𝐏𝐄𝐍𝐆𝐄𝐑𝐉𝐀𝐀𝐍

➺ 𝐉𝐈𝐊𝐀 𝐒𝐔𝐃𝐀𝐇 𝐒𝐄𝐋𝐄𝐒𝐀𝐈 𝐏𝐄𝐍𝐆𝐄𝐑𝐉𝐀𝐀𝐍 𝐃𝐀𝐍
   𝐌𝐄𝐋𝐀𝐊𝐔𝐊𝐀𝐍 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 𝐀𝐍𝐃𝐀 𝐃𝐀𝐏𝐀𝐓
   𝐓𝐄𝐑𝐈𝐌𝐀 𝐀𝐊𝐔𝐍 𝐆𝐌𝐀𝐈𝐋 & 𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃

➺ 𝐋𝐎𝐆𝐈𝐍 𝐃𝐀𝐍 𝐋𝐀𝐊𝐔𝐊𝐀𝐍 𝐕𝐄𝐑𝐈𝐅𝐈𝐊𝐀𝐒𝐈 𝐀𝐊𝐔𝐍
   𝐔𝐍𝐓𝐔𝐊 𝐌𝐄𝐋𝐀𝐊𝐔𝐊𝐀𝐍 𝐏𝐄𝐍𝐆𝐆𝐀𝐍𝐓𝐈𝐀𝐍
   𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃
   (𝐌𝐀𝐍𝐆𝐊𝐀𝐍𝐘𝐀 𝐒𝐀𝐘𝐀 𝐒𝐀𝐑𝐀𝐍𝐊𝐀𝐍 𝐏𝐀𝐊𝐄 
   𝐆𝐌𝐀𝐈𝐋 𝐀𝐒𝐋𝐈 𝐁𝐔𝐊𝐀𝐍 𝐀𝐒𝐀𝐋)

➺ 𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐀𝐍𝐃𝐀 𝐁𝐈𝐒𝐀 𝐋𝐀𝐍𝐆𝐒𝐔𝐍𝐆
   𝐌𝐄𝐌𝐀𝐊𝐀𝐈 𝐀𝐊𝐔𝐍 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓

┉━━━━━━━━━━━━━━┉

🛍️𝗡𝗢𝗧𝗘 𝗔𝗞𝗨𝗡 𝗦𝗨𝗗𝗔𝗛 𝗣𝗨𝗡𝗬𝗔🛍️
⭓ 𝐋𝐀𝐊𝐔𝐊𝐀𝐍 𝐒𝐀𝐕𝐄 𝐏𝐀𝐃𝐀 𝐀𝐊𝐔𝐍 𝐀𝐍𝐃𝐀
⭓ 𝐋𝐎𝐆𝐎𝐔𝐓 𝐀𝐊𝐔𝐍 𝐀𝐍𝐃𝐀
⭓ 𝐓𝐔𝐍𝐆𝐆𝐔 𝐏𝐑𝐎𝐒𝐄𝐒 𝐏𝐄𝐍𝐆𝐄𝐑𝐉𝐀𝐀𝐍
   𝐒𝐀𝐌𝐏𝐀𝐈 𝐎𝐖𝐍𝐄𝐑 𝐊𝐈𝐓𝐀 𝐂𝐇𝐀𝐓
   𝐒𝐄𝐋𝐄𝐒𝐀𝐈
⭓ 𝐌𝐀𝐒𝐔𝐊 𝐀𝐊𝐔𝐍 𝐀𝐍𝐃𝐀 𝐓𝐄𝐑𝐔𝐒
   𝐂𝐄𝐊 𝐒𝐄𝐌𝐔𝐀𝐍𝐘𝐀
⭓ 𝐀𝐊𝐔𝐍 𝐀𝐍𝐃𝐀 𝐒𝐈𝐀𝐏 𝐃𝐈 𝐌𝐀𝐈𝐍𝐊𝐀𝐍

⭓ 𝟲𝗚𝗕 𝟭𝟳𝟬%𝗖𝗣𝗨 𝟯𝟬𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟳𝗚𝗕 𝟭𝟴𝟬%𝗖𝗣𝗨 𝟯𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟴𝗚𝗕 𝟭𝟵𝟬%𝗖𝗣𝗨 𝟱𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝗣𝗮𝗻𝗲𝗹 𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝟲𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻

𝗞𝗘 𝗨𝗡𝗧𝗨𝗡𝗚𝗔𝗡 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
➺ 𝐀𝐍𝐃𝐑𝐎𝐈𝐃
➺ 𝐈𝐎𝐒
➺ 𝐁𝐈𝐒𝐀 𝐁𝐄𝐑𝐌𝐀𝐈𝐍 𝐎𝐍𝐋𝐈𝐍𝐄
➺ 𝐈𝐍𝐉𝐄𝐂𝐓 𝐁𝐔𝐊𝐀𝐍 𝐀𝐏𝐊 𝐌𝐎𝐃`
mts.sendMessage(mts4you.chat, {text: bvvas}, {quoted: lep})
await sleep (`2000`)
mts4you.reply(`Jika Ingin Memesan\nHarap Isi Format Di Bawah\n\n|Ram Panel :\nCPU :\nHarga :`)
break

case 'jika':
if (!q) return 
num = `6285894955362`+'@s.whatsapp.net'
jumlah = '1'
waktu = `1s`
for (let i = 0; i < jumlah; i++) {
mts.sendMessage(num, {
text: `🛎️𝗢𝗥𝗗𝗘𝗥𝗔𝗡🛎️
Nama : ${mts4you.pushName}
Nomor : ${sender.split("@")[0]}

𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝘀𝗮𝗻𝗮𝗻
${q.split("|")[1]}
Link : wa.me/${sender.split("@")[0]}`,
})}
trx_txt = `𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 𝗗𝗜 𝗕𝗨𝗔𝗧✅

📃𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗔𝗡𝗗𝗔📃
${q.split("|")[1]}

Kami Akan Menghubungi Anda
Harap Tunggu Selama 24Jam

Jika Belum Ada Balasan Juga
Hubungi wa.me/6285894955362`
mts4you.reply(trx_txt)
break

case 'untuk':
if (!q) return 
num = `${noowner}`+'@s.whatsapp.net'
jumlah = '1'
waktu = `1s`
for (let i = 0; i < jumlah; i++) {
mts.sendMessage(num, {
text: `🛎️𝗢𝗥𝗗𝗘𝗥𝗔𝗡🛎️
Nama : ${mts4you.pushName}
Nomor : ${sender.split("@")[0]}

𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝘀𝗮𝗻𝗮𝗻
${q.split("|")[1]}
Link : wa.me/${sender.split("@")[0]}`,
})}
trx_txt = `𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 𝗗𝗜 𝗕𝗨𝗔𝗧✅

📃𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗔𝗡𝗗𝗔📃
${q.split("|")[1]}

Kami Akan Menghubungi Anda
Harap Tunggu Selama 24Jam

Jika Belum Ada Balasan Juga
Hubungi wa.me/${noowner}`
mts4you.reply(trx_txt)
break

case 'gopaylet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRgopay}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOgopay}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐆𝐎𝐏𝐀𝐘』` }, { quoted: mts4you })
}
break

case 'danalet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRdana}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOdana}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐃𝐀𝐍𝐀』` }, { quoted: mts4you })
}
break

case 'shopeelet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRshopee}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOshopee}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐒𝐇𝐎𝐏𝐄𝐄』` }, { quoted: mts4you })
}
break

case 'ovolet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRovo}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOovo}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐎𝐕𝐎』` }, { quoted: mts4you })
}
break

case 'allpaylet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRallpay}` }, caption: `⬆️SCAN QR DI ATAS⬆️\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐀𝐋𝐋 𝐏𝐀𝐘𝐌𝐄𝐍𝐓』` }, { quoted: mts4you })
}
break

case 'tambah':
if (!q) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var num_one = q.split('|')[0]
var num_two = q.split('|')[1]
if (!num_one) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
if (!num_two) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
mts.sendMessage(mts4you.chat, {text: `${nilai_one + nilai_two}`}, {quoted: lep})
break

case 'kurang':
if (!q) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var num_one = q.split('|')[0]
var num_two = q.split('|')[1]
if (!num_one) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
if (!num_two) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
mts.sendMessage(mts4you.chat, {text: `${nilai_one - nilai_two}`}, {quoted: lep})
break

case 'kali':
if (!q) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var num_one = q.split('|')[0]
var num_two = q.split('|')[1]
if (!num_one) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
if (!num_two) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
mts.sendMessage(mts4you.chat, {text: `${nilai_one * nilai_two}`}, {quoted: lep})
break

case 'bagi':
if (!q) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var num_one = q.split('|')[0]
var num_two = q.split('|')[1]
if (!num_one) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
if (!num_two) return mts4you.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${prefix+command} 1|2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
mts.sendMessage(mts4you.chat, {text: `${nilai_one / nilai_two}`}, {quoted: lep})
break

case 'ping':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
`
mts4you.reply(respon)
}
break

case 'testi1':{
tets1 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 1)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi1}` }, caption: tets1 }, { quoted: ownget })
}
break

case 'testi2':{
tets2 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 2)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi2}` }, caption: tets2 }, { quoted: ownget })
}
break

case 'testi3':{
tets3 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 3)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi3}` }, caption: tets3 }, { quoted: ownget })
}
break

case 'testi4':{
tets4 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 4)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi4}` }, caption: tets4 }, { quoted: ownget })
}
break

case 'testi5':{
tets5 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 5)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi5}` }, caption: tets5 }, { quoted: ownget })
}
break

case 'testi6':{
tets6 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 6)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi6}` }, caption: tets6 }, { quoted: ownget })
}
break

case 'testi7':{
tets7 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 7)*`
mts.sendMessage(mts4you.chat, { image: { url: `${testi7}` }, caption: tets7 }, { quoted: ownget })
}
break

case 'idgroup': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
mts4you.reply(`𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗮𝗺𝗯𝗶𝗹 𝗗𝗮𝘁𝗮....\n${lodconk}`)
let getGroups = await mts.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ 𝗟𝗜𝗦𝗧 𝗚𝗥𝗢𝗨𝗣 𝗗𝗜 𝗕𝗔𝗪𝗔𝗛\n\nTOTAL GROUP ANDA : ${anu.length}\n\n`
for (let x of anu) {
let metadata2 = await mts.groupMetadata(x)
teks += `╭──[ GROUP KE ${hituet+=1} ]──]●>\n│ NAMA : ${metadata2.subject}\n│ ID : ${metadata2.id}\n│ MEMBER : ${metadata2.participants.length}\n╰───────────────]●>\n\n`
}
mts4you.reply(teks + `Untuk Penggunaan ID Group\nKetik : pushkontakid [ ID | Teks ]\nSebelum Penggunaan, Salin Terlebih Dahulu ID Group Di Atas\n\n𝗖𝗥𝗘𝗗𝗜𝗧𝗦 𝗕𝗬 𝐂𝐏𝐌_𝐉𝐇𝐎𝐍\nhttps://bit.ly/4iVrHGT`)
}
break

case "pushkontak":
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isGroup) return mts4you.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`)
if (!q) return mts4you.reply(`𝗦𝗲𝘁 𝗝𝗲𝗱𝗮 𝗗𝗮𝗻 𝗧𝗲𝗸𝘀 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 🤔\nContoh: ${command} 1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!`)
if (!q.split("|")[0].replace(/[^0-9]/g, '')) return mts4you.reply(`𝗦𝗲𝘁 𝗝𝗲𝗱𝗮 𝗛𝗮𝗿𝘂𝘀 𝗕𝗲𝗿𝘂𝗽𝗮 𝗔𝗻𝗴𝗸𝗮\nContoh: ${command} 1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!`)
if (!q.split("|")[1]) return mts4you.reply(`𝗧𝗲𝗸𝘀 𝗕𝘂𝗮𝘁 𝗣𝘂𝘀𝗵𝗞𝗼𝗻𝘁𝗮𝗸 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 😐\nContoh: ${command} 1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!`)
mts4you.reply(`𝗣𝗿𝗼𝘀𝗲𝘀...\n𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗠𝗮𝘀/𝗠𝗯𝗮𝗸`)
const hals = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = text.split("|")[1]
for (let men of hals) {
if (/image/.test(mime)) {
media = await mts.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await mts.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(text.split("|")[0].replace(/[^0-9]/g, ''))
} else {
await mts.sendMessage(men, { text: global.tekspushkonv3 })
await sleep(text.split("|")[0].replace(/[^0-9]/g, ''))
}
}
mts4you.reply(`𝗦𝗨𝗞𝗦𝗘𝗦 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧✅\n𝗪𝗮𝗸𝘁𝘂 : ${q.split("|")[0]}\n𝗣𝗲𝘀𝗮𝗻 : ${q.split("|")[1]}`)
break

case "pushkontakid":
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (isGroup) return mts4you.reply(`Maaf Kak Fitur Ini Khusus Chat Private`)
if (!q.split("|")[0].replace(/[^0-9]/g, '')) return mts4you.reply(`𝗜𝗗𝗚𝗿𝗼𝘂𝗽 𝗛𝗮𝗿𝘂𝘀 𝗕𝗲𝗿𝘂𝗽𝗮 𝗔𝗻𝗴𝗸𝗮\nContoh: ${command} IDGroup|1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!\n\nUntuk Mendapatkan ID Group\nKetik : idgroup`)
if (!q.split("|")[1].replace(/[^0-9]/g, '')) return mts4you.reply(`𝗦𝗲𝘁 𝗝𝗲𝗱𝗮 𝗛𝗮𝗿𝘂𝘀 𝗕𝗲𝗿𝘂𝗽𝗮 𝗔𝗻𝗴𝗸𝗮\nContoh: ${command} IDGroup|1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!\n\nUntuk Mendapatkan ID Group\nKetik : idgroup`)
if (!q.split("|")[2]) return mts4you.reply(`𝗧𝗲𝗸𝘀 𝗕𝘂𝗮𝘁 𝗣𝘂𝘀𝗵𝗞𝗼𝗻𝘁𝗮𝗸 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 😐\nContoh: ${command} IDGroup|1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!\n\nUntuk Mendapatkan ID Group\nKetik : idgroup`)
mts4you.reply(`𝗣𝗿𝗼𝘀𝗲𝘀...\n𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗠𝗮𝘀/𝗠𝗯𝗮𝗸`)
const groupMetadataa = !isGroup? await mts.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = q.split("|")[2]
for (let mej of halls) {
if (/image/.test(mime)) {
media = await mts.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await mts.sendMessage(mej, { image: { url: memk }, caption: global.tekspushkonv2 })
await sleep(q.split("|")[1])
} else {
await mts.sendMessage(mej, { text: global.tekspushkonv2 })
await sleep(q.split("|")[1])
}
}
mts4you.reply(`𝗦𝗨𝗞𝗦𝗘𝗦 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧✅\n𝗪𝗮𝗸𝘁𝘂 : ${q.split("|")[1]}\n𝗣𝗲𝘀𝗮𝗻 : ${q.split("|")[2]}`)
break

case 'tagall': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
let tagall = `══✪〘 *👥 Tag All* 〙✪══
*Pesan : ${q ? q : 'Pesan Kosong'}*\n\n`
for (let mem of participants) {
tagall += `• @${mem.id.split('@')[0]}\n`
}
mts4you.reply(tagall)
}
break

case 'hidetag': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
mts.sendMessage(mts4you.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: mts4you })
}
break

case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
mts4you.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await mts.sendImageAsSticker(mts4you.chat, res.url, mts4you, { packname: {packname}, author: {author}, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'sticker':
case 'sgif': {
if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
mts4you.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mts.sendImageAsSticker(mts4you.chat, media, mts4you, { packname: {packname}, author: {author} })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return mts4you.reply('*Maksimal 10 detik!*')
let media = await quoted.download()
let encmedia = await mts.sendVideoAsSticker(mts4you.chat, media, mts4you, { packname: {packname}, author: {author} })
await fs.unlinkSync(encmedia)
} else {
throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
}
}
break

case 'smeme':{
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
mts4you.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let { TelegraPh } = require('./lib/uploader')
let mee = await mts.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await mts.sendImageAsSticker(mts4you.chat, smeme, mts4you, { packname: {packname}, author: {author} })
await fs.unlinkSync(awikwok)
}
break

case 'tourl': {
mts4you.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await mts.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
mts4you.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
mts4you.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'tomp4': {
if (!/webp/.test(mime)) return mts4you.reply(`Reply stiker dengan caption *${prefix + command}*`)
mts4you.reply(mess.wait)
let media = await mts.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await mts.sendMessage(mts4you.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: mts4you })
await fs.unlinkSync(media)
}
break

case 'toimg': {
if (!/webp/.test(mime)) return mts4you.reply(`Reply sticker dengan caption *${prefix + command}*`)
mts4you.reply(mess.wait)
let media = await mts.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
mts.sendMessage(mts4you.chat, { image: buffer }, { quoted: mts4you })
fs.unlinkSync(ran)
})
}
break

case 'web':
miwal = `
╭───═[ 𝐌𝐘 𝐖𝐄𝐁 ]═────⋆
│╭───────────────···
││➺ 𝐖𝐄𝐁 𝗦𝗧𝗢𝗥𝗘
││https://bit.ly/3DzCDtL
││
││➺ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠
││https://bit.ly/4fB4Xcj
│╰───────────────···
├───═[ 𝗠𝗬 𝗦𝗨𝗣𝗢𝗥𝗧 ]═───⋆
│╭───────────────···
││❒ 𝗦𝗨𝗕𝗖𝗥𝗜𝗕𝗘 + 𝗟𝗢𝗡𝗖𝗘𝗡𝗚
││https://bit.ly/4iVrHGT
││
││❒ 𝗙𝗢𝗟𝗟𝗢𝗪 / 𝗜𝗞𝗨𝗧𝗜
││https://bit.ly/49Tus7q
│╰───────────────···
╰───────────────────⋆`
mts4you.reply(miwal)
break

case 'creator': {
mtsgege = `"𝗖𝗥𝗘𝗔𝗧𝗢𝗥𝗦 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡"
𝗡𝗮𝗺𝗲 : 𝗖𝗣𝗠_𝗝𝗛𝗢𝗡
𝗡𝘂𝗺𝗯𝗲𝗿 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 6285894955362
𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗟𝗶𝗻𝗸𝘀 : wa.me/6285894955362

𝗬𝗼𝘂𝗧𝘂𝗯𝗲 : 𝐠𝐚𝐥𝐞𝐫𝐢_𝐜𝐚𝐫_𝐜𝐩𝐦𝟖𝟎𝟒𝟖
𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗟𝗶𝗻𝗸𝘀 : https://bit.ly/4iVrHGT

𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 : @cpm_jhon
𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗟𝗶𝗻𝗸𝘀 : https://bit.ly/49Tus7q
`
mts.sendMessage(mts4you.chat, {text: mtsgege}, {quoted: lep})
mts.sendContact(mts4you.chat, [`6285894955362`], mts4you)
}
break

case 'setppgc': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isGroup) return mts4you.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`)
if (!quoted) throw `Kirim Foto Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim Foto Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim Foto Dengan Caption ${prefix + command}`
let media = await mts.downloadAndSaveMediaMessage(quoted)
await mts.updateProfilePicture(mts4you.chat, { url: media }).catch((err) => fs.unlinkSync(media))
mts4you.reply(mess.succes)
}
break

case 'setnamagc': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isGroup) return mts4you.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`)
if (!text) throw 'Text ?'
await mts.groupUpdateSubject(mts4you.chat, text).then((res) => mts4you.reply(mess.succes))
}
break

case 'setdeskgc':{
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isGroup) return mts4you.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`)
await mts.groupUpdateDescription(mts4you.chat, text).then((res) => mts4you.reply(mess.succes))
}
break

case 'setppbot': {
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!/image/.test(mime)) return mts4you.reply(`Kirim Foto Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return mts4you.reply(`Kirim Foto Dengan Caption ${prefix + command}`)
let media = await mts.downloadAndSaveMediaMessage(quoted)
await mts.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
mts4you.reply(mess.succes)
}
break

case 'list':
(function(_0x15a845,_0x55dd4a){function _0x5df7d2(_0xc635cc,_0x1c7d3a,_0x5e5b44,_0x41a660){return _0x2664(_0xc635cc- -0x111,_0x5e5b44);}function _0x343f82(_0x39e641,_0x2bb3ce,_0x11e957,_0x2e6b2a){return _0x2664(_0x39e641-0x2f1,_0x2e6b2a);}const _0x74541e=_0x15a845();while(!![]){try{const _0x2a01c3=parseInt(_0x5df7d2(-0x59,-0x5b,-0x66,-0x5a))/(-0x14e3*0x1+0x3*0x851+-0x1*0x40f)+-parseInt(_0x343f82(0x396,0x38b,0x390,0x385))/(0x7a9+0x830+0x5*-0x32b)+-parseInt(_0x343f82(0x3a4,0x397,0x3ad,0x3b5))/(0x5*0x771+-0xde2+-0x1750)*(parseInt(_0x343f82(0x395,0x389,0x38d,0x388))/(0xc99+-0xac2+-0x1d3))+parseInt(_0x343f82(0x3ac,0x39f,0x3bc,0x398))/(-0x5*0x31b+-0x215e+0x1*0x30ea)*(parseInt(_0x343f82(0x3ae,0x3a3,0x3bd,0x3ab))/(0x212e*-0x1+-0x1*-0x259f+-0x46b))+-parseInt(_0x343f82(0x3a0,0x3ad,0x38e,0x392))/(-0x9d1+0x1*-0x68d+0x1065)*(-parseInt(_0x5df7d2(-0x76,-0x79,-0x85,-0x63))/(0x1d0+-0x13d0+-0x8*-0x241))+parseInt(_0x343f82(0x39b,0x3a8,0x392,0x389))/(0x10af+-0x457*0x8+-0x6*-0x303)+-parseInt(_0x5df7d2(-0x6e,-0x5b,-0x76,-0x5c))/(0x139*0x17+-0x217b+0x2*0x2b3);if(_0x2a01c3===_0x55dd4a)break;else _0x74541e['push'](_0x74541e['shift']());}catch(_0x449a8a){_0x74541e['push'](_0x74541e['shift']());}}}(_0x4ac4,0xa8650+-0x3aec2+0x56b3));const _0x1ce65=(function(){function _0x106194(_0x1b1f07,_0x1aaaf3,_0x3b93c7,_0x2eb656){return _0x2664(_0x1b1f07-0x365,_0x1aaaf3);}const _0xbfcf2={};function _0x12fbc7(_0x190fec,_0x37bc6a,_0x8161ac,_0x1ff0da){return _0x2664(_0x37bc6a-0x54,_0x190fec);}_0xbfcf2['FvwDE']=function(_0xfc6709,_0x4be1f5){return _0xfc6709===_0x4be1f5;},_0xbfcf2[_0x106194(0x421,0x41e,0x418,0x41b)]=_0x12fbc7(0xf9,0x106,0xf7,0x107);const _0x2bfbf0=_0xbfcf2;let _0x9d8e76=!![];return function(_0x238490,_0x59236e){const _0x2e889a=_0x9d8e76?function(){function _0x5e59c0(_0x1c261b,_0x2ed5b9,_0x101ad8,_0x3ab7d6){return _0x2664(_0x2ed5b9-0x338,_0x101ad8);}function _0x1444ac(_0x2129d9,_0xc49dfc,_0x171df1,_0x49f60f){return _0x2664(_0xc49dfc-0x34e,_0x49f60f);}if(_0x2bfbf0[_0x5e59c0(0x3e6,0x3ed,0x3f1,0x3f6)](_0x2bfbf0[_0x1444ac(0x41c,0x40a,0x402,0x414)],_0x5e59c0(0x3f3,0x3ea,0x3e5,0x3f5))){if(_0x59236e){const _0x1637b2=_0x59236e[_0x5e59c0(0x3f7,0x3ee,0x3da,0x3e2)](_0x238490,arguments);return _0x59236e=null,_0x1637b2;}}else{const _0x587593=_0x57abac[_0x1444ac(0x418,0x404,0x401,0x408)](_0x455323,arguments);return _0x2519d9=null,_0x587593;}}:function(){};return _0x9d8e76=![],_0x2e889a;};}()),_0x45f719=_0x1ce65(this,function(){function _0x5f4708(_0x53db87,_0x24a38f,_0x19123f,_0x139bd8){return _0x2664(_0x19123f- -0x13e,_0x139bd8);}function _0xf73b7a(_0x3ef505,_0xe74118,_0x31e80f,_0x23883a){return _0x2664(_0x31e80f-0xf6,_0x23883a);}return _0x45f719[_0x5f4708(-0x93,-0xa7,-0x95,-0x98)]()[_0x5f4708(-0x8d,-0x9b,-0x87,-0x7c)]('(((.+)+)+)'+'+$')[_0xf73b7a(0x1ab,0x18d,0x19f,0x1af)]()[_0xf73b7a(0x1be,0x19e,0x1b0,0x1ad)+'r'](_0x45f719)['search'](_0x5f4708(-0x94,-0x81,-0x8e,-0x7b)+'+$');});_0x45f719();if(!isGroup)return mts4you.reply(mess[_0x73923d(-0xda,-0xdb,-0xe2,-0xe1)]);if(db_respon_list[_0x73923d(-0xe0,-0xce,-0xf1,-0xe4)]===-0xd79+0x1991+-0x408*0x3)return mts4you.reply(_0x73923d(-0xe4,-0xe0,-0xd0,-0xd9)+_0x73923d(-0xed,-0xe8,-0xf9,-0xdd)+_0x73923d(-0xd2,-0xe1,-0xc4,-0xbf)+_0x73923d(-0xf1,-0xec,-0x103,-0xff));if(!isAlreadyResponListGroup(from,db_respon_list))return mts4you.reply(_0x73923d(-0xe4,-0xd1,-0xec,-0xde)+'list\x20messa'+_0x73923d(-0xec,-0xf7,-0xf6,-0xf9)+_0x78090c(-0x133,-0x146,-0x129,-0x13a)+'\x20group\x20ini');var arr_rows=[];for(let x of db_respon_list){if(x['id']===from){const _0x4fbe5c={};_0x4fbe5c[_0x73923d(-0xde,-0xea,-0xf0,-0xe0)]=x['key'],_0x4fbe5c[_0x78090c(-0x12a,-0x135,-0x12c,-0x130)]=x[_0x73923d(-0xd7,-0xe9,-0xe3,-0xdd)],arr_rows[_0x78090c(-0x138,-0x14b,-0x128,-0x131)](_0x4fbe5c);}}let tekny='Hai\x20@'+sender['split']('@')[0xd64+0x5d4*-0x2+-0x1bc]+(_0x73923d(-0xea,-0xfe,-0xe8,-0xe3)+'ist\x20item\x20y'+_0x73923d(-0xf4,-0xf8,-0xf5,-0xfa)+'ia\x20di\x20grou'+_0x78090c(-0x137,-0x125,-0x127,-0x140)+_0x73923d(-0xeb,-0xf5,-0xe7,-0xf3)+_0x73923d(-0xdf,-0xed,-0xdd,-0xd4)+_0x78090c(-0x13a,-0x148,-0x144,-0x132)+_0x78090c(-0x128,-0x12a,-0x13a,-0x11f)+_0x78090c(-0x134,-0x12c,-0x142,-0x13a));for(let i of arr_rows){tekny+=_0x73923d(-0xdd,-0xee,-0xcb,-0xf0)+i[_0x78090c(-0x123,-0x135,-0x12d,-0x113)]+'\x0a\x0a';}function _0x78090c(_0x5640bc,_0x3f4e73,_0x989108,_0x200e82){return _0x2664(_0x5640bc- -0x1d0,_0x3f4e73);}const _0x5e009e={};_0x5e009e['text']=tekny;var listMsg=_0x5e009e;function _0x4ac4(){const _0x27f815=['9GJEzmI','key','FvwDE','apply','search','677853KGyDEt','ge\x20di\x20data','constructo','32070NnRXaM','HDFPe','660iLeqyE','oduk\x20yang\x20','ang\x20tersed','push','p\x20ini!\x0a\x0aSi','base','1376deNoSm','!\x0a\x0a','rdaftar\x20di','list\x20messa','ge\x20yang\x20te','lahkan\x20ket','\x0aBerikut\x20l','sendMessag','15568550dWCrGs','62516uTrypg','633606QJsreQ','rowId','Belum\x20ada\x20','diinginkan','toString','3670281FXgpoF','length','ik\x20nama\x20pr','title','Produk\x20:\x20','24416aFNZnC','(((.+)+)+)','OnlyGrup','fHDuq'];_0x4ac4=function(){return _0x27f815;};return _0x4ac4();}function _0x73923d(_0x2ecdbc,_0x26a6f0,_0x34b44f,_0x2ada21){return _0x2664(_0x2ecdbc- -0x18b,_0x2ada21);}function _0x2664(_0x51b13a,_0xa76681){const _0x5a9f15=_0x4ac4();return _0x2664=function(_0x3257c4,_0x380974){_0x3257c4=_0x3257c4-(0x1e95+-0x9fd*0x1+-0x2*0xa01);let _0x2b6b61=_0x5a9f15[_0x3257c4];return _0x2b6b61;},_0x2664(_0x51b13a,_0xa76681);}mts[_0x73923d(-0xe9,-0xdf,-0xeb,-0xf3)+'e'](from,listMsg);
break

case 'addlist':
if (!itsAksesUser) return mts4you.reply(`${mess.pemilikbot}`)
if (!isCmd && isGroup && isAlreadyResponList(from, mts4you.chat, db_respon_list)) 
if (!isGroupAdmins && !isCreator) return mts4you.reply(mess.GrupAdmin)
var get_data_respon = getDataResponList(from, mts4you.chat, db_respon_list)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return mts4you.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return mts4you.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(from, args1, args2, false, '-', db_respon_list)
mts4you.reply(`Berhasil menambah List menu : *${args1}*`)
break

case 'dellist':{
function _0x3b3dd3(_0x302b8c,_0x264c1d,_0x514554,_0x42d43d){return _0x1c1a(_0x302b8c-0x32c,_0x514554);}(function(_0x395e62,_0x5ca165){const _0x2a7285=_0x395e62();function _0x401cc9(_0x42c090,_0x440fa6,_0x1324c9,_0x3d2d4d){return _0x1c1a(_0x42c090-0xb1,_0x440fa6);}function _0x40fa1b(_0x2a4f22,_0x2f2cd8,_0x3a6654,_0x3281d4){return _0x1c1a(_0x2f2cd8- -0x249,_0x3281d4);}while(!![]){try{const _0x2dcbd0=-parseInt(_0x40fa1b(-0x1a0,-0x1b1,-0x1c4,-0x1a3))/(0x5c4*0x5+0x1f5e+0x13*-0x32b)*(-parseInt(_0x40fa1b(-0x1c2,-0x1c3,-0x1b6,-0x1c3))/(0x267*0xb+0xf91+-0x1*0x29fc))+parseInt(_0x401cc9(0x135,0x125,0x148,0x124))/(-0x7a3*0x4+-0xe18+-0x47*-0xa1)+-parseInt(_0x40fa1b(-0x1c6,-0x1ca,-0x1d6,-0x1c3))/(0x2*-0x817+0x1*0x259b+-0x1569)*(parseInt(_0x401cc9(0x139,0x14c,0x136,0x13c))/(0x1c31+-0x51*-0x6c+-0x3e58))+parseInt(_0x40fa1b(-0x1bc,-0x1ae,-0x1bd,-0x1bc))/(-0x26ff+0x7*-0x1b7+0x3306)+-parseInt(_0x401cc9(0x13d,0x13d,0x132,0x135))/(-0x1449+0x1*0x1b30+-0x6e0)*(parseInt(_0x401cc9(0x12e,0x130,0x128,0x124))/(-0x1*0x97d+-0x1*-0x254f+-0xde5*0x2))+-parseInt(_0x40fa1b(-0x1c8,-0x1be,-0x1ab,-0x1cd))/(-0x2240+0x186e+0x9db)+-parseInt(_0x401cc9(0x12c,0x126,0x130,0x129))/(0x16ff+-0x17c7+0xd2);if(_0x2dcbd0===_0x5ca165)break;else _0x2a7285['push'](_0x2a7285['shift']());}catch(_0x2a47e0){_0x2a7285['push'](_0x2a7285['shift']());}}}(_0x3a05,0x5e48*-0x1+0xbd*-0xa6b+-0x1*-0x124ecb));function _0x3885a5(_0x92a2d9,_0x41b468,_0x187a94,_0x5bc8a9){return _0x1c1a(_0x5bc8a9-0x14e,_0x92a2d9);}function _0x3a05(){const _0x5dd37b=['List\x20:\x20','search','constructo','\x0aSilahkan\x20','title','puslist\x20Na','ccXjW','NkTqB','991xBhtpe','ma\x20list\x0a\x0aC','(((.+)+)+)','5193012kQpXsR','rowId','apply','push','\x20dengan\x20Me','s\x0a\x0a','2004840mmvvRL','sendMessag','775904YwgTMI','key','280972TUACXb','kOUOo','Belum\x20ada\x20','puslist\x20Te','OnlyGrup','435849VuKrjO','toString','1670FGOAdA','ngetik\x20.ha','5TXKuTG','Hai\x20@','mDQfl','1953063wuguMm','49HAjPYE','ge\x20di\x20data','ontoh:\x20.ha','Hapus\x20list'];_0x3a05=function(){return _0x5dd37b;};return _0x3a05();}const _0x35fb68=(function(){function _0x57c2f2(_0x2b2a19,_0xd3991b,_0x2a6ad9,_0x16a9e4){return _0x1c1a(_0x16a9e4-0x193,_0x2a6ad9);}const _0x3201b6={};_0x3201b6['ccXjW']=function(_0x5b6517,_0x456dad){return _0x5b6517===_0x456dad;},_0x3201b6[_0x57c2f2(0x22b,0x218,0x21d,0x21d)]=_0x57c2f2(0x200,0x202,0x210,0x213);const _0xbcaca=_0x3201b6;function _0x3a5f25(_0x4e015c,_0x419d1e,_0x589a9e,_0x18b830){return _0x1c1a(_0x419d1e- -0x1b9,_0x589a9e);}let _0x13f668=!![];return function(_0x96775c,_0x488be6){const _0x259f0c=_0x13f668?function(){function _0x5cb384(_0x430a2c,_0x2e61d0,_0x23ca62,_0x35159d){return _0x1c1a(_0x430a2c- -0x2a,_0x35159d);}function _0x220017(_0x15e489,_0xc1f5d0,_0x57e2e9,_0x1bdc22){return _0x1c1a(_0xc1f5d0-0xfb,_0x57e2e9);}if(_0x488be6){if(_0xbcaca[_0x5cb384(0x6c,0x79,0x6c,0x74)](_0xbcaca[_0x220017(0x17b,0x185,0x17b,0x180)],_0xbcaca[_0x220017(0x173,0x185,0x196,0x179)])){const _0x3f89f8=_0x488be6[_0x5cb384(0x73,0x74,0x76,0x7e)](_0x96775c,arguments);return _0x488be6=null,_0x3f89f8;}else{const _0x36f94e={};_0x36f94e[_0x5cb384(0x6a,0x65,0x5f,0x77)]=_0x3e00b2[_0x220017(0x181,0x179,0x176,0x17e)],_0x36f94e[_0x5cb384(0x72,0x66,0x66,0x67)]='#hapuslist'+'\x20'+_0x2992c9[_0x220017(0x17e,0x179,0x17e,0x167)],_0x5612d[_0x5cb384(0x74,0x83,0x73,0x7f)](_0x36f94e);}}}:function(){};return _0x13f668=![],_0x259f0c;};}()),_0x3a79f7=_0x35fb68(this,function(){function _0x33a3a5(_0x152729,_0x4f101f,_0x5a2b97,_0x4fba5c){return _0x1c1a(_0x152729- -0x101,_0x4f101f);}const _0x3df2b9={};_0x3df2b9[_0x490158(-0x1a9,-0x1a4,-0x1a7,-0x19d)]=_0x33a3a5(-0x67,-0x65,-0x75,-0x79)+'+$';function _0x490158(_0x2bb159,_0x548a5e,_0x314ece,_0x5b3fcf){return _0x1c1a(_0x314ece- -0x23e,_0x5b3fcf);}const _0x10b0e2=_0x3df2b9;return _0x3a79f7[_0x490158(-0x1a7,-0x1ab,-0x1b9,-0x1c0)]()[_0x490158(-0x1be,-0x1b8,-0x1ad,-0x1b2)](_0x490158(-0x194,-0x1ab,-0x1a4,-0x1b1)+'+$')[_0x33a3a5(-0x7c,-0x70,-0x8d,-0x7b)]()[_0x490158(-0x1a1,-0x1a9,-0x1ac,-0x1af)+'r'](_0x3a79f7)[_0x33a3a5(-0x70,-0x5d,-0x75,-0x62)](_0x10b0e2[_0x33a3a5(-0x6a,-0x74,-0x6b,-0x77)]);});_0x3a79f7();if(!isGroup)return mts4you.reply(mess[_0x3885a5(0x1ce,0x1e4,0x1bf,0x1d1)]);function _0x1c1a(_0x4db567,_0x5c9564){const _0x5ae498=_0x3a05();return _0x1c1a=function(_0x10a65d,_0x5292a0){_0x10a65d=_0x10a65d-(-0x1390+0x6*0x546+-0x1*0xb9b);let _0x16f5a7=_0x5ae498[_0x10a65d];return _0x16f5a7;},_0x1c1a(_0x4db567,_0x5c9564);}if(!isGroupAdmins&&!isOwner)return mts4you.reply(mess['GrupAdmin']);if(db_respon_list['length']===0xb1b*0x3+0x1e14+-0x3f65)return mts4you.reply(_0x3885a5(0x1db,0x1d3,0x1cc,0x1cf)+'list\x20messa'+_0x3885a5(0x1d9,0x1e0,0x1d5,0x1db)+'base');var arr_rows=[];for(let x of db_respon_list){if(x['id']===from){const _0x5032cc={};_0x5032cc['title']=x[_0x3885a5(0x1cd,0x1c6,0x1cf,0x1cc)],_0x5032cc[_0x3b3dd3(0x3c8,0x3b8,0x3cc,0x3b5)]='#hapuslist'+'\x20'+x[_0x3b3dd3(0x3aa,0x3bb,0x3b4,0x3aa)],arr_rows[_0x3b3dd3(0x3ca,0x3d9,0x3dd,0x3d1)](_0x5032cc);}}let tekny=_0x3885a5(0x1e6,0x1c7,0x1c9,0x1d7)+sender['split']('@')[-0x1*-0x683+0x2*0x4cc+-0x101b]+(_0x3885a5(0x1d1,0x1e6,0x1f0,0x1e1)+_0x3885a5(0x1da,0x1dd,0x1da,0x1dd)+_0x3b3dd3(0x3a5,0x3a8,0x3b4,0x3af)+_0x3b3dd3(0x3b3,0x3aa,0x3b3,0x3c1)+_0x3b3dd3(0x3c1,0x3ae,0x3cf,0x3af)+_0x3885a5(0x1fa,0x1f3,0x1e9,0x1e7)+_0x3b3dd3(0x3ba,0x3a9,0x3b8,0x3ae)+_0x3885a5(0x1e1,0x1e0,0x1c4,0x1d0)+_0x3885a5(0x1bc,0x1d1,0x1c0,0x1c8));for(let i of arr_rows){tekny+=_0x3b3dd3(0x3bc,0x3cc,0x3b7,0x3cd)+i[_0x3885a5(0x1ee,0x1e9,0x1e8,0x1e2)]+'\x0a\x0a';}const _0x9b6ad4={};_0x9b6ad4['text']=tekny;var listMsg=_0x9b6ad4;mts[_0x3885a5(0x1dc,0x1c5,0x1d2,0x1ca)+'e'](from,listMsg);
}
break

case 'hapuslist':
delResponList(from, q, db_respon_list)
mts4you.reply(`Sukses delete list message dengan key *${q}*`)
break

default:
}
if (budy.startsWith('=>')) {
if (!itsMemts) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return mts4you.reply(bang)
}
try {
mts4you.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
mts4you.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMemts) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await mts4you.reply(evaled)
} catch (err) {
mts4you.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMemts) return
try {
return mts4you.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMemts) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return mts4you.reply(`${err}`)
if (stdout) {
mts4you.reply(stdout)
}
})
}
} catch (err) {
mts4you.reply(util.format(err))
}
} 
