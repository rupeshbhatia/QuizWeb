import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { Row,Col, Container,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authcontext'
function Footer() {
  const {isLoggedIn}=useAuth()
  return (

<footer style={{backgroundColor:"rgba(22, 20, 20, 0.97)",color:"white",minHeight:"30vh",width:"100%"}} className='pt-5 pb-2 mt-3' >
  <Row className='d-flex justify-content-evenly align-items-evenly ' >
    <Col lg={3} md={5} sm={10} xs={10}>
 <h3>Quiz Maker</h3>
 {/* <br /> */}
 <p>QUizMaker is Platform to <br /> Create and Play quizes.</p>

    </Col>
    <Col lg={3} md={5} xs={10}>
    <h5>Get new Quiz Updates Direct to your Email Inbox</h5>
    <div className='d-flex gap-2'>
    <input type="email"  placeholder='Your Email' className='form-control rounded-0 bg-dark border-light text-light'/> 
    <Button className=' rounded-0 ' variant='danger'>Subscribe</Button>

    </div>
    </Col>
    <Col lg={2} md={3} xs={4} className='d-flex align-items-center fs-3 flex-column mt-2'>
    <h5 >Follow Us</h5>
    <div className='d-flex justify-content-center gap-2 fs-3  '>
 <FontAwesomeIcon icon={faFacebook} className='border border-2 rounded rounded-circle p-1'/>
 <FontAwesomeIcon icon={faInstagram} className='border border-2 rounded rounded-circle p-1'/>
<FontAwesomeIcon icon={faTwitter} className='border border-2 rounded rounded-circle p-1'/>
</div>
    </Col>
    <Col lg={2} md={4} xs={6} className='mt-2' >
    <h5>Contact Us</h5>
    {/* <br />   */}
    <p>rupesh674350@gmail.com
      <br />
      +91 7018298643
    </p>
    </Col>
  </Row>
  <hr style={{border:"1px solid white"}}/>
  <p className='text-center'>&copy;2025 Quiz Maker Platforms, All rights Reserved</p>
  </footer>
  )
}

export default Footer