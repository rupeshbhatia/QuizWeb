import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'

function ContactusCard({icon,text,span}) {
  return (
   
  <Col lg={3} sm={6}className='align-items-center d-flex flex-column ' style={{height:"20vh"}}>
<div className='bg-info  rounded rounded-circle  d-flex align-items-center justify-content-center text-white'style={{height:"50px",width:"50px"}} ><FontAwesomeIcon icon={icon}/></div>
  <br />
  <div className="text">
  
    <p>  <label htmlFor="address" className='fw-bold text-capitalize'>{span}</label> : {text}</p>
  </div>
    </Col>
  )
}

export default ContactusCard