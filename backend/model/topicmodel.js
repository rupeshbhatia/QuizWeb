let mongoose=require("mongoose");
let topicSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
createdAt:{
    type:Date,default:Date.now
},
})
module.exports=mongoose.model('Topic',topicSchema)