let mongoose=require("mongoose");
let user=mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
      type:String,
      required:true
    },
    role:{
      type:Number,
     required:true
    }
})

let User=mongoose.model("users",user)
module.exports=User