let mongoose=require("mongoose")
let questionBank=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    inputs:{
        type:Array,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
        }

})

let Paper= mongoose.model("question",questionBank)
module.exports=Paper
