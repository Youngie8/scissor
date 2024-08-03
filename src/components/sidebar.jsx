import React from 'react'
import { Outlet, Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='main-sidebar'>
       <Link to={'/dashboard'} ><button className={'sidebar-link'}>Dashboard</button></Link> 
       <Link to={'/Profile'} ><button className={'sidebar-link'}>Profile</button></Link> 
       <Link to={'/Settings'} ><button className={'sidebar-link'}>Settings</button></Link> 
    </div>
       <Link to={'/'} ><button className={'back-home'}>Go back</button></Link> 
    </div>
  )
}

export default Sidebar