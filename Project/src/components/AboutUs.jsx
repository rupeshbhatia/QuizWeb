import React from 'react'
import { Row,Col } from 'react-bootstrap'

function AboutUs() {
  return (
    <Row className='text-center d-flex justify-content-center flex-column align-items-center lh-lg'>
      <Col lg={8}>
      <h1>About Us</h1>
      <nav aria-label="breadcrumb" className='' style={{width:"max-content",margin:"0 auto"}} >
  <ol class="breadcrumb ">
    <li class="breadcrumb-item"><a href="/" className='text-decoration-none'>Home</a></li>
    <li class="breadcrumb-item" aria-current="page">About Us</li>
  </ol>
</nav>
<h1>We add </h1>
<p>
We provide you with the solutions we offer to make better use of time
</p>
</Col>
<img src="features-main.jpg" alt="" />
<Col lg={8} className='mt-5'>
<h3 className='fw-bold'>Our Story</h3>
<br />
<p>
At Quiz Craft, we believe in the power of knowledge, creativity, and fun. What started as a simple idea to help educators, students, and quiz enthusiasts came to life as a platform where anyone can create, share, and discover engaging quizzes. Our mission is to make learning interactive, entertaining, and accessible for everyone.
</p>
<br />
<p>We understand how important it is to have the right tools to bring your ideas to life. That’s why we’ve designed our platform to be easy to use, customizable, and packed with features to help you create the perfect quiz for any occasion.</p>
<br />
<p>
Whether you're testing knowledge, having fun with friends, or looking to teach a new concept, Quiz Craft is here to help you make it happen. Join us in making learning more engaging, one quiz at a time!
</p>
</Col>
    </Row>
  )
}

export default AboutUs