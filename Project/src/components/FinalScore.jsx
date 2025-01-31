import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
function FinalScore({score}) {
let navigate=useNavigate()
  return (
   <Container className=' m-auto mt-4 '>
    <h3>Your score is {score}</h3>
    
      
    <button onClick={()=>navigate("/user")} className='btn btn-success'>
    Back
    </button>
      
   </Container>
  )
}

export default FinalScore