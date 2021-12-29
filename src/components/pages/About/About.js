import { green } from '@material-ui/core/colors'
import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import './About.css'
import Gallery from './Gallery'

const About = () => {
    return (
      <>
<Container fluid className="Container">
    <div className=" about" style={{width:1200}} > 
<div style={{fontSize:60, marginBottom:60, fontWeight:'bold',color:"green"}}>ABOUT
    </div>
<div className="line" style={{marginLeft:-155,width:1520,marginTop:-30,marginBottom:30,height:7.5,backgroundColor:"red"}}></div>
  <div  >
    <div style={{fontSize:30, marginBottom:30}}>Dailee
    </div>
    <div style={{fontSize:15}}> The brand Dailee focuses on bringing the customers an extraordinary fruity experience. With all the revolution going on people are moving towards fruit-based beverages. The thought of delivering thirst-quenchers whilst keeping health under check has been the motto of Dailee and we will strive to maintain the same. We put forth quality before all the rest; this helped the beverage division to achieve the prestigious ISO 9001:2015. Currently, our products are available in Tamilnadu, Pondicherry, Kerala, Karnataka, Goa, Andhra Pradesh, Telangana, Odisha and Andaman. We are working towards reaching the global market.

    </div>
  </div>

  <div>
  <div style={{fontSize:30, marginBottom:30,marginTop:30}}>Our factory
  </div>
  <div style={{fontSize:15}}>
  Our 3 factories are fully automated plant situated in Tamilnadu, India. We have import quality latest technology machine, this ensures the smooth production and infallible qualitative products. All our beverages are untouched by hands, providing you a longer shelf life and concealing the original taste of the fruits. At any cost, we see that only safe and hygienic products reach the market for a delicious experience.

  </div>
  </div>
  <div>
  <div style={{fontSize:30, marginBottom:30, marginTop:30}}>
  Factory Location
  </div>
  <div style={{fontSize:15}}>
  Unit I. No 2/68 1, Namakkal Road, NH 7, Pachal, Namakkal, Tamil Nadu – 637018 (view map)</div>
  <div style={{fontSize:15}}>
Unit II. Sappanipatti village, Karagur post, Krishnagiri Taluk & District, Tamil Nadu – 635111(view map)</div>
<div style={{fontSize:15}}>
Unit III. Salem Main Road Pothapuram Village & Post, Krishnagiri, Tamil Nadu – 635112 (view map)
  </div>
  </div>
  <div>
  <div style={{fontSize:30, marginBottom:30, marginTop:30}}>
  The Manufacturing Process
  </div>

  <div style={{fontSize:15}}>
  We use the latest hot fill technology for manufacturing the beverages. This technology meets the world standard and hence it is widely accepted in the market. Our beverages are homogenized and pasteurized to ensure uniformity and zero microbial activity. The beverages are then filled in a fully automatic rinser, filler, and capper under HEPA filters. Untouched by human hands all through the process and hits the market in its purest form.
</div>


  </div>
  </div>




  
</Container>
<Gallery />
 
</>

    )
}

export default About
