const mongoose=require("mongoose")
 require("dotenv").config()
let port=process.env.MON_CON
mongoose.connect(port).then(()=>{
    console.log("connection established")
}).catch(()=>{
    console.log("error")
})