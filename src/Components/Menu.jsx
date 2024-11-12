import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Topbar from './Topbar';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { setcategory } from '../store/productFilters';
import { faTv } from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const items=useSelector((state)=>state.cart)
  console.log(items)
  const [first, setfirst] = useState({})
  const [second, setsecond] = useState({display:'none'})
  // const category = useSelector((state) => state.productFilter.category);
  const [cate, setcate] = useState('')
const category=useSelector((state)=>state.product.category)
  function itemshow(){
    return setsecond({
      display:'block',
      height:'100vh',
      width: '300px',
    position: 'fixed',
    left: '0',
    backgroundColor:'white',
    zIndex: '2'
    })
  }
  function itemhide(){
   setsecond({display:'none'})
  }
function hide(){
   return setfirst({display:'none'})
}
function show(){
return setfirst({display:'block'})
}
function categotychange(elem){
  setcate(elem)
dispatch(setcategory(elem))
}
useEffect(()=>{
if(cate){

    navigate('/products')
  
}
},[cate])

// useEffect(()=>{
  // if(category){
    // dispatch(setcategory(''))
  // }
// },[])

  return (
     <div className='menu'>
<div className="cate">
  
<div className='ham-2'><Link onClick={()=>itemshow()}><FontAwesomeIcon style={{color:'white'}}icon={faBars} /></Link></div>
 <div className="sidebar-2" style={second}>
<div className='cat'>
<div className="cateogies">

  <div className='cross-pre'><div className="cross" style={first}><Link style={{border: '1px solid',padding: '4px'}} onClick={()=>itemhide()}><FontAwesomeIcon style={    {height:'24px',width:'24px'}} icon={faXmark} /></Link></div></div>
<div style={{    padding: '49px 0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    justifyContent: 'flex-start'}}><div className="one"><div className='icon'><Link onClick={()=>categotychange('laptop')}   style={{cursor:'pointer'}}  ><FontAwesomeIcon style={{color:'#750016',height: '29px'}} icon={faLaptop} /></Link></div><div className='cate-name'><span>Laptops</span></div></div>
<div className="two"><div className='icon'><Link   onClick={()=>categotychange('iphone')}   style={{cursor:'pointer'}}  ><FontAwesomeIcon    style={{color:'#750016',height: '29px',cursor:'pointer'}} icon={faMobileButton} /></Link></div><div className='cate-name'><span>Iphone</span></div></div>
<div className="three"><div className='icon'><Link onClick={()=>categotychange('game')}   style={{cursor:'pointer'}}  ><FontAwesomeIcon  style={{color:'#750016',height: '29px',cursor:'pointer'}} icon={faGamepad} /></Link></div><div className='cate-name'><span>Games</span></div></div>
<div className="four"><div className='icon'><Link onClick={()=>categotychange('imac')}   style={{cursor:'pointer'}}  ><FontAwesomeIcon style={{color:'#750016',height: '29px',cursor:'pointer'}}  icon={faTv} /></Link></div><div><span className='cate-name'>IMac</span></div></div></div>
</div></div>
</div>
<div className='sp' style={{height:''}}><span>Categories</span></div></div>
        <div className="nav">
      <div className='full'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/products'>PRODUCTS</Link>
  
   </div>


       
        </div>
    </div>
      )
}

export default Menu;