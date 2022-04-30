import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../Pages/CustomLink/CustomLink';
import "./Header.css"
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="myColor" variant="dark">
  <Container>
  <Navbar.Brand to="/">Grocery Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <CustomLink  to="/">Home</CustomLink>
      <CustomLink  to="/blogs">Blogs</CustomLink>
      <CustomLink  to="/login">Login</CustomLink>
      <CustomLink  to="/inventory">Inventory</CustomLink>
   
      
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;