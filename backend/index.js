let express=require("express")
let app=express()
let cors=require("cors")
const nodemailer = require('nodemailer');
const crypto = require('crypto');
// In-memory stores for users and tokens (for demo purposes)
let userStore = {};
let tokenStore = {};

const { insertQuestion, readQuestion, AllQuestion, AlQuestion, topicDelete, editQuestions } = require("./controller/questioncontrol")
const { register, login, verifyToken, userInfo, sendEmail, verifyEmails } = require("./controller/userController")
const { createTopic, findTopic, findbyTopic } = require("./controller/quizControl")
const bodyParser = require("body-parser");
const {createReviews,viewReview} = require("./controller/reviewController");
require("dotenv").config()

let Port=process.env.PORT
require("./mongoCon")
app.use(express.json())
app.use(bodyParser.json());

app.use(cors())
app.post("/question",verifyToken,insertQuestion)
app.post("/register",register)

app.post("/login",login)
app.get("/readQuestion/:topic",readQuestion)
app.post("/createTopic/",createTopic)
app.get("/findTopic",findTopic)
app.get("/findbyTopic/:topic",findbyTopic)
app.get("/userInfo",userInfo)
app.get("/allQuestion",AllQuestion)
app.get("/alQuestion",AlQuestion)
app.delete("/deleteTopic/:topic",topicDelete)

// Create a transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rupesh674350@gmail.com",
    pass: "nyfq crbe rcwi zksa",
  },
});

// Route to send OTP
app.post('/send-otp', (req, res) => {
  const { email } = req.body;

  // Generate a 6-digit OTP (you can replace it with your own method)
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Send OTP email
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending OTP email');
    }
    console.log('OTP email sent:', info.response);
    res.status(200).send({ otp });
  });
});

// Verify OTP Route (for testing purposes)
app.post('/verify-otp', (req, res) => {
  const { enteredOtp, actualOtp } = req.body;
  // console.log(enteredOtp)
  // console.log(actualOtp)
  if (enteredOtp === actualOtp) {
    return res.status(200).send('OTP Verified!');
  } else {
    return res.status(400).send('Invalid OTP');
  }
});
app.post("/review",createReviews)
app.get("/rateview",viewReview)
app.put("/editQuestion/:_id",editQuestions)
app.listen(Port,()=>{
    console.log("server run")
})