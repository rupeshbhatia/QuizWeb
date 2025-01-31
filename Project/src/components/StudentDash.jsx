import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StudentTopic from './StudentTopic'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Questions from './Questions'

function StudentDash({onDataChange}) {
let {topic}=useParams()

  return (
    <Container fluid className='mt-5' style={{height:"90vh"}}>
      {!topic?
    <Container>
        <h1>Choose the Topic and Start the Quiz</h1>
        <br />
        <StudentTopic onDataChange={onDataChange}/>
      </Container>:
      <Outlet/>
}
    </Container>

)
}

export default StudentDash