import React, { useState } from 'react'

// import prevs from '../assets/prev.png'
// import next from '../assets/next.png'
import bann from '../assets/next-ban.jpg'
import ban from '../assets/bn.jpg'
import banner from '../assets/banner-11.png'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice';
import Best from './Best'
import InProd, { products } from './InProd'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Top = () => {
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

  const images=[ban,bann,banner]
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
const [Active, setActive] = useState(false)

  const toggle=()=>{
setActive(true)
  }

  return (
    <div className='top'>

<div className='all'>
  <div className='cat'>
<div className="cateogies">
<div className="one"><div className='icon'><Link  to='/products' style={{cursor:'pointer'}}  onClick={()=>toggle()}><FontAwesomeIcon icon={faLaptop} /></Link></div><div><span>Laptops</span></div></div>
<div className="two"><div className='icon'><FontAwesomeIcon icon={faMobileButton} /></div><div><span>Iphone</span></div></div>
<div className="three"><div className='icon'><FontAwesomeIcon icon={faGamepad} /></div><div><span>Game Controller</span></div></div>
<div className="four"><div className='icon'><FontAwesomeIcon icon={faTv} /></div><div><span>IMac</span></div></div>
<div className="five"></div>
<div className="six"></div>
<div className="seven"></div>
<dov className="eight"></dov>
</div></div>
<div className='imag'><img src={images[imge]} alt="#" 
/>
<div className='text' ><h2>Buy Our lastest product </h2>
 <p>
 "50% OFF on Our Latest Products! 🎉 Grab the newest arrivals <br />
 at half the price. Limited time only—shop now and save big!"</p>
 
 </div>
 <button className='prev' style={btn1} onClick={prevhandler}><div><FontAwesomeIcon icon={faCaretLeft} /></div></button>
 <button className='next' style={btn2} onClick={handler}><div><FontAwesomeIcon icon={faCaretRight} /></div></button>


</div> 



</div>
<div>


<Best />

<div className='home_back'><h3 style={{textAlign:'left',justifyContent:'center',color:'black',fontWeight:'500',fontFamily:'Montserrat',paddingLeft:'92px'}}>Our Lastest Products</h3><div className="underline"></div></div>

<div className="scroller">

{products
  .filter((elem) => elem.id>11 )// Replace `someCondition` with your actual condition
  .map((elem, index) => (
    <div key={index} className="scroll-1">
      <img src={elem.image} alt="" />
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{

  width:'160px',fontFamily: 'Montserrat',fontSize:'12px',color:'gray'
        }}>{elem.aa}</p>
        <h5 style={{ fontFamily: 'Montserrat', color: 'gray' }}>{elem.price}</h5>
      </div> 
    </div>
  ))}
</div></div>
    </div>

  )
}

export default Top