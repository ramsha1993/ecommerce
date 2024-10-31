import React, { useState } from 'react'
import prevs from '../assets/prev.png'
import next from '../assets/next.png'
import bann from '../assets/next-ban.jpg'
import ban from '../assets/bn.jpg'
import banner from '../assets/banner-11.png'
import baner from '../assets/baner-8.jpg'
import apple from'../assets/apple lap.jpg'
import head from '../assets/headphone.jpg'
import iphonex from'../assets/iphonex.webp'
import sm from '../assets/smart.webp'
import smart from '../assets/smart watch.jpg'
import imac from '../assets/imac.jpg'
import keyboard from '../assets/keyboard.webp'
import mouse from '../assets/mouse.webp'
import gaming from '../assets/gamingpc.webp'
import earpod from '../assets/earpod.webp'
import ipad from '../assets/appleipad.webp'
import hp from '../assets/hp.webp'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice';
import Best from './Best'
import { products } from './InProd'






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
background:`url(${prevs})`,
backgroundRepeat:'no-repeat',
height:'60px',
width:'50px',
border:'none',
borderRadius:'30px',cursor:'pointer',
position:'absolute',
left: '0%',
top: '120px'

}
const btn2={
  background:`url(${next})`,
  backgroundRepeat:'no-repeat',
  height:'60px',
  width:'50px',
  border:'none',
  borderRadius:'30px',cursor:'pointer',
  position:'absolute',
top: '120px',
right:'0%'  }

  return (
    <div className='top'>
<div className='all'>
<div className='imag'><img src={images[imge]} alt="#" 
/>
<div className='text' ><h2>Buy Our lastest product </h2>
 <p>
 "50% OFF on Our Latest Products! 🎉 Grab the newest arrivals <br />
 at half the price. Limited time only—shop now and save big!"</p>
 
 </div>
 <button className='prev' style={btn1} onClick={prevhandler}></button>
 <button className='next' style={btn2} onClick={handler}></button>

 <div className="overlay">
 
</div>
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