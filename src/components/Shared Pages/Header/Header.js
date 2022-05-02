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
  <Navbar.Brand to="/">Grocery Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <CustomLink  to="/">Home</CustomLink>
      <CustomLink  to="/blogs">Blogs</CustomLink>  
      <CustomLink  to="/packages">Packages</CustomLink>  
      <CustomLink  to="/addProducts">Add Products</CustomLink>  
      <CustomLink  to="/inventory">Inventory</CustomLink>
   
      {
              user ? <button style={{backgroundColor:"pink", borderRadius:"50px"}} onClick={handleSignOut}>Sign out</button>:
              <CustomLink  to="/login">Login</CustomLink>
            }
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;