import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Carousel1 from './components/pages/Carousel.js'
import Home from "./components/pages/Home";
import { Container,Row, Col } from "react-bootstrap";
import Mango from "./components/pages/Products/Mango.js";
import context from "react-bootstrap/esm/AccordionContext";
import Navbar2 from "./components/Navbar copy";


/*const colors = ["#B2D8F7", "#4F5AFF", "#C46D5E", "#4e001e", "#58356E"];*/


function App() {
  return (
<Container fluid>
  <Row>
    <Navbar2/>
<Navbar />
</Row>
<Row>
         <Carousel1/> 
           </Row>

    <Row>   
   <Home />
   </Row>
   
      
      </Container>

 
     

  );
}

export default App;
