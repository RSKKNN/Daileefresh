import "./App.css";
import Navbar1 from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Carousel1 from './components/pages/Carousel.js'
import Home from "./components/pages/Home";
import { Container,Row, Col, Navbar } from "react-bootstrap";
import Mango from "./components/pages/Products/Mango.js";
import context from "react-bootstrap/esm/AccordionContext";
import Navbar2 from "./components/Navbar copy";
import React from 'react'


import Slide from "./components/pages/Slide/App";
import Flavours from "./components/pages/Our Flavours/Flavours";

import About from "./components/pages/About/About";
import Gallery from "./components/pages/Gallery/Gallery.js";
import Social from "./components/pages/Social icons/Social";


import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';
import Display from "./components/pages/Our Flavours/Display.js";








/*const colors = ["#B2D8F7", "#4F5AFF", "#C46D5E", "#4e001e", "#58356E"];*/


function App() {
  return (
<>
<Navbar1 />


  </>   

  );
}

export default App;
