import React, { useEffect, useState } from 'react'
import { Col, Row , Container, Button, ListGroup,ListGroupItem,Accordion} from 'react-bootstrap'
import side from '../images/side.png'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import ProcessSuccess from './homepagecomp/ProcessSuccess'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

function Homepage() {

  return (
    <>
    <Container fluid  className='text-white' style={{backgroundImage:`url(hhh.jpg)`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
    <Container  className='py-3 mt-0 '>
    <Row >
<Col lg={6} className='d-flex align-items-center p-3 '>
<div className="d-flex flex-column  p-2 text-left">
<h1>Online</h1>
<h2>Quiz Maker: Create a quiz to challenge your audience</h2>
<p className='fs-4'>Make fun interactive quizzes to test your colleagues’ knowledge, run a quiz night with friends, or help students study.</p>
<Link to="/signup" className='btn btn-warning text-success fw-bold ' style={{width:"max-content"}}><FontAwesomeIcon icon={faPlayCircle}/> Play Now</Link>
</div>
</Col>
<Col lg={6} className='p-2'>
<ReactPlayer url='./Features_Quiz_small.mp4' playing={true} loop={true}  controls={false} height='100%' width='100%' />

</Col>
    </Row>
    <Row>
      <Col lg={12} className='text-center py-5 my-4 '>
      <h1>Host a quiz to energize your audience</h1>
<p>Looking to level up your presentations? Add excitement and interaction with a live quiz!<br/> Whether serious or casual, our free quiz maker ensures it’s fun and engaging.</p>
      </Col>
    </Row>
    </Container>
    </Container>
    <Container fluid style={{padding:"20px",
height:"70vh",alignItems:"center",display:"flex"
}}>
<ProcessSuccess/>
</Container>
<Container fluid className='bg-light'>

<Row className='d-flex align-items-center  justify-content-center'>
  <Col lg={6}  sm={12}>
  <h1 className=''>How to Create Your Own Quiz</h1>
  <br />
  <ListGroup as='ul'className='list-group-flush '  >
      <ListGroupItem  className='bg-light'>Designing a Mentimeter quiz is easy! Enter your questions, mark the correct answers, and you’re set.</ListGroupItem>
      <ListGroupItem className='bg-light'>Use your quiz within a larger presentation, mix it with other Menti questions, or let it stand alone.</ListGroupItem>
      <ListGroupItem className='bg-light'>Combine quiz slides with content slides to add anecdotes or extra info.</ListGroupItem>

    </ListGroup>
  </Col>
  <Col lg={4} sm={12} >
  <img src={side} style={{height:"450px",width:"90%"}}/>
  </Col>
</Row>
</Container>

  <Container className='p-4 mt-4' sm={12}>
  <h1>Frequently Asked Questions</h1>
  
  <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What can I use quizzes for at work?</Accordion.Header>
        <Accordion.Body>
        Quizzes are a fun and easy way to level up your training, team building, and presenting. Test your team's knowledge with a monthly quiz, improve collaboration with team building, or even improve morale with a fun music quiz.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How many questions can I add to a quiz?</Accordion.Header>
        <Accordion.Body>
        You can add as many questions as needed to your Mentimeter quiz. Just keep in mind that you’ll need to allow time for your audience to answer the questions and display answers and leaderboards.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do participants join and complete My Quiz?</Accordion.Header>
        <Accordion.Body>
        Participants can join the quiz from any device with internet access, including smartphones, tablets, and computers. They can join from a QR code or via menti.com with your presentation ID.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is there limit to the number of participants?</Accordion.Header>
        <Accordion.Body>
        It depends on which Mentimeter plan you have. If you’re on the Free plan, you can have 50 participants per month. Mentimeter Basic, Pro, and Enterprise plans offer unlimited participants
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What types of questions can I include in the Quiz?</Accordion.Header>
        <Accordion.Body>
        Mentimeter has two different types of quiz slides: Select answer, with predefined options to choose from (like Multiple Choice), and Type answer, where participants write the answer themselves instead of choosing from a list.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What's the difference between quiz slides and question slides?</Accordion.Header>
        <Accordion.Body>
        Quiz slides are designed for competition and have a countdown timer, scores, and Leaderboard slides that reveal a winner. Question slides are designed to gather audience input with a variety of question types, and don’t calculate scores.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>


    </>
  )
}

export default Homepage