import React from 'react'
import { Row,Col,Button, Container } from 'react-bootstrap'
import greentick from '../images/greentick.png'
function SucessFull() {
  return (
    <Container fluid style={{position:"fixed",height:"100%",transition:"all 2s ease",backgroundColor:"rgba(246,248,248,0.5)"}}>
        <Col className='text-center d-flex flex-column align-items-center justify-items-center p-3 gap-2 ' lg={12} style={{height:"350px",width:"450px",
position:"relative",transform:"translate(-50%,-50%)",top:"50%",left:"50%" ,backgroundColor:"rgba(246, 248, 248)"}}>
        
        <img src={greentick} alt="greentick" style={{height:"150px",width:"150px"}} />
       <br />
        <h3>Registration Successful</h3>
        <p>Your Account Has Been Successfully Registered</p>
        </Col>

 </Container>
  )
}

export default SucessFull