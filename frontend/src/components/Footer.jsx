import React from 'react'
import instaImg1 from "../assets/chick.png"
import instaImg2 from "../assets/chick.png"
import instaImg3 from "../assets/chick.png"
import instaImg4 from "../assets/chick.png"
import instaImg5 from "../assets/chick.png"
import instaImg6 from "../assets/chick.png"
const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
        <div className='footer__col'>
            <h4>Contact </h4>
            <p>
                <span><i className="ri-map-pin-2-fill"></i></span>
                123,Example road,Example 
            </p>
            <p>
                <span><i className="ri-mail-line"></i></span>
                Saranchai_lnwza007@gmail.com
            </p>
            <p>
                <span><i className="ri-phone-line"></i></span>
                08x xxxx xxx
            </p>
        </div>

        <div className='footer__col'>
            <h4>Company</h4>
            <a href="/">Home</a>
            <a href="/">Menu</a>
            <a href="/">Coupon</a>
            <a href="/">Promotion</a>
            <a href="/">Term & Conditions</a>
        </div>

        <div className='footer__col'>
            <h4>USEFUL LINK</h4>
            <a href="/">Help</a>
            <a href="/">Track you order</a>
            <a href="/">Chickens</a>
            <a href="/">Snacks</a>
            <a href="/">Drinks</a>
        </div>

        <div className='footer__col'>
            <h4>INSTAGRAM</h4>
            <div className='instagram__grid'>
                <img src={instaImg1} alt="" />
                <img src={instaImg2} alt="" />
                <img src={instaImg3} alt="" />
                <img src={instaImg4} alt="" />
                <img src={instaImg5} alt="" />
                <img src={instaImg6} alt="" />
                <img src={instaImg6} alt="" />
                <img src={instaImg6} alt="" />
                <img src={instaImg6} alt="" />
            </div>
        </div>
    </footer>
    <div className='footer__bar'>
            Copyright © 2025 by Saranchai Fries. All right reserved.

    </div>
    </>
  )
}

export default Footer