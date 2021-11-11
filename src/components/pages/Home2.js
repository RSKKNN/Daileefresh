import React, { useState, useEffect, useRef }  from 'react';
import './Home.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useElementScroll
} from 'framer-motion';

import {BsFacebook} from 'react-icons/bs';

import { useInView } from 'react-intersection-observer';
import {Container, Row, Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel.js'

export default function Home() {


const {scrollYProgress} = useViewportScroll();
const {scrollY} = useViewportScroll();
 const y1 = useTransform(scrollY, [0, 2000], [0,2000 ]);
  const y2 = useTransform(scrollY, [0, 300,], [0,100]);
  //const scale = useTransform(scrollYProgress, [0.2, 1], [20, 2]);
  const scale = useTransform(scrollY, [100,200,400,1300], [10,7.5,5,1]);
  const y3 = useTransform(scrollY, [500,1000], [0,400])
  const mop = useTransform(scrollY,[0,50,400,1000,2000,2001],[0,0,0,1,1,0])



//rotateop
const ys1= useTransform(scrollY, [2000, 2001], [0,1 ]);


const mrot = useTransform(scrollY,[2000,3000],[0,90]);
const yr1 = useTransform(scrollY, [0, 3000], [0,3000 ]);


//Alphonso
const enrich = useTransform(scrollY,[0,4000],[0,4000]);
const alp = useTransform(scrollY,[0,4000],[0,4000]);

const l = useTransform(scrollY,[0,1000,1500,2000,3000],[-2500,-1500,-800,-800,-300])
const r = useTransform(scrollY,[0,1000,1500,2000,3000],[2500,1000,-300,-300,-800])

const alpop = useTransform(scrollY,[0,1399,1400],[0,0,1])

const enrichrot = useTransform(scrollY,[2500,3000],[0,90])
const alprot = useTransform(scrollY,[2500,3000],[0,-90])

const tastrot = useTransform(scrollY,[3000,3500],[-90,0])
const yellrot = useTransform(scrollY,[3000,3500],[90,0])

const tyop = useTransform(scrollY,[0,3000,3001],[0,0,1]) 
 

const y4= useTransform(scrollY,[0,1000],[2000,1350]);


//lemonade
const y5 = useTransform(scrollY,[0,4000,5000],[0,4000,5000]);
const y6 = useTransform(scrollY,[0,2000,2400,2800],[2000,2000,2400,3800]);
const z= useTransform(scrollY, [2800,3000],[1,0]);
const lrot = useTransform(scrollY,[2000,2100,3000,4000,5000],[-120,-90,0,0,90]);

//lemon
const y7 = useTransform(scrollY,[0,2300,3400,4300],[2400,2300,3400,4300]);
const y10 = useTransform(scrollY,[2450,2800],[-90,0])
const y11 = useTransform(scrollY, [2810,3200,3400,4500], [0,400,400,-1500]);
const y12 = useTransform(scrollY,[2000,2150,2200],[0,0,1])



//upblock

const y8 = useTransform(scrollY,[0,2000,2400,2800],[2000,2000,2400,1200]);
const y9 = useTransform(scrollY,[0,2000,2400,2800],[2000,2000,2400,3800]);
const dop= useTransform(scrollY,[3000,3500],[1,0]);

//Ldes
const y13 = useTransform(scrollY,[2300,3400,4300],[2300,3400,4300]);
const y14 = useTransform(scrollY, [2300,3400,4500],[400,-400,-2300]);
const y15 = useTransform(scrollY, [2300,2800,3400],[0,0,1]);


//apple
const y16 = useTransform(scrollY,[6500,8000],[6500,8000]);
const y17 = useTransform(scrollY, [6500,6500], [1700,400]);
const approt = useTransform(scrollY,[6500,7000],[-90,0])
const Askew = useTransform(scrollY,[4500,5500],[0,1])


//Ades
const y18 = useTransform(scrollY,[3400,4500,5450],[3400,4500,3000]);
const y19 = useTransform(scrollY,[3400,4300],[900,-400]);
//rotate
const y20 =useTransform(scrollY,[4500,4750],[0,90])

const appop = useTransform(scrollY,[0,6499,6500,8000,],[0,0,1,1])

  


//Orange

const y22 = useTransform(scrollY,[3400,5500],[3400,5500]);
const y21 = useTransform(scrollY,[4750,5500],[-90,0]);
const y23 = useTransform(scrollY, [4750,5500], [400,400]);

//Odes

const y24 = useTransform(scrollY,[4750,5500],[6000,5500])

const [ref, inView, entry] = useInView({
    
    threshold: 0.5,
    triggerOnce: false
  });

   console.log(entry); 




//lop
const lop = useTransform(scrollY,[0,2000,2001,4000,4000.1],[0,0,1,1,0])
  


//text
const mtx = useTransform(scrollY,[0,1500,2000,3500],[4000,1500,2000,2000]);

const ldtx = useTransform(scrollY,[0,3500,4000],[6000,3500,4000]);


//box
const boxrot = useTransform(scrollY,[4000,5500],[0,90])

const boxop = useTransform(scrollY,[0,4000,4000.1,4499,4500],[0,0,1,1,0])

const boxscal = useTransform(scrollY,[4000,5500,6000,6500],[1.309,0.1013,0.1013,0.7])

const boxx = useTransform(scrollY,[4000,5500],[3495,0])

const boxy  = useTransform(scrollY,[4000,5500,6000],[5000,5500,6000])

const boxmar = useTransform(scrollY,[4000,5500],[0,-2130])



//wobox

const woboxop = useTransform(scrollY,[0,4499,4500,6499,8000],[0,0,1,1,1])




//boxlemon

const boxlemony = useTransform(scrollY,[4000,5500,6000,6500],[5000,5500,6000,3450])

const boxlemonrot = useTransform(scrollY,[4000,5500],[-90,0])

const boxlemonscal = useTransform(scrollY,[4000,5500],[2,0.2])





//appleupdown

//const boxwidscal = useTransform(scrollY,[6000,7000],[0.1,2])

const appupop =  useTransform(scrollY,[0,6000,6500,8000],[0,0,1,1])

const appupy = useTransform(scrollY,[6500,7500],[6500,4500])

const appdowny = useTransform(scrollY,[6500,7500],[6500,10285])


//strip

const stripy = useTransform(scrollY,[6500,8000],[6500,8000])


const striprot1 = useTransform(scrollY,[6500,6590.90],[0,90])
const striprot2= useTransform(scrollY,[6500,6681.90],[0,90])
const striprot3 = useTransform(scrollY,[6500,6772.70],[0,90])
const striprot4 = useTransform(scrollY,[6500,6863.6],[0,90])
const striprot5 = useTransform(scrollY,[6500,6954.5],[0,90])
const striprot6 = useTransform(scrollY,[6500,7045.4],[0,90])
const striprot7 = useTransform(scrollY,[6500,7136.3],[0,90])
const striprot8 = useTransform(scrollY,[6500,7227.2],[0,90])
const striprot9 = useTransform(scrollY,[6500,7318.1],[0,90])
const striprot10 = useTransform(scrollY,[6500,7409],[0,90])

const striprot11 = useTransform(scrollY,[6500,7500],[0,90])



//square

const sqcolr = useTransform(scrollY,[6000,6300],["#DCF0CF","#F8955B"]) 


//lemontext

const lemony = useTransform(scrollY,[0,5500,6000],[8000,5500,6000]) 





// Some random colors




const stripy1 = useTransform(scrollY,[6000,7500,8000],[4000,7500,8000])
const stripy2 = useTransform(scrollY,[6000,7500,8000],[8500,7500,8000])


//ornage
const orangscal = useTransform(scrollY,[6500,7000,8000],[0.1,0.23,0.23])
const orangrot = useTransform(scrollY,[6500,7000],[-20,0])

//orange text

const otexty = useTransform(scrollY,[6000,7000,8000],[5500,7000,8000])
const otextx = useTransform(scrollY,[6000,7000,8000],[-1000,-90,-90])



//apple


const apply = useTransform(scrollY,[8000,10000],[8000,10000])
const appop1 = useTransform(scrollY,[8000,8999,9000],[0,1,1])




//green

const greeny =useTransform(scrollY,[0,8000],[0,6000])


///des
const mandesy = useTransform(scrollY,[1500,2000],[1500,2000])

const bk = useTransform(scrollY,[0,10000],[0,8000])


//
const ebg1= useTransform(scrollY,[0,10000],[0,10000])
const ebg2= useTransform(scrollY,[0,6000],[0,6000])
const ebg3= useTransform(scrollY,[0,6000],[0,6000])


const ebg1h = useTransform(scrollY,[2000,3500],[1080,0])
const ebg2h = useTransform(scrollY,[4000,5500],[1080,0])
//color
const ebgclr = useTransform(scrollY,[0,1500,3500,5500],["#F4BF3C","#F4BF3C","#193F07","#9E9E4D"])

    return (
        <>



 <motion.div>

          <motion.h1 className="MangoText" style={{y:mtx, scale:0.5 ,x:-500,marginTop:0}}> MANGO</motion.h1>
          <motion.h1 className="LemonadeText" style={{y:ldtx,scale:0.44 ,x:-550}}> LEMONADE</motion.h1>
          <motion.h1 className="LemonText" style={{y:lemony,scale:0.5 ,x:-500}}> LEMON</motion.h1>
          <motion.h1 className="OrangeText" style={{x:otextx,y:otexty, scale:0.4}}> ORANGE</motion.h1>
          <motion.h1 className="AppleText" style={{y:10000}}> APPLE</motion.h1>



<motion.alpha1 className='alpha1' style={{y:enrich,x:l,rotateX:enrichrot ,scale:0.3}}>ENRICH</motion.alpha1>
            <motion.alpha2 className='alpha2' style={{y:alp, x:r,rotateX:alprot, scale:0.3,opacity:alpop}}>ALPHONSSO</motion.alpha2>
                  <motion.alpha1 className='alpha1' style={{y:enrich,x:l,rotateX:tastrot,opacity:tyop,scale:0.3}}>TASTY</motion.alpha1>
            <motion.alpha2 className='alpha2' style={{y:alp, x:r,rotateX:yellrot,opacity:tyop,scale:0.3}}>YELLOW</motion.alpha2>


            <motion.img className='Mango' style={{y:y1,x:0,opacity:mop, scale:scale
            
            }} src="./Mango2.png" alt=""/>


  
            <motion.img className='verMango' style={{y:yr1,x:0,opacity:ys1, scale:scale ,rotate:mrot
            
            }} src="./verMangoc.png" alt=""/>

                        <motion.h1 className="Mandes" style={{y:mandesy, x:500}}>Are You Craving For A Mango Delight? Dailee Presents The Real Mango Drink. This Summer Relish The Goodness Of Alphonso Pulps Mess Free In Bottles. Feel The Royalty From The Extravagance Of The King Of The Fruits. A Cheeky Drink For The Exquisite Individuals!</motion.h1>


            

            



      
            <motion.Mdes   className='Mdes' style={{y:y4,x:-400, opacity:0}}  >Your favourite seasonal fruit-juice is now back in the market. With a tropical floral taste this juice will not onky quench your mid day summer thirst but is sure to win your hearts. A drink that you can sip anytime of the day to liven up your mood or you can also serve it to people around you and brighten up surroundings. This juice is packed full of flavour that comes from juicy, stringy, sweet mangoes with underlying hints of sourness and pine. Refresh your senses as you swirl down the the flavourful stairwell and recall the memories of the beautiful summer day at the beach in any season now. Dailee Fresh is now out with the all new Peoples' favourite Mango flavour. We offer you the sweetest, richest AND luscious DRINK OUT THERE!! Taste the best mouth watering, juicy and palletizing mango ever. Experience tropical scenes with Dailee. A fruit close to your heart is now available to you anytime, anywhere!</motion.Mdes>
              <motion.gdes className ="gdes" style={{y:y13,x:y14, opacity:y15}}>Your favourite seasonal fruit-juice is now back in the market. With a tropical floral taste this juice will not onky quench your mid day summer thirst but is sure to win your hearts. A drink that you can sip anytime of the day to liven up your mood or you can also serve it to people around you and brighten up surroundings. This juice is packed full of flavour that comes from juicy, stringy, sweet mangoes with underlying hints of sourness and pine. Refresh your senses as you swirl down the the flavourful stairwell and recall the memories of the beautiful summer day at the beach in any season now. Dailee Fresh is now out with the all new Peoples' favourite Mango flavour. We offer you the sweetest, richest AND luscious DRINK OUT THERE!! Taste the best mouth watering, juicy and palletizing mango ever. Experience tropical scenes with Dailee. A fruit close to your heart is now available to you anytime, anywhere!</motion.gdes>
              <motion.img className='lemon' style={{y:y7, x:y11, rotate:y10, opacity:y12}} src="./Lemon.png" alt="" />
              <motion.div className='upblock' style={{y:y5}}></motion.div>
              <motion.div className='downblock' style={{y:y6,opacity:dop}}></motion.div>
              
              <motion.img  className='lemonade' style={{y:y5,x:0,scale:1.68,rotate:lrot,opacity:lop}} src="./verlemon2.png" alt="" />
                          <motion.ldes   className='ldes' style={{y:y6,x:200, opacity:z,display:0}}  ></motion.ldes>

                          <motion.img className='box' style={{y:boxy, x:boxx,scale:boxscal, rotate:boxrot, opacity:boxop, marginTop:boxmar}} src="./box2.png" alt="" />
                          <motion.div className='box2' style={{y:boxy, x:boxx,scale:boxscal, rotate:boxrot, opacity:woboxop, marginTop:boxmar, backgroundColor:sqcolr}} ></motion.div>

                         <motion.img className='boxlemon' style={{x:0,y:boxlemony,scale:boxlemonscal,rotate:boxlemonrot}} src="./boxlemon2.png" alt="" />


                     
                     <motion.img className="Apple" style={{y:y16, x:0,scale:orangscal ,opacity:appop,rotate:orangrot }} src="./Orange.png" alt="" />

<motion.div className='strip'style={{x:190, opacity:appupop}}>
 
                       
                        <motion.img className='strip' style={{y:stripy1, x:-960}} src="./strip1.png" alt="" />
                  
                        <motion.img className='strip' style={{y:stripy2,x:-576}} src="./strip1.png" alt="" />
                      
                        <motion.img className='strip' style={{y:stripy1,x:-192}} src="./strip1.png" alt="" />
                   
                        <motion.img className='strip' style={{y:stripy2,x:192}} src="./strip1.png" alt="" />
               
                        <motion.img className='strip' style={{y:stripy1,x:576}} src="./strip1.png" alt="" />
                 
                            <motion.img className='strip' style={{y:stripy2,x:960}} src="./strip1.png" alt="" />


                            

                            </motion.div>
                            <motion.img className="green" style={{y:greeny,scale:0.7}}src="" alt="" />

<motion.div className="Applsw" style={{ }}>
            <motion.img className='Orange' style={{y:apply,x:0,scale:1.5, opacity:1}}src="./Apple.png" alt="" />
            </motion.div>
          
    
         

            
              <motion.div className='white' style={{x:-960}}></motion.div>
        
              <motion.div className='b1' style={{y:ebg1,height:ebg1h}}></motion.div>
              <motion.img  className='b1'style={{y:ebg1,height:ebg1h}} src="" alt="" />
              
              <motion.div className='b2' style={{y:ebg2,height:ebg2h}}></motion.div>
              <motion.div className='b3' style={{y:ebg3}}></motion.div>
<motion.footerbg className="footerbg" style={{y:9000,}}> 


</motion.footerbg>






</motion.div>








            </>
        
            

            

        
    )
}

