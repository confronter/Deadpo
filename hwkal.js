/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'ano_nymous_sam' // ubah aja
global.email = 'samuelcircute@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ꪶ༺֎ᚏ༈࿉𝘾𝙤𝙣𝙛𝙧𝙤𝙣𝙩𝙚𝙧._⧉ᚙ֎⸙༻' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254796283064'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '⫹⸙⧉𝘾𝙤𝙣𝙛𝙧𝙤𝙣𝙩𝙚𝙧._⧉⸙⫺' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '⫹⸙⧉𝘾𝙤𝙣𝙛𝙧𝙤𝙣𝙩𝙚𝙧._⧉⸙⫺' // ubah aja ini nama sticker
global.author = '༻࿇𝘾𝙤𝙣𝙛𝙧𝙤𝙣𝙩𝙚𝙧._❖༺' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
