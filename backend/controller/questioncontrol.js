let Paper=require("../model/quizmodel")
const insertQuestion=async(req,res)=>{
    try{
        
 let result=new Paper(req.body)
 await result.save()
 res.send(result)
    }
    catch(err){
res.send(err)
    }
}

const readQuestion=async(req,res)=>{
    let result=await Paper.find({topic:req.params.topic})
    res.send(result)
}
const AllQuestion=async(req,res)=>{
    let result=await Paper.find({})
    res.send(result)
}
const AlQuestion=async(req,res)=>{
    try {
        const topicsCount = await Paper.aggregate([
          {
            $group: {
              _id: '$topic', // Group by topic
              count: { $sum: 1 }, // Count the number of questions per topic
            },
          },
        ]);
    
        res.json(topicsCount);
      } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Error retrieving data' });
      }
   
}

const topicDelete=async(req,res)=>{
  // console.log(req.params)
    try{
let result=await Paper.deleteMany({topic:req.params.topic})
res.save()
// console.log(result)
    }
    catch(err){
        res.send(err)
    }
}
module.exports={
    insertQuestion,readQuestion,AllQuestion,AlQuestion,topicDelete
}