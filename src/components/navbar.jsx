import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <h1>
              <Link className='link' to={'/'}>SCISSOR<span className='color-6 bg-dot'>.</span></Link>
            </h1>
        </div>
        <div className="nav-links">
            <Link className='link' to={'/about'}>About</Link>
            <Link className='link' to={'/dev'}>Dashboard</Link>
        </div>
        <Link to={'/login'}>
          <button className="nav-btn">
              Login
          </button>
        </Link>
    </div>
  )
}

export default Navbar