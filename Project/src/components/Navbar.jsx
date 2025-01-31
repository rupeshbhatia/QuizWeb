import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Authcontext';
function TNavbar() {
  let {logout}=useAuth()
  let user=localStorage.getItem("user")
  let navigate=useNavigate()
  const logout1=()=>{
    localStorage.clear()
      logout()
    navigate("/")
  }
  return (
    <>
    
    <Navbar expand="lg" className="lh-3 p-3 ">
      <Container fluid>
        <Navbar.Brand href="#home" className='text-white fw-bold fs-3'>Quiz Maker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto lh-lg " >
            {user?
            <Link to='/' className='text-decoration-none me-3 text-white' onClick={logout1}>Logout ({JSON.parse(user).name})</Link>

            :
            <>
            <Link to="/" className='text-decoration-none me-3 text-white '>Home</Link>
            <Link to="/about"className='text-decoration-none me-3 text-white'>Aboutus</Link>
            <Link to='/contact'className='text-decoration-none me-3 text-white'>Contact Us</Link>
            <Link to='/signup' className='btn btn-info text-white me-3 rounded rounded-pill'>Get Started</Link></>
            }
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>

  );
}

export default TNavbar;