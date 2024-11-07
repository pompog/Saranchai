import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/chick.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h2 className='font-bold text-primary'>ลดสูงสุด 100 บาท!</h2>
            <h1>Basic Chicken</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum distinctio odio fugiat eius? Cumque temporibus dolorem atque, totam corrupti, excepturi provident 
                corporis ea perferendis nostrum, beatae saepe dolorum odio!</p>
            <button className='btn'><Link to ='/shop'>ลดไม่ยั้ง</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner immage" />
        </div>
    </div>
  )
}

export default Banner