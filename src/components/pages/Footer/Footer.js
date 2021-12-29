import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import './Footer.css'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <Container fluid className="container">

            <motion.h1 className="head" style={{y:120}}>
                TASTY.FRESH.SWEET
            </motion.h1>
          <motion.img className="logo" style={{y:480}} src="./logo.png" alt="" />
       
        </Container>
    )
}

export default Footer
