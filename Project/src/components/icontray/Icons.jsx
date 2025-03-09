import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import './Icons.css'
function Icons({iconFun}) {

  return (
     <Container  >
    <Row className=' bg-info py-2  fs-4  justify-content-evenly align-items-center flex-wrap gap-2 text-center'>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light ' onClick={()=>iconFun({icon:"fa-code",family:"fa-solid"})}><i className="fa-solid fa-code"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-book",family:"fa-solid"})}>  <i className="fa-solid fa-book"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-flask",family:"fa-solid"})}>  <i className="fa-solid fa-flask"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-laptop-code",family:"fa-solid"})}>  <i className="fa-solid fa-laptop-code"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-globe",family:"fa-solid"})}>  <i className="fa-solid fa-globe"></i></Col> 
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-layer-group",family:"fa-solid"})}>  <i className="fa-solid fa-layer-group"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-spell-check",family:"fa-solid"})}>  <i className="fa-solid fa-spell-check"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-file-code",family:"fa-solid"})}>  <i className="fa-solid fa-file-code"></i></Col>
        <Col    lg={3} sm={3} xs={3} className='icon-hover border border-light' onClick={()=>iconFun({icon:"fa-rectangle-list",family:"fa-solid"})}>  <i className="fa-solid fa-rectangle-list"></i></Col>
        
    </Row>
    </Container>
  )
}

export default Icons