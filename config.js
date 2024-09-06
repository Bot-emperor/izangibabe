//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9XbFlFeVprMU9Wd1VpL2hRTktveUhUVUtpNFEzZnFHNlJOcC9jaVQyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDA2elVkUVZJWjNNSS9rYk92SGp0RzdNSnhORXR2aWxWUzhZaXFKRGZ4ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTzRqTHVoSHJtb1hRWTNLWXJyYlB5eDNjNDFod2FKc2ZycFU5cGJkYTMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TGV6U01RS2lTaW8wQ3BCTU1DcU5NWWp4RjFLeSs5dUgyb3RXMmM3TGlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPRjJCNy9WUXBtK0VaamI4SGY2eEhUVGtma1NjVXFjdEN4MGpETDFXM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPL0NwdC9aeElSeUlaMXhSKzhWVDZuem1hQWVZQW1aTkVialU5Yis4bWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0czelkram5uOFNoNmNWNjBuYWY2cVl2eFNaUzRuSnJub1lHd0lvNHNtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1VlMnhnVjJPbTBGbWJ2SkF6NWRHL3hIanhOekFzWC96Y3M2a1RTYytpMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcrbSt4b05waEZFcnQ2MkZ6bmRXU3dwanBSVlp0TGdpM1MvaExQUUVxek1lRWU3QVdEd2dhS2UwZlFNcXJOVVlmUVVZYkhkMW0vK0pvamFwRWF5NUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJPdUp1dzk4UlExWG1Ta0ZCWldLaC94eS9VaEVQaHFOSnMzQnlBRjBsU3VvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjQyNTI3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTc2NTA1Q0JBNkMyRTE1N0EyNDU4ODZGM0ZCNEY5ODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTYzMTM0Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQTc5QjIyQTBCRDMxMEREMzBEMDFENUY0RUUyNUVEMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjMxMzQzfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2LWg5ZG1yN1F5MjhsVnBkU2xPYzZ3IiwicGhvbmVJZCI6IjZkZDNmOTU0LWEyMjYtNGUyNS05OWEwLTU5ODhiZmM2YzlmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWExadVRmaDFvZnJLU0dyeDhWM1ZtKzF6Y0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkdLaWdSSkJpQmcvWG9rUjErRnRlS2hTVmMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik44Vlc1SDc2IiwibWUiOnsiaWQiOiIyMzQ5MTI0MjUyNzQ0OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlIExvdmUgT2YgTXkgTGlmZfCfmIzwn5mI8J+ZguKAjeKGlPCfkpkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzYnpQZ0RFTjJXN0xZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlorZnZnN05SSFQ4eHRmMm9paEJXbHpOUzJkWXJJT2Z2ZWZ2R3BvSjVVa0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNWNGVSUVNoUHZ5WnZmSk5sK3lwcGxHVFBRNWYyc2hJcFNTYmNGb0ErWHBWR3IzRFo1Ymg5ajBFVSt6djMwNXhhYXNzaXh3Q2xJNjA1QUk1bnhVMUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJTTRQRHljakNVa3Joa2ZibTdNY2lLem5XazM0ejB2Y2p5dzB4eG9UTjFKbWVyU2pIclZiOWtYSE1Uc3ZZcEM4Zk40REhtcjJ2RnVESFFzdURTTlNCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjQyNTI3NDQ6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXZm43NE96VVIwL01iWDlxSW9RVnBjelV0bldLeURuNzNuN3hxYUNlVkpCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjMxMzM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdpYiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
