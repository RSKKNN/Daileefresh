import React from 'react'
import { Container,Row, Col,Card,Figure,Image,div} from 'react-bootstrap'
import './Flavours.css'
import { Link } from "@chakra-ui/react"



const Flavours = () => {
    return (
       
<Container fluid  className="main3">
    
  <Row className="row" >
    
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="lemonade1">
<Link className="link" href="/" >
<img className="image" src="./lemonade.png" alt="" />
</Link>
</Col>
<Col lg className="lemon1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="orange1">
<Link className="link" href="/" >
<img className="image" src="./Orange.png" alt="" />
</Link>
</Col>



</Row>
 <Row className="row" >
    
<Col lg className="apple1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Orange.png" alt="" />
</Link>
</Col>



</Row>
<Row className="row" >
    
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="mango11">
<Link className="link" href="/" >
<img className="image" src="./Mango2.png" alt="" />
</Link>
</Col>
<Col lg className="mango1">
<Link className="link" href="/" >
<img className="image" src="./Orange.png" alt="" />
</Link>
</Col>



</Row>


</Container>

      
    )
}

export default Flavours
