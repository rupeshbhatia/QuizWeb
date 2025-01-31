import React from 'react'
import { Row,Col } from 'react-bootstrap'
import CounterUp, { useCountUp } from 'react-countup'

function Card({icon,en,cls,txt}) {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
    <Row className='border  align-items-center justify-content-center text-center'>

    <Col className={cls}>{icon}</Col>
 
    <Col className=' ' style={{height:"5rem",paddingTop:"8px"}}><h5><CounterUp start={0} end={en} duration={4} enableScrollSpy></CounterUp>+</h5>
    <p style={{fontSize:"14px"}} className='text-gray'>{txt}</p>
    </Col>
    </Row>
    </>
  )
}

export default Card