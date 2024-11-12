import React, { useState } from 'react'

// import prevs from '../assets/prev.png'
// import next from '../assets/next.png'
import bann from '../assets/baner.png'
import banner from '../assets/phones.png'
import game from '../assets/GAME-2 (2).png'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Best from './Best'
import InProd, { products } from './InProd'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
const Top = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
const addhandLer=(cart_pro)=>{
return dispatch(add(cart_pro))
}

const [imge, setimge] = useState(0)
function prevhandler(){
  if(imge==0){
    setimge(images.length-1)
  }
  else{
    setimge(imge-1)
  }
}
function handler(){
  if(imge===images.length-1){
    return setimge(0)
  }
 else{return  setimge(imge+1)
}}

  const images=[bann,game,banner]
const btn1={
  background:'none',
height:'70px',
width:'50px',
border:'none',
borderRadius:'30px',cursor:'pointer',
position:'absolute',
left: '0%',
top: '150px'

}
const btn2={

background:"none",
  height:'60px',
  width:'50px',
  border:'none',
  borderRadius:'30px',cursor:'pointer',
  position:'absolute',
top: '150px',
right:'0%'  }

  return (
    <div className='top'>

<div className='all'>

<div className='imag'><img src={images[imge]} alt="#" 
/>

 <button className='prev'  onClick={prevhandler}><div><FontAwesomeIcon icon={faCaretLeft} /></div></button>
 <button className='next'  onClick={handler}><div><FontAwesomeIcon icon={faCaretRight} /></div></button>


</div> 



</div>
<div>


<Best />

<div className='home_back'><h3 style={{textAlign:'left',justifyContent:'center',color:'black',fontWeight:'500',fontFamily:'Montserrat',paddingLeft:'92px'}}>Our Lastest Products</h3><div className="underline"></div></div>

<div className="scroller">

{products
  .filter((elem) => elem.id>11 )// Replace `someCondition` with your actual condition
  .map((elem=> 


      <div className='best'key={elem.id}><div className="img"><img src={elem.image} alt="#" /></div><div className="descrip"><div className="headp"><h4><a  href="#">{elem.aa}</a></h4> <div style={{ display: 'flex' }}>
                      <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                      <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                      <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                      <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                      <FontAwesomeIcon style={{ color: 'orange' }} icon={faStarHalfStroke} />
                    </div>
                    <div ><p style={{fontFamily:'Montserrat',color:'black'}}>50+ has been sold out</p></div>
                    <div><p style={{fontFamily:'Montserrat',color:'black'}}>Available only for Residents of Pakistan</p></div><div className="sp"><span>{elem.price}</span></div></div><div className="bton"><button  onClick={()=>{navigate(`/productpage/${elem.id}`)}}>View Detail</button></div></div></div>
      
  ))}
</div></div>
    </div>

  )
}

export default Top