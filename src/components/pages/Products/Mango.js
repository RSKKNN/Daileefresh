import React from 'react'
import './Mango.scss'
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
import Carousel1 from '../Carousel';




const Mango = () => {


const {scrollYProgress} = useViewportScroll();
const {scrollY} = useViewportScroll();
 const many = useTransform(scrollY, [0, 1440], [0,1440 ]);
  const vermany = useTransform(scrollY,[1440.01,2160],[1440.01,2160]);
 const manscal = useTransform(scrollY, [0, 720], [5,1 ]);

 const manop = useTransform(scrollY,[0,720,1440,1440.01],[0,1,1,0]);
 const vermanop = useTransform(scrollY,[1440,1440.01,2160],[0,1,1]);
 const vermanrot = useTransform(scrollY,[1440.01,2160],[0,60])


 const verlemonaderot = useTransform(scrollY,[1440.01,2160],[-60,0])
 const verlemonadey = useTransform(scrollY,[1440.01,2880],[1440.01,2880])
 const verlemonadeop = useTransform(scrollY,[1440,1440.01,2160,2160.01,2880.01],[0,1,1,0,0])

 const boxscal = useTransform(scrollY,[2880,3600],[1,0.10]);
 const boxy = useTransform(scrollY,[2160,4320],[2160,4320]);
  const box2y = useTransform(scrollY,[2880,5040],[2880,5040]);
 const margin= useTransform(scrollY,[2880,3600],[120,-2580])

const boxx = useTransform(scrollY,[2880,3600],[2760,0]);
const boxrot = useTransform(scrollY,[2880,3600],[0,90]);
const boxop = useTransform(scrollY,[2160,2160.01,3240,3240.01],[0,1,1,0])
const box2op = useTransform(scrollY,[2880,4320],[1,1])

 const linlemonscal = useTransform(scrollY,[2880,3600],[10,1]);
 const linlmmar = useTransform(scrollY,[2880,3600],[2580,120])
 const linlemonrot = useTransform(scrollY,[2880,3600],[-90,0])
   const linlemony = useTransform(scrollY,[3600,4320],[3600,4320]);


   const innerscal = useTransform(scrollY,[4320,4680],[1,4])

   const sqcolr = useTransform(scrollY,[4320,4680],["#DCF0CF","#F8955B"]) 

   const orangey = useTransform(scrollY,[4680,5760,6480],[4680,5760,6480])
   const orangeop = useTransform(scrollY,[4679.99,4680,5040],[0,1,1])
   const orangerot = useTransform(scrollY,[4680,5040],[-20,0])
   const orangescal = useTransform(scrollY,[4680,5040],[0.20,1])
const orangex = useTransform(scrollY,[5760,6480],[0,1440])


   const appley = useTransform(scrollY,[5760,7200],[5760,7200])
   const applex = useTransform(scrollY,[5760,6480],[-1440,0])

   const oraphlfy = useTransform(scrollY,[5040,7200],[5040,7200])
   const oraphlfop = useTransform(scrollY,[5039.99,5040],[0,1])
   const oraphlfclr = useTransform(scrollY,[5760,6480],["#F8955B","#C54126"])
   const oraphlfx = useTransform(scrollY,[5760,6480],[380,-380])


   const innerop = useTransform(scrollY,[5759.99,5760],[1,0])

   const whtlftz = useTransform(scrollY,[2880,3240],[-10,1])
   const whtlftop = useTransform(scrollY,[7200,7201],[1,0])
   const whtlfty = useTransform(scrollY,[0,10000],[0,10000])
    return (
<div className="outer">
<div className="main">
  
  <motion.img className="mango" style={{y:many ,scale:manscal, opacity:manop }}  src="./Mango1.png" alt="" />
  
  <motion.img style={{y:vermany, opacity:vermanop, rotate:vermanrot }} className="vermango" src="./verMango.png" alt="" />
  <motion.img style={{y:verlemonadey,rotate:verlemonaderot,opacity:verlemonadeop}}className ="verlemonade"src="./verlemonade.png" alt="" />



<motion.div className="outerlemon"   style={{scale:linlemonscal, x:boxx,y:linlemony,marginTop:120,rotate:linlemonrot,zIndex:3}}>
  
  <motion.img className='lemon' src="./lemon.png" alt="" />
 
 
  
</motion.div>
<motion.img style={{scale:boxscal,y:boxy,x:boxx,marginTop:margin, rotate:boxrot, opacity:boxop}} className="box" src="./box.png" alt="" />
<motion.div style={{scale:boxscal,y:box2y,x:boxx,marginTop:margin, rotate:boxrot, opacity:box2op}} className="outerbox2"  >
 

<motion.div className="innerbox2" style={{opacity:innerop,scale:innerscal,backgroundColor:sqcolr}}>


</motion.div>

</motion.div>
<motion.div className="oraphlf" style={{y:oraphlfy, opacity:oraphlfop,backgroundColor:oraphlfclr,x:oraphlfx,zIndex:2}}></motion.div>
 <motion.img className="orange" style={{scale:orangescal, x:orangex,y:orangey,marginTop:120,opacity:orangeop,rotate:orangerot,zIndex:3}} src="./orange.png" alt="" />
<motion.img className="apple" style={{y:appley,x:applex,marginTop:120,zIndex:3}}  src="./apple.png" alt="" />
<div className="whtlftout">
<motion.div className="whtlft" style={{x:-380,zIndex:whtlftz, opacity:whtlftop}}></motion.div>


</div>



</div>
</div>

    )
}

export default Mango
