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
    fs.writeFileSync("DATA.js", email)
    console.log(data, typeof(data))
})

app.post("/send_mail", cors(), async (req, res) => {
    let {text, subject} = req.body
    console.log(req.body)
    let email = fs.readFileSync("DATA.js", "utf-8")
    email = (email.replace(/^"(.*)"$/, '$1'))
    console.log(email)
    let email2 = "alyabev1998@gmail.com"
    console.log(email, email2)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: "Zaqwest123!"
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
