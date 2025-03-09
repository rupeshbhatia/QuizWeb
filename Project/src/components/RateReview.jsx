import React,{useEffect, useState} from 'react'
import './StarRating.css'
import { Button } from 'react-bootstrap';
function RateReview({rate}) {
    const [rating, setRating] = useState(0);
    const [review,setReview]=useState("")
    let user=localStorage.getItem("user")
    let name=JSON.parse(user).name
    let email=JSON.parse(user).email
    
    let api=async(e)=>{
      e.preventDefault()
   
     let result=await fetch("http://localhost:8080/review",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify({rating,review,name,email})

     })
    result = await result.json()
// console.log(result)
if(result){
  alert("submitted")
  rate(false)
}
    }
   
  return (
    <div className="rating-container justify-content-center align-items-center d-flex flex-column text-center bg-light"style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",minHeight:"60vh",width:"40vw",
     
    }}>
        <div style={{position:"absolute",top:"10px",right:"20px",fontSize:"1.5rem",cursor:"pointer"}} onClick={()=>rate(false)}> &#10005;</div>
      <h2>Rate and Review</h2>
      <div className="stars-container " >
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`}
            onClick={() => setRating(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <form onSubmit={api}>
      <p>Your rating: <span>{rating}</span> out of 5</p>
     <textarea className='form-control w-75 ' style={{height:"16vh",resize:"none"}} onChange={(e)=>setReview(e.target.value)}></textarea>
     <br />
     <Button type='submit'>Save & Continue</Button>
     </form>
    </div>
  )
}

export default RateReview