import React from 'react'
import {Carousel, CarouselItem, Container, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import mango from'../../images/Mangoslide.png';
import lemon from '../../images/Meribaslide.png';
import lemonade from '../../images/lemonadeslide.png';

import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';
import './Gallery.css'

const Gallery = () => {
    return (
    <div className="galMain">
        
              <Container fluid className="gal">
              
<Carousel fade interval={300}>
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
      src={lemonade}
      alt="Third slide"
    />
  
  </CarouselItem>

</Carousel>
</Container>
</div>

    )
}

export default Gallery
