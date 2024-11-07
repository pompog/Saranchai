import React from 'react'
import dealsImg from "../../assets/eggtart.png"

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals__content'>
            <h5>Get Up To 20% Discount</h5>
            <h4>Deal Of This Month</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non laborum sed esse similique adipisci, iure corporis temporibus architecto dolores ea 
                obcaecati ipsam unde in expedita, dolorem, consequuntur quis aliquam!</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>6</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>23</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>59</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>58</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection