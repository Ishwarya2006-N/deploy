import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const[sticky,setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setsticky(true) : setsticky(false)
    })
  },[])
  const [mobilemenu,setmobilemenu]=useState(false);
  const tooglemenu=()=>{
        mobilemenu?(setmobilemenu(false)):setmobilemenu(true)
  }
  return (
    <nav className={`container ${sticky&&'dark-nav'}`}>
        <img src={logo} className='logo'></img>
        <ul className={mobilemenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={tooglemenu}/>
    </nav>
  )
}

export default Navbar