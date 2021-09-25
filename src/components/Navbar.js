import React, { useState,useEffect, useRef } from 'react';
import {Button} from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { GiFlame } from "react-icons/gi";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';



function Navbar() {


const{ scrollY} =useViewportScroll();
 const y1 = useTransform(scrollY, [0, 99999], [0, 99999]);


    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMousEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    };

    const onMousLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    };

    return (
        <>
            <motion.nav className='navbar' style={{x:0}}>
                <Link to='/' className='navbar-logo'>
                    <img className='logo' src="./logo.png" alt="" />
                </Link> 
                <div className = 'menu-icon' onClick ={handleClick}>
                   {click?<FaTimes className = 'fa'/>:<FaBars className = 'fa'/>} 
                </div>
                <ul className={click? 'nav-menu active': "nav-menu"}>
                    <li className = 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-item'
                   /* onMouseEnter={onMousEnter}
                    onMouseLeave={onMousLeave}*/>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Our Flavours
                           
                       <FaCaretDown className="fa-down"/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                     <li className = 'nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to='/produkts' className='nav-links' onClick={closeMobileMenu}>
                            Tour
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Dealership Enquiry
                        </Link>
                    </li>
                  
                </ul>
                <Button>
                     <li className = 'nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </Button>
            </motion.nav>
        </>
    )
}

export default Navbar;