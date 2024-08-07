// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Food Delivery App</h3>
      <img className='profile' src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbar
