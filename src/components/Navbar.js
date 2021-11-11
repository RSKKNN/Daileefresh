import Navbar from 'react-bootstrap/Navbar'
import { Container,Nav,NavDropdown,Image } from 'react-bootstrap'

import React from 'react'
import "./Navbar.css"

const Navbar1 = () => {
    return (
        <div>
            
<Navbar collapseOnSelect expand="md" bg="white" variant="light" fixed="top" >
  <Container fluid>
  <Navbar.Brand href="#home" >

      <Image src="./logo.png"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Our Flavours</Nav.Link>
      <Nav.Link href="#pricing">Whats New</Nav.Link>
      <Nav.Link href="#pricing1">About</Nav.Link>
       <Nav.Link href="#pricing2">Dealership Enquiry</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Contacts</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



        </div>
    )
}

export default Navbar1
