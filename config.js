const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349017117779";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_13_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkxLFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3ZkVEdQak9FSUg2T0Z6ZkhWVHJNMlhFbmxmUTRBZ3FNdXNCNXQwZzlqRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWjNPOWJWYXZULUdxWGFBZ0NVQzR5QVwiLFxuICBcInBob25lSWRcIjogXCI0YmMxYjE4Ni0zMDNkLTQyMjMtYjA1MS0yN2QwYzdhYjBlN2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICA2NCxcbiAgICAgIDE4MyxcbiAgICAgIDE3LFxuICAgICAgMjAzLFxuICAgICAgMTIyLFxuICAgICAgMTgzLFxuICAgICAgMTM1LFxuICAgICAgMjE5LFxuICAgICAgMTcyLFxuICAgICAgMTA5LFxuICAgICAgMTg1LFxuICAgICAgMTg0LFxuICAgICAgMTczLFxuICAgICAgMjM0LFxuICAgICAgMTI2LFxuICAgICAgMzIsXG4gICAgICAxNyxcbiAgICAgIDE0NyxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDE1NCxcbiAgICAgIDExOSxcbiAgICAgIDIzOSxcbiAgICAgIDExLFxuICAgICAgMTQ1LFxuICAgICAgMjMxLFxuICAgICAgMTk1LFxuICAgICAgODQsXG4gICAgICA3NCxcbiAgICAgIDYsXG4gICAgICAyNTIsXG4gICAgICAyNixcbiAgICAgIDExMSxcbiAgICAgIDk1LFxuICAgICAgMTUyLFxuICAgICAgOCxcbiAgICAgIDE5MyxcbiAgICAgIDMxLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkgxUEFUR1ZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDExNjQ4MzU1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYzNTQ0NTI3NzIwNTg4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWY3K1pjR0VJK251YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTNEdld0p4ZkNRR0l3UkUxYTBBNWtCSlFIdFJ3bUNlTkJnNTVVMGZvY1VjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlIwV1BucWpVMkRrUGdCcnVaUXNQb2dSeWF5bXB5MjFyUEI0RU1WWDQxWWdibFRzd0R6SHZmY0paQVhnaHUxeXlhdE9rOENYRjJhQXlmUzRwczBYZkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd1a2hXUEtDanZ3VENPZ0pBSVFUdnlPNndtaDhiQnlvL0FBeGRIYTMwOWxNdDF5ZFBPV2orZDRkVUszOTdtQjB2TmNnYldtNnJwOW9IUGU3bnorOUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTE2NDgzNTU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyODM2MDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Zeobot👾🎃",
  ownername:process.env.OWNER_NAME|| "Zeo Fidelis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
