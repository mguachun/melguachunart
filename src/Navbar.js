
import React from 'react';
// import About from "./About";
import './App.css';
// import Commissions from './Commissions';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
  
      <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Melissa Guachun Illustration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#commissions">Commissions</Nav.Link>
            <Nav.Link href="https://www.etsy.com/shop/MelGuachunArt">Etsy</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      //  <About />
      // <Commissions /> 
    // </div>
  );
}

export default App;
