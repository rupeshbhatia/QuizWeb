let reviews=require("../model/rateModel")
let createReviews=async(req,res)=>{
    try{
    const result= new reviews(req.body)
   await result.save()
    res.send(result)
    }
    catch(err){
        res.send(err)
    }
}
let viewReview=async(req,res)=>{
try{
const result=await reviews.find()
res.send(result)
}
catch(err){
    res.send(err)
}
}

module.exports={createReviews,viewReview}