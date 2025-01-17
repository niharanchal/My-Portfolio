import React, { useState } from 'react'
// import logo from "../assets/nihar.png"
import { FiMessageSquare } from "react-icons/fi";
import {Link} from "react-scroll"
import menu from "../assets/menu1.png"

const Navbar = () => {
  const [showMenu,setShowmenu]=useState(false)
  return (
    <nav className='navbar' id='navbar'>
            {/* <img src={logo} alt="" className='logo' /> */}
            <h1 className='logo'>Portfolio</h1>
            <div className="desktopmenu">
               <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuListItem'>Home</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenuListItem'>About</Link>
               <Link activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenuListItem'>Services</Link>
               <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenuListItem'>Projects</Link>
            </div>
            <button className="desktopmenubtn" onClick={()=>{
              document.getElementById("contactpage").scrollIntoView({behavior : "smooth"});
            }}>
            Contact Me 
            </button>
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowmenu(!showMenu)} />
            <div className="navmenu" style={{display:showMenu?"flex":"none"}}>
               <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>(setShowmenu(false))}>Home</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowmenu(false))}>About</Link>
               <Link activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowmenu(false))}>Services</Link>
               <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowmenu(false))}>Projects</Link>
               <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowmenu(false))}>Contact</Link>
            </div>


    </nav>
  )
}

export default Navbar
