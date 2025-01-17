import React from 'react'
import ui from "../assets/ui.png"
import responsive from "../assets/responsive.png"
import website from "../assets/web-design.jpg"

const Service = () => {
  return (
    <section className='service' id='service'>
        <span className="servicetitle">
        <h1>What <span>I Do</span> </h1>
        </span>
        <div className="servicebars">
        <div className="servicebar">
            <img src={ui} alt="Ui_design" className='servicebarImg'/>
            <div className="servicebartext">
                <h2>UI design</h2>
                <p>Creating intuitive and visually stunning UI designs that enhance user experience and engagement.</p>
            </div>

        </div>
        <div className="servicebar">
            <img src={website} alt="Website_design"  className='servicebarImg'/>
            <div className="servicebartext">
                <h2>Website design</h2>
                <p>Crafting visually appealing and highly functional websites that deliver an exceptional user experience.</p>
            </div>

        </div>
        <div className="servicebar">
            <img src={responsive} alt="Responsive" className='servicebarImg'/>
            <div className="servicebartext">
                <h2>Responsive web development</h2>
                <p>Developing responsive designs that ensure a seamless and engaging user experience across all devices and screen sizes.</p>
            </div>

        </div>
        </div>
      
    </section>
  )
}

export default Service
