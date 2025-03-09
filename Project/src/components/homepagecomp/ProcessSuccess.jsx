import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleQuestion,faBarChart, faCaretSquareUp, faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faLine, faSignalMessenger, faSquarePiedPiper } from '@fortawesome/free-brands-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'

function ProcessSuccess() {
  
  return (
    <>
    <Container fluid>
     <Row className=' align-items-center gap-3 justify-content-center px-3 ' >
        <Col className='text-justify lh-lg' lg={8}>
        <h1 className='text-white  fs-1'>Progress and Success</h1>
        <br />
        <p className='text-justify' style={{textAlign:"justify"}}>
        At Quiz Maker, we're committed to helping you create and share engaging, effective quizzes that drive learning and growth. Our platform has evolved over time, incorporating feedback and new features to ensure a seamless, enjoyable experience for all users. Whether you're a teacher, business professional, or just someone looking to test your knowledge, we're proud to offer a tool that meets your needs.
Join Our Community
We're proud of how far we've come, but we're just getting started. The success of our platform is built on the collaboration and trust of users like you. As we continue to expand our features and refine the platform, we look forward to helping you create quizzes that inspire, inform, and engage.
        </p>
        </Col>
        <Col className='d-flex flex-column gap-3 fs-2' lg={3}>
        <Card cls="text-primary " icon={<FontAwesomeIcon icon={faCircleQuestion}/> } en={5} txt="Quizes"/>
        <Card cls="text-danger" icon={<FontAwesomeIcon icon={faChartBar} />} en={20} txt="Users"/>
        <Card cls="text-success" icon={<FontAwesomeIcon icon={faLine}/>} en={80} txt="Engagement"/>
        </Col>
     </Row>
    </Container>
    </>
  )
}

export default ProcessSuccess