import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/cart-2.png'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Topbar from './Topbar';
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
<div className="cate"><div><FontAwesomeIcon icon={faTableCellsLarge} /></div><div className='sp'><span>Categories</span></div></div>
        <div className="nav">
      <div className='full'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/products'>PRODUCTS</Link>
  
   </div>
  <div className='ham'>
  <Link onClick={()=>show()}> <FontAwesomeIcon icon={faBars} /> </Link>
</div>
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