import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const {user,logOut}=useAuth();

    return (
        <div className='stickyNavigate'>
             <Navbar className="child" bg="dark" variant="dark" expand="lg" >
  <Container fluid>
    <Navbar.Brand className="ms-lg-5" href="#">
   Doctors Hospital
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto me-lg-5 my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={HashLink} to="home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} to="home#doctors">Doctors</Nav.Link>
        <Nav.Link as={HashLink} to="home#contact">Contact Us</Nav.Link>
      { !user ?<div>
        <Link to="/login">
        <Button variant="link">LogIn</Button>
        </Link>
    <Link to="/register">
    <Button variant="outline-warning">Register</Button>

    </Link>
      </div> :  <div>
        <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src={user?.photoURL} alt="user"  />
        <button className='ms-3' onClick={logOut}>LogOut</button>

        <p style={{fontSize:'16px'}} className="text-white">{user.email ? user.email : user.displayName}</p>

      </div>  }
      </Nav>
    
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;