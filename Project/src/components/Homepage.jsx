import React, { useEffect, useState } from 'react'
import { Col, Row , Container, Button, ListGroup,ListGroupItem,Accordion} from 'react-bootstrap'
import side from '../images/side.png'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import ProcessSuccess from './homepagecomp/ProcessSuccess'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import Reviews from './homepagecomp/Reviews'
import Banner from './homepagecomp/Banner'

function Homepage() {

  return (
    <>
    <Container fluid  className='' >
    <Container  className='py-3 mt-0 ' >
    <Row >
<Col lg={6} className='d-flex align-items-center p-3 '>
<div className="d-flex flex-column  p-2 text-left" >
<h1>The Most Practical <br /> Online Quiz Maker</h1>

<p className='fs-4'>Create eye-pleasing, fun, and engaging online quizzes within a matter of minutes. Make quizzes to assess your participants’ skills, knowledge, and qualifications!</p>
<Link to="/signup" className='btn btn-warning text-success fw-bold ' style={{width:"max-content"}}><FontAwesomeIcon icon={faPlayCircle}/> Play Now</Link>
</div>
</Col>
<Col lg={6} style={{backgroundImage:"url(splash-login-min.webp)", backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"65vh"}}>
<img src="auth-slider1.webp" alt="" />
</Col>
    </Row>
    <Row >
      <Col lg={12} className='text-center py-5 my-4 '>
      <h1 style={{backgroundImage:"url(green.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}>Host a quiz to energize your audience</h1>
<p className='lh-md fs-5'style={{backgroundImage:"url(green_light.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"left"}}>Looking to level up your presentations? Add excitement and interaction with a live quiz!<br/> Whether serious or casual, our free quiz maker ensures it’s fun and engaging.</p>
      </Col>
    </Row>
    </Container>
    </Container>
    <Banner/>
    <Container fluid style={{padding:"20px",
height:"80vh",alignItems:"center",display:"flex",
backgroundColor:"rgb(42, 197, 223)",marginTop:"5rem",color:"white"}}>
<ProcessSuccess/>
</Container>
<Container fluid className=''>

<Row className='d-flex align-items-center  justify-content-center'style={{height:"80vh"}}>
<Col lg={4} sm={12} style={{backgroundImage:"url(splash-login-min.webp)",backgroundSize:"cover"}} >
  <img src={side} style={{height:"450px",width:"90%"}}/>
  </Col>
  <Col lg={6}  sm={12}>
  <h1 className=''>How to Create Your Own Quiz</h1>
  <br />
  <ListGroup as='ul'className='list-group-flush lh-lg'  >
      <ListGroupItem  >Designing a quiz is easy! Enter your questions, mark the correct answers, and you’re set.</ListGroupItem>
      <ListGroupItem >Use your quiz within a larger presentation, mix it with other Menti questions, or let it stand alone.</ListGroupItem>
      <ListGroupItem >Combine quiz slides with content slides to add anecdotes or extra info.</ListGroupItem>

    </ListGroup>
  </Col>
 
</Row>
</Container>

  <Container className='p-4 mt-4' >
    <Row>
      <Col sm={10} lg={6}>
  <h1 style={{backgroundImage:"url(green.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",lineHeight:"5rem"}}>Frequently Asked Questions</h1>
  <br />
  <Accordion className=''>
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


    </Col>
    <Col className='d-flex justify-content-center   align-items-center'lg={5} sm={12}>
    <img src="comp.webp" alt="" srcset="" style={{height:"50vh ",width:"100%",position:"sticky",top:"20%"}}/>
    </Col>
    </Row>
    <br />
    <br />
    
    <Reviews/>

  </Container>


    </>
  )
}

export default Homepage