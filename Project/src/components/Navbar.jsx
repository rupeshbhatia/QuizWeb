import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import navcss from './Navbar.module.css'
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate,Link } from 'react-router-dom';
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
        <Navbar.Brand href="#home" className=' fw-bold fs-3'>Quiz Maker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto lh-lg fw-bold navitems" >
            {user?
            <NavLink to='/' className='  me-3 text-dark' onClick={logout1}>Logout ({JSON.parse(user).name})</NavLink>

            :
            <>
            <NavLink to="/" className={({ isActive }) => (isActive ? `${navcss.navitems} ${navcss.active}` : navcss.navitems)} >Home</NavLink>
            <NavLink to="/about"className={({ isActive }) => (isActive ? `${navcss.navitems} ${navcss.active}` : navcss.navitems)}>About Us</NavLink>
            <NavLink to='/contact'  className={({ isActive }) => (isActive ? `${navcss.navitems} ${navcss.active}` : navcss.navitems)}
             >Contact Us</NavLink>
            <NavLink to='/signup' className={({isActive})=>(isActive?`btn btn-warning text-dark me-3 px-3 rounded  border border-dark fw-bolder`:`btn btn-light text-dark me-3 px-3 rounded  border border-dark fw-bolder`)}   >Sign Up</NavLink>
            <NavLink to='/signin' className={({ isActive }) => (isActive ? `  btn border border-2 border-dark  me-3 px-3 rounded  bg-success fw-bolder text-white` :` btn border border-2 border-dark text-white me-3 px-3 rounded  bg-dark fw-bolder `)}>Sign In</NavLink>

            </>
            }
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>

  );
}

export default TNavbar;