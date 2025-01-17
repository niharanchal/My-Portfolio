import React from 'react'
import image from "../assets/nihar-modified.png"
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section className='intro' id='intro'>
        <div className="introcontent">
            <span id='hello'>Hello,</span>
            <span id='introtext'>I'm <span id="introname">Nihar Anchal</span> <br />Web Developer</span>
            <p id="intropara">I'm a skilled web developer with expertise in creating responsive,<br /> user-friendly websites using HTML, CSS, JavaScript, and React.</p>
           <a href='./NiharAnchalResume.pdf' download ><button className="button">Get my CV</button></a>
        </div>
        <img src={image} alt="Profile"  className='bg'/>

    </section>
  )
}

export default Intro
