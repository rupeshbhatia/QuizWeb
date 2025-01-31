import React from 'react'
import { Col } from 'react-bootstrap'
import CountUp from 'react-countup'

function Admincard({logo,txt,length}) {
  return (
    <Col className='bg-white pe-0 py-5 ' lg={3} sm={12}>
<h2 >{logo}</h2>
<p>{txt}</p>
<p className='fs-3 fw-bold'>{<CountUp start={0} end={length}></CountUp>}+</p>

    </Col>
  )
}

export default Admincard