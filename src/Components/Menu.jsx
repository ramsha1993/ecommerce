import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'; // Correct relative path
import cart from '../assets/cart-2.png'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Menu = () => {
  const items=useSelector((state)=>state.cart)
  console.log(items)

  return (
     <div className='menu'>
        <div className="logo">
          <img src={logo} alt="#" />
        </div>
        <div className="nav">
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
    </div>
      )
}

export default Menu;