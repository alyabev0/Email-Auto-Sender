require('dotenv').config()
let mailer = require("./mailer")
mailer.sendMail()

let a = 1234;

console.log(a)

console.log(process.env.VARIABLE)