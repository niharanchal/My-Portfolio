import React from 'react'
// import "./style.css"
import Navbar from './component/navbar/Navbar'
import Intro from './component/intro/Intro'
import Skill from './component/skills/Skill'
import Service from './component/services/Service'
import Project from './component/projects/Project'
import Contact from './component/contacts/Contact'
import Footer from './component/footer/Footer'
const App = () => {
  return (
    <div className='app'>
      
      <Navbar/>
      <Intro/>
      <Skill/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
