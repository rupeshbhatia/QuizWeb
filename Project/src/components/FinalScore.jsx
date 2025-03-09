import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import RateReview from './RateReview'
function FinalScore({score}) {
let navigate=useNavigate()
let [rate,setRate]=useState(true)
let rateForm=(val)=>{
  setRate(val)

}

  return (
   <Container className=' m-auto mt-4 postion-relative'>
    {rate?
    <RateReview rate={rateForm} />
    :
    <>
<h3>Your score is {score}</h3>
<button onClick={()=>navigate("/user")} className='btn btn-success'>
Back
</button>
</>
    }
  
      
   </Container>
  )
}

export default FinalScore