const Topic=require("../model/topicmodel")
let Paper=require("../model/quizmodel")

let createTopic=async(req,res)=>{
    try{
 
        const userExist=await Topic.findOne(req.body)
        if(userExist){
            return res.status(400).json({msg:"topic already exist"})
        }
        else{
let result=new Topic(req.body)
await result.save()
res.send(result)
    }}
    catch(err){
   res.send(err)
    }
}
const findTopic=async(req,res)=>{
try{
let result=await Topic.find()
res.send(result)
}
catch(err){
    res.send(err)
}
}

let findbyTopic=async(req,res)=>{
    // console.log(req.params.topic)
    let result=await Paper.find({topic:req.params.topic})
    
    // console.log(result)

}

let topicCount
module.exports={
    createTopic,findTopic,findbyTopic
}