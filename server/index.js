const express = require("express")
const app = express()
require('dotenv').config()
const fs = require('fs');
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer") 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
// let mailer = require("./mailer")
// mailer.sendMail()

app.post("/auth", cors(), async (req, res) => {
    // var { email, pass } = req.body
    console.log(req.body, typeof(req.body))
    var data = req.body
    email = JSON.stringify(data.email)
    pass = JSON.stringify(data.pass)
    fs.writeFileSync("email.js", email)
    fs.writeFileSync("pass.js", pass)
    console.log(data, typeof(data))
})

app.post("/send_mail", cors(), async (req, res) => {
    let {text, subject} = req.body
    console.log(req.body)
    let email = fs.readFileSync("email.js", "utf-8")
    email = (email.replace(/^"(.*)"$/, '$1'))
    let pass = fs.readFileSync("pass.js", "utf-8")
    pass = (pass.replace(/^"(.*)"$/, '$1'))
    console.log(email, pass)
    // let email2 = "alyabev1998@gmail.com"
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: pass
        }
    })

    const mailOptions = {
        from: "alyabev1998@gmail.com",
        to: "alyabev1998@gmail.com",
        subject: subject,
        text: text 
    }

    await transporter.sendMail(mailOptions)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`nodemailerProject is listening at http://localhost:${PORT}`)
  })
