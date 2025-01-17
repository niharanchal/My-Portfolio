import React from 'react'

const Skill = () => {
  return (
    <section className="about" id="about">
        <span className="about-title">
            <h1>About <span>Me</span> </h1>
        </span>
        <div className="about_sections">
            <div className="about_left">
                {/* <img src={abc_img} alt="" /> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a skilled Frontend Developer with a keen eye for design and a deep understanding of user experience. I specialize in transforming ideas into visually appealing, responsive web applications using modern technologies. My focus is on writing clean, efficient code to ensure seamless functionality across devices, creating a smooth and engaging user experience. Passionate about continuous learning, I stay updated with the latest trends to bring innovative solutions to every project.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about_skill"><p>HTML</p><hr style={{width:"95%"}} /></div>
                    <div className="about_skill"><p>CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about_skill"><p>React Js</p><hr style={{width:"60%"}} /></div>
                    <div className="about_skill"><p>Javascript</p><hr style={{width:"75%"}} /></div>
                    <div className="about_skill"><p>MongoDB</p><hr style={{width:"95%"}} /></div>
                    <div className="about_skill"><p>Bootstrap</p><hr style={{width:"75%"}} /></div>
            </div>
            </div>
        </div>

    </section>
  )
}

export default Skill
