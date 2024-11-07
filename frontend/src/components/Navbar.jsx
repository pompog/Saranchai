import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
           <ul className='nav__links'>
            <li className='link'><Link to="/">Home</Link></li>
            <li className='link'><Link to="/">Menu</Link></li>
            <li className='link'><Link to="/">Coupon</Link></li>
            <li className='link'><Link to="/">Promotion</Link></li>
           </ul>
           {/* LOGO */}
              
           <div className='nav__logo'>
           <Link to ='/'>Saranchai Fries </Link>
           </div>

           {/* nav icon */}
           <div className='nav__icons relative'>
            <span>
              <Link to ='/'>
                <i className="ri-search-line"></i>
              </Link>
            </span>
            <span>
              <button className='hover:text-primary'>
              <i className="ri-shopping-bag-line"></i>
              <sup className='text-sm inline-block px-1.5 text-white rounded-full
               bg-primary text-center'>0</sup>
              </button>
            </span>
            <span>
              <Link to ="Login">
              <i className="ri-user-line"></i>
              </Link>
            </span>

           </div>
        </nav>
    
    
    </header>
  )
}

export default Navbar