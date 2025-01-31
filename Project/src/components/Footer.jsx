import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { Row,Col, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authcontext'
function Footer() {
  const {isLoggedIn}=useAuth()
  return (
    <Container fluid style={{backgroundColor:"#37AECB",color:"white"}} >
    <Row className='d-flex justify-content-evenly p-3 text-center' >
<Col lg={4}>
<h3>Quiz Maker</h3>
<p>&copy;2024
    RB Developer's
</p>
</Col>
      
{
  isLoggedIn?"":
<>
<Col lg={4} >
<h3>Important Links</h3>
<ul style={{listStyleType:"none"}}>
 <li><NavLink to="/" className='bg-none text-white text-decoration-none'>Home</NavLink></li>   
 <li>
 <NavLink to="/contact" className='bg-none text-white text-decoration-none'>Contact</NavLink>

 </li>
 <li>
 <NavLink to="/signup" className='bg-none text-white text-decoration-none'>SignUp</NavLink>

 </li>
 <li>
 <NavLink to="/signin" className='bg-none text-white text-decoration-none'>Log In</NavLink>

 </li>
    </ul>
</Col>

<Col lg={4}>
<h3>Follow Us</h3>
<br />
<div className='d-flex justify-content-center gap-3 fs-3'>
<FontAwesomeIcon icon={faFacebook}/>
<FontAwesomeIcon icon={faInstagram}/>
<FontAwesomeIcon icon={faTwitter}/>
<FontAwesomeIcon icon={faEnvelope}/>
</div>
</Col>
</>
}
<hr />

    </Row>
    </Container>
  )
}

export default Footer