let User=require("../model/userModel");
let jwt=require("jsonwebtoken")
require("dotenv").config()
const register=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(400).json({msg:"user already exist"})
        }
        else{
           let result=new User({name,email,password,role})
            await result.save()
            result=result.toObject()
            delete result.password

            jwt.sign({result},process.env.SECRET_KEY,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.send({result:"Invalid Token"})
                }
                else{
                    res.send({result,token});
                }
            })
        }
        }
    catch(err){
        res.send(err)
    }
}
const login=async(req,res)=>{
    try{
        if(req.body.email && req.body.password){
            let result=await User.findOne(req.body).select("-password")
          if(result){
            jwt.sign({result},process.env.SECRET_KEY,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.send({result:"Invalid Token"})
                }
                else{
                    res.send({result,token});
                }
            })
    
    // res.send(result)
          }
          else{
    res.send({result:"user not found"})
          }
        }
    else{
    res.send({result:"user not found"})
    
    }
    }
    catch(err){
        res.send(err)
    }
    }
function verifyToken(req,res,next){
    let header=req.headers['authorization']
    if(typeof header!== 'undefined'){
jwt.verify(header,process.env.SECRET_KEY,(err,valid)=>{
    if(err){
        res.status(401).send({message:'Failed to authenticate Token'})
    }
    else{
        next();
    }
})
    }
    else{
        res.status(403).send({message:"no token provided"})
    }
    // console.log(header)
    // next()

}

const userInfo=async(req,res)=>{
    try{
 let result=await User.find({role:2})
//  console.log(result)
 res.send(result)

    }
    catch(err){
        console.log(err)
    }
}

module.exports={
    register,login,verifyToken,userInfo
}