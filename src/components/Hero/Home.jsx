import React from 'react'
import "./Home.css"
import Profile_Image from "../../assets/profile_1.png"

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home_container">
        <div className="home_left">
          <h6>EFFORTLESS</h6>
          <h1>PAYROLL MANAGEMENT <br /> <span>AT YOUR FINGERTIPS</span></h1>
          <p>Automate payslips, streamline payments, and gain powerful insights with Padipay.</p>
          <div className="home_btn">
            <button className='learn_btn'>Learn More</button>
            <button className='home_download_btn'>Download App</button>
          </div>
        </div>
        <div className="home_right">
          <img src={Profile_Image} alt="Hero Illustration" />
        </div>
      </div>
      
    </div>
  )
}

export default Home
