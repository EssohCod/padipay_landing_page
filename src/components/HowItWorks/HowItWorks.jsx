import React from 'react'
import "./HowItWorks.css"
import demoVideo from '../../assets/demo.mp4';
import appDetails from '../../assets/app_det.png';

const HowItWorks = () => {
  return (
    <div className='howItWorks' id='howItWorks'>
      <div className="howItWorks_container">
        <div className="howItWorks_left_video">
          <div className="video_wrapper">
            <video width="100%" height="auto" controls>
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video_overlay_text">Watch how Padipay works</div>
          </div>
          <p>This video will give you a complete guided tour into padipay software. Still haved questions? <a href="#">Request support</a></p>
        </div>
        <div className="howItWorks_right_texts">
          <h3>How It Works</h3>
          <p>Learn how to use our payroll software seamlessly, follow the steps here to complete the on-boarding process and enjoy the automated craft of our experts</p>
          <img src={appDetails} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
