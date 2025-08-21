//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1B6eStZTnY0NlQzYXMxQkplVUREaTlnUnJsNloxOGNhblZNM1l2eUhGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm9VbVdQMUlrOWxCVmhkY2VZYTdPNkJTdzFDQzNhSFdWZFVzNlY1Zmd6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSWhKa2R3M01haDVySnNEWkZJSE9jUHdQWVNIVktHNWlid2JoZm80clg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5SUt2TDlMY2ROQ0NpbkFnYTFKamhxa0gzeXcyYWdlNHBWMSs5dlhMbHlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDSmU1S0JHbGd2SEVCM3c2OUIyYjNXTE9zWWw0dTBIVVlBZ2tyc0NaWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJVHdHajIyNnpnQ0xyYWVlTE1BaWlCT2w2Mm03OGU3NFlHNmZVcGc0aGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUE2c3lzalFjUkNrMVUrOHd5dGk5aSttbGx2VWQ0TWI1Ym5nMzdxQ2QzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTUzZisxWnZNV0NROTBLdVlEUitoTW5aYWFtakZCK0pZMUZRb0xBbWFRST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNWU0h3dGc5dzM5dFU2RGdJMCtvRVBNdXFEVGxIUjk0VjkyNFhNa2ViY091UTRmVlF1SGx4ZUZqRndQeFJEUHZpbGNlUmxLb2JlMFM4QUFQaUY2ZkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJqeVp3MFg4dWNMRjk2WkN4SStkdmtCUGxCeElsRjZ4YzRIVEFWR2Qwa2g0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpaFZWQVo0cVRmYVhjOEg0NVpfTWNRIiwicGhvbmVJZCI6IjgwMjVkMGU4LTdhNzMtNGNhYS05ZmIyLWVmNTkzZTJkZWI1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzVnNlYk9yYTc0dFFmMVhMMXZSNGE4Wm5TUW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDB0L21QWkt0Z2dHaSttaWR1ejV1TnNhLzdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkMyODVNQjJXIiwibWUiOnsiaWQiOiI5NDc1NjA5NzIzMToxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBbnlhIiwibGlkIjoiMjc2MDY4MjE2OTE0MDU5OjE3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTExibitrQ0VQTHBuTVVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiazVWS1VVTGxlcVpVUEN5Qi9lWHl2dU9wdEhuKzdha1RkdVljNjBBaURobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYUZhRWM5bElnSEEvZTFXejY3RG9DOTV1UVp5WjFTeXErVHp3M2ViWlpScVJPWmZacmJaeGhXMnluMXRwWU5HVjA5Ym81RnpNR1o3bEVxVDZvMFZVQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Im85R1pVWi8yRmszdTUrYkVJbEFkS3JOU0FYcGhsZFFzUHNmVnRmVTRWMkkyYWMxRmlwQy9pOWZtRlFxUWp4SkJMYUJmOXVZRkVCUE0wRS9Pazcwb0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTYwOTcyMzE6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWk9WU2xGQzVYcW1WRHdzZ2YzbDhyN2pxYlI1L3UycEUzYm1IT3RBSWc0YSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1Nzg4NTQ1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU85SCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
