import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className="ri-e-bike-2-line"></i></span>
            <h4>ส่งฟรี</h4>
            <p>ส่งฟรีถึงหน้าบ้าน ไม่มีค่าใช้จ่ายเพิ่มเติม ให้การช้อปปิ้งของคุณสะดวกยิ่งขึ้น!</p>
        </div>
        <div className='banner__card'>
            <span>< i className="ri-money-dollar-circle-line"></i></span>
            <h4>ส่งฟรี</h4>
            <p>มั่นใจทุกการสั่งซื้อ หากไม่พอใจ เรายินดีคืนเงินเต็มจำนวน เพราะความพึงพอใจของคุณคือสิ่งสำคัญสำหรับเรา!</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-emotion-laugh-line"></i></span>
            <h4>อร่อยชัว 100%</h4>
            <p>รับประกันความอร่อยทุกคำ ไก่ทอดสูตรพิเศษของเราจะทำให้คุณติดใจ ถ้าไม่อร่อย ยินดีเปลี่ยนหรือคืนเงินให้ทันที!</p>
        </div>
    </section>
  )
}

export default PromoBanner