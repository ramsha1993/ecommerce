import React from 'react'
import logo from '../assets/logo-r.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'

const Topbar = () => {

const value=useSelector((state)=>state.cart)


  return (
    <div className='topbar'> 
    <div className="logo">
    <Link to='/'><img src={logo} alt="#" /></Link>
  </div>
  <div className="input"><input type="text" placeholder='search'  />   
  <div className='seach-logo'><FontAwesomeIcon icon={faSearch} /></div>
 
</div>
<div className='top-half'>
<div className="cart">
<Link to='/cart'><FontAwesomeIcon icon={faBagShopping} style={{ marginRight: '8px' ,height:'23px',cursor:'pointer',position:'relative'}} /></Link>

<div className="cart-value">{value.length}</div>
</div></div>
  </div>
  )
}

export default Topbar;