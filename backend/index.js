let express=require("express")
let app=express()
let cors=require("cors")
const { insertQuestion, readQuestion, AllQuestion, AlQuestion, topicDelete } = require("./controller/questioncontrol")
const { register, login, verifyToken, userInfo } = require("./controller/userController")
const { createTopic, findTopic, findbyTopic } = require("./controller/quizControl")
require("dotenv").config()

let Port=process.env.PORT
require("./mongoCon")
app.use(express.json())

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
app.listen(Port,()=>{
    console.log("server run")
})