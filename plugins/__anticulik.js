let fs = require('fs') 
 let handler = m => m 
  
 handler.all = async function (m, { isBlocked }) { 
     if (isBlocked) return 
     // ketika ada yang invite/kirim link grup di chat pribadi 
     if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) { 
     let teks = `*• SEWA BOT & UP TO PREMIUM •*
        
❏ *LIST SEWA BOT*
• Hemat = _3k/grup (1 minggu)_
• Normal = _5k/grup (1 bulan)_
• Standar = _10k/grup (3 bulan)_
• Pro = _20k/grup (5 bulan)_                                           
• Permanen = _30k_

• Free/Gratis = Gunakan join limit (1 Hari)

❏ *PERPANJANG MASA AKTIF BOT*
• Level Hemat = 3k
• Level Normal = 5k
• Level Standar = 10k
• Level Pro = 20k



❏ *UPGRADE PREMIUM*
• 5k  (1 Day)
• 10k (1 Minggu)
• 20k (1 Month)
• 30k (3 Month)
• 40k (5 Month)
• 50k (8 Tahun)


❏ *PERPANJANG MASA AKTIF PREMIUM*
5k = 5k
15k = 7k
25k = 10k
45k = 15k
65k = 25k
75k = 40k



❏ *FITUR PREMIUM*
• Unlimited Limit
• Unlock Fitur 18+
• Ban, suspand User
• Mendapatkan code Hadiah Exp, money
Create (Rpg)
• Cheat Money, exp, limit,
• +5 Join Limit ticket
`
     this.reply(m.chat, teks, fpay) 
     const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
     this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m) 
     } 
 } 
  
 export default handler