import React from 'react'
import {Carousel, CarouselItem, Container, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'
import mango from'../images/Mangoslide.png';
import lemon from '../images/Meribaslide.png';
import lemonade from '../images/lemonadeslide.png';
import orange from '../images/Jeeraslide.png';
import apple from '../images/Jinthaaaslide.png';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';

const Carousel1 = () => {
    return (
    
        
              <Container fluid className="main2">
              
<Carousel pause="false" interval={2000}>
  <CarouselItem >
    <img
      className="d-block w-100"
      src={mango}
      alt="First slide"
    />
 
  </CarouselItem>
  <CarouselItem >
    <img
      className="d-block w-100"
      src={lemon}
      alt="Second slide"
    />
  
  </CarouselItem >
  <CarouselItem >
    <img
      className="d-block w-100"
      src={orange}
      alt="Third slide"
    />
  
  </CarouselItem>
   <CarouselItem >
    <img
      className="d-block w-100"
      src={apple}
      alt="Third slide"
    />
  
  </CarouselItem>
   <CarouselItem >
    <img
      className="d-block w-100"
      src={lemonade}
      alt="Third slide"
    />
  
  </CarouselItem>

</Carousel>
</Container>


    )
}

export default Carousel1
