import React from 'react'
import './Mango.css'
import { Row, Col,Card,Figure,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Box} from "@chakra-ui/react"
import { Container } from '@material-ui/core';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Mango = () => {

    return (

<Container>
 
<img className="mango" width="201.68" height="691" src="./Mango.png" alt="" />

</Container>

    )
}

export default Mango
