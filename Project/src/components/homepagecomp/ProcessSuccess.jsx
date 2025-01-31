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
    <Container  >
     <Row className='my-5 align-items-center justify-content-center px-3 ' >
        <Col className='text-justify'>
        <h1 className=''>Progress and Success</h1>
        <br />
        <p className='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum neque mollitia, quae pariatur voluptatum asperiores id alias itaque, ad debitis accusamus ea voluptate quas nihil adipisci incidunt distinctio amet.
        </p>
        </Col>
        <Col className='d-flex flex-column gap-2 fs-2'>
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