import React from 'react'
import { Col,Container,Row} from 'react-bootstrap'

function AboutUs() {
  return (
    <Container className='py-5 ' style={{height:"95vh"}}>
    <Row>
        <Col lg={3} sm={12}>
        <img src='./about.png' alt='quizvc' style={{height:"50vh",width:"20vw",textAlign:"center"}}/>
        </Col>
        <Col lg={9} sm={12} >
        <p style={{textAlign:"justify",padding:""}}>
        Welcome to QuizMaker, the home of fun, engaging, and easy-to-create quizzes! Whether you’re a teacher, a business owner, or just someone looking to challenge your friends, we’ve got the tools you need to design the perfect quiz experience.

Our mission is simple: to make quiz creation accessible to everyone. With our intuitive platform, you can create personalized quizzes in minutes, track results, and share them with others effortlessly. From multiple-choice to true/false, and everything in between, our versatile quiz maker gives you full control over your content.

Whether you're looking to spice up your classroom, build brand engagement, or just have a little fun, QuizMaker is here to help you turn any subject into an interactive experience.

<br />
<br />
<h5>Join us today and let’s start quizzing! </h5>
Our mission is simple: to make quiz creation accessible to everyone. With our intuitive platform, you can create personalized quizzes in minutes, track results, and share them with others effortlessly. From multiple-choice to true/false, and everything in between, our versatile quiz maker gives you full control over your content.

Whether you're looking to spice up your classroom, build brand engagement, or just have a little fun, QuizMaker is here to help you turn any subject into an interactive experience.

Join us today and let’s start quizzing!
<br />
  With our intuitive platform, you can create personalized quizzes in minutes, track results, and share them with others effortlessly. From multiple-choice to true/false, and everything in between, our versatile quiz maker gives you full control over your content.

Whether you're looking to spice up your classroom, build brand engagement, or just have a little fun, QuizMaker is here to help you turn any subject into an interactive experience.

Join us today and let’s start quizzing!
</p>
        </Col>
    </Row>
    </Container>
  )
}

export default AboutUs