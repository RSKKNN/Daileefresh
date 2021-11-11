import React from 'react'
import {Carousel, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import mango from'../images/Mangoslide.png';
import lemon from '../images/Meribaslide.png';
import lemonade from '../images/lemonadeslide.png';
import orange from '../images/Jeeraslide.png';
import apple from '../images/Jinthaaaslide.png';

const Carousel1 = () => {
    return (
        <div>
<Carousel pause="false" interval={2000}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={mango}
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={lemon}
      alt="Second slide"
    />
  
  </Carousel.Item >
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={orange}
      alt="Third slide"
    />
  
  </Carousel.Item>
   <Carousel.Item >
    <img
      className="d-block w-100"
      src={apple}
      alt="Third slide"
    />
  
  </Carousel.Item>
   <Carousel.Item >
    <img
      className="d-block w-100"
      src={lemonade}
      alt="Third slide"
    />
  
  </Carousel.Item>

</Carousel>



        </div>
    )
}

export default Carousel1
