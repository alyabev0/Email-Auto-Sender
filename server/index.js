const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const events = require("events");
require("dotenv").config();

const emitter = new events.EventEmitter();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/auth", cors(), async (req, res) => {
  console.log(req.body, typeof req.body);
  var data = req.body;
  email = JSON.stringify(data.email);
  pass = JSON.stringify(data.pass);
  service = JSON.stringify(data.service);
  fs.writeFileSync("./DATA/email.js", email);
  fs.writeFileSync("./DATA/pass.js", pass);
  fs.writeFileSync("./DATA/service.js", service);
  console.log(data, typeof data);
});

app.post("/send_mail", cors(), async (req, res) => {
  let { receiver, subject, text } = req.body;
  console.log(req.body);
  let email = fs.readFileSync("./DATA/email.js", "utf-8");
  email = email.replace(/^"(.*)"$/, "$1");
  let pass = fs.readFileSync("./DATA/pass.js", "utf-8");
  pass = pass.replace(/^"(.*)"$/, "$1");
  let service = fs.readFileSync("./DATA/service.js", "utf-8");
  service = service.replace(/^"(.*)"$/, "$1");

  console.log(email, pass);
  console.log(text, subject);
  console.log(email, pass);
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: email,
      pass: pass,
    },
  });
  const mailOptions = {
    from: email,
    to: receiver,
    subject: subject,
    text: text,
  };
  await transporter.sendMail(mailOptions);

  emitter.emit("newMessage", text);
  res.status(200);
});

app.get("/connect", (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-type": "text/event-stream",
    "Cache-control": "no-cache",
  });
  emitter.on("newMessage", (error) => {
    res.write(`data: ${JSON.stringify(error)} \n\n`);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`nodemailerProject is listening at http://localhost:${PORT}`);
});
