const express = require("express")
const app = express()
require('dotenv').config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer") 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
// let mailer = require("./mailer")
// mailer.sendMail()

app.post("/send_mail", cors(), async (req, res) => {
    let {text} = req.body
    console.log(req.body)
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
        text: text
    }

    await transporter.sendMail(mailOptions)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`nodemailerProject is listening at http://localhost:${PORT}`)
  })
