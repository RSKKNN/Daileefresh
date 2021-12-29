import React from 'react'
import {Container, Row, Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';

import './Home.css'
import Mango from './Products/Mango';
import Navbar from '../Navbar';
import Carousel1 from './Carousel';
import Navbar2 from '../Navbar copy';
import Gallery from './Gallery/Gallery.js';
import Social from './Social icons/Social';
import { Center } from '@chakra-ui/layout';
import {GrLogout, GrUserWorker } from "react-icons/gr"
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiShakingHands,GiFactory } from "react-icons/gi";
import { ImFacebook,ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai"
import { blue } from '@material-ui/core/colors';
import mango from'../images/Mangoslide.png';

const Home = () => {
    return (
<>
<Mango />
<motion.div style={{zIndex:1}}>

</motion.div>
<Carousel1 />

<motion.div style={{y:7950}} className="details" >
  <Container  fluid>
    <Row style={{backgroundColor:'white'}}>
<Col style={{textAlign:"Center",marginTop:90, }}>
  <motion.div style={{scale:5}}>
<GrUserWorker  />
</motion.div>
</Col>
<Col style={{textAlign:"Center",marginTop:90}}>
<motion.div style={{scale:5}}>
<SiHomeassistantcommunitystore/>
</motion.div>
</Col>
<Col style={{textAlign:"Center",marginTop:90}}>
<motion.div style={{scale:5}}>
<GiShakingHands/>
</motion.div>
</Col>
<Col style={{textAlign:"Center",marginTop:90}}>
<motion.div style={{scale:5}}>
<GiFactory/>
</motion.div>
</Col>

    </Row>


        <Row style={{backgroundColor:'white'}}>
<Col style={{textAlign:"Center",marginTop:90}}>
  <motion.div style={{scale:3}}>
300+
  </motion.div> <motion.div style={{scale:1,marginTop:-128}}>
Hard working Employees
  </motion.div>

</Col>
<Col style={{textAlign:"Center",marginTop:90}}>
 <motion.div style={{scale:3}}>
17413+
  </motion.div> <motion.div style={{scale:1,marginTop:-128}}>
Stores
  </motion.div>
</Col>
<Col style={{textAlign:"Center",marginTop:90}}>
 <motion.div style={{scale:3}}>
3654+
  </motion.div> <motion.div style={{scale:1,marginTop:-128}}>
Dealers
  </motion.div>
</Col>
<Col style={{textAlign:"Center",marginTop:90}}>
<motion.div style={{scale:3}}>
3
  </motion.div><motion.div style={{scale:1,marginTop:-128}}>
Factories
  </motion.div>
</Col>

    </Row>
  </Container>

</motion.div>
<motion.div style={{y:8160}} className="Footer">
<Container fluid>
     <Row style={{backgroundColor:'white',height:120}}>
<Col style={{textAlign:"Center"}}>

  <motion.div style={{scale:3,marginTop:45}}>
<ImFacebook  />
</motion.div>
</Col>
<Col style={{textAlign:"Center",backgroundColor:'green'}}>
 
<motion.div style={{scale:3,marginTop:45}}>
<ImTwitter/>
</motion.div>
</Col>
<Col style={{textAlign:"Center",backgroundColor:'pink'}}>
  
<motion.div style={{scale:3,marginTop:45}}>
<BsInstagram/>
</motion.div>
</Col>
<Col style={{textAlign:"Center",backgroundColor:'red'}}>
  
<motion.div style={{scale:3,marginTop:45}}>
<AiOutlineYoutube/>
</motion.div>
</Col>

    </Row>
    </Container>
      </motion.div>
     
     
      <motion.div style={{y:8160}} >
    <Container fluid>
     <Row style={{height:400,backgroundColor:"white"}} className="foot"  >
 <Col style={{textAlign:"center",backgroundColor:"white",marginTop:100}} >
 <img src="./logo.png" alt="" />
 </Col>
 <Col className="op" style={{backgroundColor:"white",marginTop:50}}>
 <Container style={{marginLeft:'25%'}}>
 <h2 >Our Products</h2>
 </Container>
  <Container style={{marginLeft:'30%'}}>
 <h5>Orange</h5>
 <h5>Orange</h5>
<h5>Orange</h5>
<h5>Orange</h5>
 <h5>Orange</h5>
</Container>
 </Col>
    </Row>
  

</Container>
</motion.div>



</>

    )
}

export default Home
