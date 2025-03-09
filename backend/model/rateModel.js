let mongoose=require("mongoose")
let reviews=mongoose.Schema({
    rating:{
        type:Number
        
    },
    review:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
 let rateReview=mongoose.model("reviews",reviews)
 module.exports=rateReview