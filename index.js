const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: mtsConnect, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@adiwajshing/baileys")
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const readline = require("readline");
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const mta = "a️"
const mtb = "b️"
const mtc = "c️"
const mtd = "d️"
const mte = "e️"
const mtf = "f️"
const mtg = "g️"
const mth = "h️"
const mti = "i️"
const mtj = "j️"
const mtk = "k️"
const mtl = "l️"
const mtm = "m️"
const mtn = "n️"
const mto = "o️"
const mtp = "p️"
const mtq = "q️"
const mtr = "r️"
const mtss = "s️"
const mtt = "t️"
const mtu = "u️"
const mtv = "v️"
const mtw = "w️"
const mtx = "x️"
const mty = "y️"
const mtz = "z️"
const mtA = "A️"
const mtB = "B️"
const mtC = "C️"
const mtD = "D️"
const mtE = "E️"
const mtF = "F️"
const mtG = "G️"
const mtH = "H️"
const mtI = "I️"
const mtJ = "J️"
const mtK = "K️"
const mtL = "L️"
const mtM = "M️"
const mtN = "N️"
const mtO = "O️"
const mtP = "P️"
const mtQ = "Q️"
const mtR = "R️"
const mtSS = "S️"
const mtT = "T️"
const mtU = "U️"
const mtV = "V️"
const mtW = "W️"
const mtX = "X️"
const mtY = "Y️"
const mtZ = "Z️"
const mt1 = "1️"
const mt2 = "2️"
const mt3 = "3️"
const mt4 = "4️"
const mt5 = "5️"
const mt6 = "6️"
const mt7 = "7️"
const mt8 = "8️"
const mt9 = "9️"
const mt0 = "0"
const mt𝟭 = "𝟭"
const mt𝟮️ = "𝟮️️"
const mt𝟯 = "𝟯️"
const mt𝟰 = "𝟰️"
const mt𝟱 = "𝟱️"
const mt𝟲 = "𝟲️"
const mt𝟳 = "𝟳️"
const mt𝟴 = "𝟴️"
const mt𝟵 = "𝟵️"
const mt𝟬 = "𝟬"
const mtsy1 = "/"
const mtsy2 = "_"
const mtsy3 = ":"
const mtsy4 = "@️"
const mtsy5 = ".️"

const usePairingCode = true
//
require('./mts.js')
nocache('../mts.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))


async function mtsBot() {
const { state, saveCreds } = await useMultiFileAuthState('session')
const mts = mtsConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !mts.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Di Awali Dengan 62:\n');
		const code = await mts.requestPairingCode(phoneNumber.trim())
		console.log(`Pairing code: ${code}`)
}

console.log(color(figlet.textSync(`${mtM}${mtT}${mtSS}${mt4}${mtY}${mtO}${mtU}`, {
font: 'DOS Rebel',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 100,
whitespaceBreak: false
}), 'red'))
console.log(color(figlet.textSync(`${mtC}${mtH}${mtA}${mtN}${mtE}${mtL}`, {
font: 'DOS Rebel',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 100,
whitespaceBreak: false
}), 'white'))
console.log(color(`ㅤ${mtI}${mtn}${mtf}${mto} ${mtSS}${mtc}${mtr}${mti}${mtp}${mtt} ${mtB}${mto}${mtt}\nㅤ➺ ${mtB}${mta}${mti}${mtl}${mte}${mty}${mtss} : ${mtM}${mtu}${mtl}${mtt}${mti} ${mtD}${mte}${mtv}${mti}${mtc}${mte}\nㅤ➺ ${mtN}${mta}${mtm}${mta} ${mtSS}${mtc}${mtr}${mti}${mtp}${mtt} : ${mtSS}${mtt}${mto}${mtr}${mte} ${mtT}${mte}${mtm}${mtb}${mtu}${mtss} ${mtW}${mta} ${mtO}${mtr}${mti} ${mtV}4\n\nㅤ${mtI}${mtn}${mtf}${mto} ${mtC}${mtr}${mte}${mta}${mtt}${mto}${mtr}\nㅤ➺ ${mtM}${mty} ${mtY}${mto}${mtu}${mtT}${mtu}${mtb}${mte} : ${mtM}${mtT}${mtSS}4${mtY}${mtO}${mtU} ${mtC}${mtH}${mtA}${mtN}${mtE}${mtL}\nㅤ➺ ${mtM}${mty} ${mtI}${mtn}${mtss}${mtt}${mta}${mtg}${mtr}${mta}${mtm} : ${mtsy4}${mti}${mtg}${mtsy2}${mtm}${mtt}${mtss}${mtss}${mtt}${mto}${mtr}${mte}\nㅤ➺ ${mtT}${mti}${mtk}${mtT}${mto}${mtk} : ${mtsy4}${mtm}${mtt}${mtss}4${mty}${mto}${mtu}${mtsy5}${mtx}${mtd}`, 'yellow'))

mts.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

mts.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!mts.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(mts, kay, store)
require('./mts')(mts, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

mts.sendTextWithMentions = async (jid, text, quoted, options = {}) => mts.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

mts.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

mts.ev.on('contacts.update', update => {
for (let contact of update) {
let id = mts.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

mts.getName = (jid, withoutContact  = false) => {
id = mts.decodeJid(jid)
withoutContact = mts.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = mts.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === mts.decodeJid(mts.user.id) ?
mts.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

mts.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

mts.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await mts.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await mts.getName(i + '@s.whatsapp.net')}\n
FN:${await mts.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Cpm_Jhon@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@galeri_car_cpm8048\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
mts.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

mts.setStatus = (status) => {
mts.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

mts.public = true

mts.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await mts.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

mts.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await mts.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

mts.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await mts.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

mts.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await mts.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

mts.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

mts.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

mts.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

mts.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await mts.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await mts.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

mts.sendText = (jid, text, quoted = '', options) => mts.sendMessage(jid, { text: text, ...options }, { quoted })

mts.serializeM = (m) => smsg(mts, m, store)

mts.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); mts.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); mtsBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); mtsBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); mts.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); mts.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); mtsBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); mtsBot(); }
else mts.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open")
console.log('Connected...', update)
})


mts.ev.on('creds.update', await saveCreds)

start('2',colors.bold.white('\nWaiting for New Messages..'))

return mts

}

mtsBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
