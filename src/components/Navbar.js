import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='nav-text'>Haystack</h1>
        <div className='animated-grid'>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
        </div>
        <Link to = "/scoreboard" className='scores home'>Scoreboard</Link>
    </nav>
  )
}

export default Navbar