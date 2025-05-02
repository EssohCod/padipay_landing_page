import React from 'react'
import "./Features.css"

const About = () => {
  return (
    <div className='features' id='features'>
      <div className="features_container">
        <div className="features_title">
          <h6>FEATURES</h6>
          <h1>WHY CHOOSE PADIPAY?</h1>
          <p>Powerful, Secure & Hassle-Free Payroll – So You Can Focus on Growing Your Business. Padipay is Effortless, allows Maximum Efficiency – Built for Businesses That Value Time & Accuracy. No setup fees. No hidden charges. Just seamless payroll management. Sign Up for a Free Trial or Book a Demo</p>
        </div>
        <div className="features_card">
          <div className="card">
            <div className="card_icon"></div>
            <h1>Automatic Payslip Generation</h1>
            <p>Say goodbye to tedious manual calculations! Generate accurate, tax-compliant payslips instantly, reducing errors and saving valuable time.</p>
          </div>

          <div className="card">
            <div className="card_icon"></div>
            <h1>Seamless Payment Disbursement</h1>
            <p>Effortlessly automate salary payments directly to employees’ bank accounts, ensuring timely and hassle-free transactions every month.</p>
          </div>

          <div className="card">
            <div className="card_icon"></div>
            <h1>Insightful Analytics</h1>
            <p>Stay ahead of your finances with real-time expense tracking, detailed reports, and powerful analytics that help you make data-driven business decisions.</p>
          </div>


          <div className="card">
            <div className="card_icon"></div>
            <h1>Secure & Compliant</h1>
            <p>Your employees’ sensitive data is protected with cutting-edge encryption, ensuring full compliance with financial regulations and industry security standards.</p>
          </div>
          
          <div className="card">
            <div className="card_icon"></div>
            <h1>Single-Company Licensing</h1>
            <p>Designed exclusively for your business, our software adapts to your unique payroll needs, offering a fully customized and dedicated experience.</p>
          </div>

          <div className="card">
            <div className="card_icon"></div>
            <h1>Customizable Statutory Deductions</h1>
            <p>Create your own deductions for taxes, pensions, and other statutory contributions as based on your company’s preferences—ensuring compliance while giving flexibility.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
