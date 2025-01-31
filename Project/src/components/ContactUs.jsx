import React from 'react'
import { Row,Col, Container, Form,Image,Button} from 'react-bootstrap'
import ContactusCard from './ContactusCard'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {  faLocationDot, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons'
function ContactUs() {
  return (
    <div >
    <Container className=' pt-5'>
   <Row className='text-center  d-flex align-items-center '>
<ContactusCard icon={faLocationDot} text="Hamirpur, Himachal Pradesh 177001 " span="Address"/>
<ContactusCard icon={faPhone} text="+91 7018298643  " span="Mobile No "/>
<ContactusCard icon={faEnvelope} text="rupesh674350@gmail.com " span="Email"/>
<ContactusCard icon={faClock} text="10:00am to 5:00pm Monday to Friday" span="Opening Hours"/>
</Row>
</Container>
<Container fluid className=' py-3' >
  <Container className=' ' >
<Row  >
    <Col lg={6} sm={12}>
    <Form className='py-5 ps-4' >
        <h2>Contact Us</h2>
        <br />
        <Row>
        <Col lg={6}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Label>Full Name</Form.Label>
        <Form.Control type="Name" placeholder="Name"/>
      </Form.Group>

        </Col>
        <Col >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
 
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="Email" placeholder="Email" />
      </Form.Group>

        </Col>
        </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInputText">
        <Form.Label>Subject</Form.Label>
        <Form.Control type='text'placeholder='Subject' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Message'/>
      </Form.Group>
      <br />
      <Button variant="info" className='text-white'>Send Message</Button>
    </Form>
    </Col>
    <Col lg={6} sm={12}>
    <Image src="./bannerimg.png"/>
    </Col>
    </Row>
    </Container>
    </Container>
    </div>
  )
}

export default ContactUs