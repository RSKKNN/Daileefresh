import Navbar from 'react-bootstrap/Navbar'
import { Container,Nav,NavDropdown,Image } from 'react-bootstrap'
import {
  BrowserRouter as Router,
 
  Route,
  Link,Routes
} from "react-router-dom";
import React from 'react'
import "./Navbar.css"
import { Spinner } from "@chakra-ui/react"
import { Switch } from 'react-router-dom';
import Home from './pages/Home.js'

import Mango from "./pages/Products/Mango.js"

import Flavours from './pages/Our Flavours/Flavours';
import Navbar2 from './Navbar copy';
import ScrollToTop from './ScrollTop/ScrollToTop';
import About from './pages/About/About.js';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';



const Navbar1 = () => {

const {scrollYProgress} = useViewportScroll();
const {scrollY} = useViewportScroll();

  const logosz = useTransform(scrollY,[0,200],[1,0.8]);
    return (
      <Router>
        <div>
        
<Navbar collapseOnSelect expand="md" bg="white" variant="light" fixed="top"  >
  <Container  >
    
  <Navbar.Brand href="/" >

      <motion.img style={{scale:logosz}}  src="./logo old.png"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="tit"  as={Link} to={"/Products"}>

<div className="men">Our Flavours</div>

      </Nav.Link>
      <Nav.Link className="tit"  as={Link} to={"/Products"}><div className="men">Newsletter</div></Nav.Link>
      <Nav.Link className="tit" as={Link} to={"/About"}><div className="men">About</div></Nav.Link>
       <Nav.Link className="tit" as={Link} to={"/Enquiry"}><div className="men">Contact Us</div></Nav.Link>
     
    </Nav>
  <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
 
  </Container>
  
</Navbar>



        </div>
      <div>
     <ScrollToTop />
              <Switch>
          <Route path="/About">
           <About />

          </Route>
          <Route path="/Products">
           
            <Navbar2 />
    <Flavours />
          </Route>
          <Route path="/">
<Home />
          </Route>
          <Route path="/Enquiry">

          </Route>
            <Route path="/About">
<About />
          </Route>
        </Switch>
      
      </div>
        </Router>
    )
}

export default Navbar1
