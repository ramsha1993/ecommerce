import React from 'react'
import logo from '../assets/RF STORES 2.png'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { includeitem } from '../store/gettargetvalue';

const Topbar = () => {
const navigate=useNavigate();
  const dispatch=useDispatch();
const value=useSelector((state)=>state.cart)
function targetdata(e){
  console.log(e.target.value)
dispatch(includeitem(e.target.value))
}
const handlepresskey=(e)=>{
  if(e.key ===  'Enter'){
    navigate('/products')
  }
}
  return (
    <div className='topbar'> 
    <div className="logo">
    <Link to='/'><img src={logo} alt="#" /></Link>
  </div>
  <div className="input"><input type="text" placeholder='search' onKeyUp={handlepresskey} onChange={targetdata} />   
  <div className='seach-logo'><FontAwesomeIcon style={{color:'gray'}} icon={faSearch} /></div>
 
</div>
<div className='top-half'>
<div className="cart">
<Link to='/cart'><FontAwesomeIcon className='cartA' icon={faBagShopping} style={{ marginRight: '8px' ,height:'30px',cursor:'pointer',position:'relative',color:'white'}} /></Link>

<div className="cart-value">{value.length}</div>
</div></div>
  </div>
  )
}

export default Topbar;