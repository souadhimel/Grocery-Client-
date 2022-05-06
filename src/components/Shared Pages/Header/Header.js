import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import CustomLink from '../../Pages/CustomLink/CustomLink';
import "./Header.css"
const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut=() => {
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="myColor" variant="dark">
  <Container>
  <Navbar.Brand to="/" style={{color: 'black', fontSize:"20px"}}>Grocery Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <CustomLink  to="/">Home</CustomLink>
      <CustomLink  to="/blogs">Blogs</CustomLink>  
      <CustomLink  to="/packages">Packages</CustomLink>

      
   
           {
              user ? <>
              <CustomLink  to="/addProducts">Add Items</CustomLink>
              <CustomLink  to="/myOrders">My items</CustomLink>
              <CustomLink  to="/manageInventories">Manage Items</CustomLink>
              <button className="signOut_click" onClick={handleSignOut}>Sign out</button>
              
              </>
              :<CustomLink  to="/login">Login</CustomLink>
            }
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;