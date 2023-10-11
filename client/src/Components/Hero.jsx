import React from 'react'
import '../CSS/Hero.css'

const Hero = () => {


return (
    <div className="background-video">
    <video autoPlay loop muted>
      <source src="https://mauryahomes.in/wp-content/uploads/2022/02/1.mp4" type="video/mp4" />
      {/* Add additional video sources for cross-browser compatibility */}
    </video>
    <div className="centered-text">
      <h1>EnhanceProjects.com</h1>
    </div>
  </div>
  )
}

export default Hero