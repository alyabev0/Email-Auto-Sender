require("dotenv").config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: "alyabev1998@gmail.com",
    to: "alyabev1998@gmail.com",
    subject: "auto mail",
    text: "Auto Text"
}

 function sendMail(){
     transporter.sendMail(mailOptions)
 }
console.log("sucess")
module.exports.sendMail = sendMail