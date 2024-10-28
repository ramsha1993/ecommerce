import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'; // Correct relative path
import cart from '../assets/cart-2.png'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
  const items=useSelector((state)=>state.cart)
  console.log(items)
  const [first, setfirst] = useState({})
function hide(){
   return setfirst({display:'none'})
}
function show(){
return setfirst({display:'block'})
}
  return (
     <div className='menu'>
        <div className="logo">
          <Link to='/'><img src={logo} alt="#" /></Link>
        </div>
        <div className="nav">
      <div className='full'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/products'>PRODUCTS</Link>
            <div className="cart-container">
   <Link to='/cart'>
   <img
         style={{position: "relative"}}
         width="40px"
         height="40px"
         src={cart}
         alt="#"
      />
      <div className="cart-value">{items.length}</div>
   </Link>
   </div>
   </div>
  <div className='ham'><Link onClick={()=>show()}> <FontAwesomeIcon icon={faBars} /> </Link>
  <div className="cart-container">
   <Link to='/cart'>
   <img
         style={{position: "relative"}}
         width="40px"
         height="40px"
         src={cart}
         alt="#"
      />
      <div className="cart-value">{items.length}</div>
   </Link>
   </div></div>
   <div style={first} className='sidebar'>

      <ul>
      <li><Link  onClick={()=>hide()}><FontAwesomeIcon icon={faXmark} /></Link></li>
         <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/products'>Product</Link></li></ul>
      </div>
       
        </div>
    </div>
      )
}

export default Menu;