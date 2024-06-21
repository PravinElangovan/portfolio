import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <h1>
  Pra
  <span
    style={{
      background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}
  >
    vin.
  </span>
</h1>
            <p>I'm a full-stack developer with a solid understanding of data structures and algorithms, proficient in Java, and experienced in creating high-quality projects.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 pravin kumar. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
