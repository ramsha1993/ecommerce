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

const pro=[{id:0,image:apple, aa:
  'Apple MacBook Air 15.3" Laptop | Apple M3 8-Core Chip | MRYN3 , Space Gray'
  ,para:'The Space Gray Apple 15" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. '
  ,price:'Rs.500000'},{id:1,image:head, aa:'Sony WH-1000XM4 Wireless Premium Noise Can...',para:'Experience superior sound quality with our premium wireless headphones, designed for ultimate comfort and performance. With powerful bass, crystal-clear mids, and crisp highs. The ergonomic design ensures hours of comfortable wear.',
  price:'Rs.2000'},{id:2,image:iphonex, aa:'Apple iphone 13 - 128 GB - 6.1" Inch Display - JV (Factory Locked) - 1 Year Official Warranty',para:'Featuring a vibrant 6.1-inch Super Retina XDR display, it offers incredible clarity and color. Powered by the A15 Bionic chip, the iPhone 13 ensures lightning-fast speed for gaming and multitasking.',price:'Rs.130000'},
  {id:3,image:sm, para:'  Featuring a vibrant touch display, it tracks your fitness goals, monitors heart rate, and provides notifications right on your wrist. With customizable watch faces and interchangeable band.',aa:'S9 Ultra Series 9 Smart Watch|Body Temperature Monitor|Bluetooth Call|Calculator Wireless ',price:'Rs.20000'},
  {id:4,image:smart, price:'Rs.10000', para:'Featuring a vibrant touch display, it tracks your fitness goals, monitors heart rate, and provides notifications right on your wrist. With customizable watch faces and interchangeable bands, you can express your personal style effortlessly.', aa:'S8 Ultra Series 8 Smart Watch|Body Temperature Monitor'
  },{id:5,aa:'NEW GAMING PC - CORE I5 10400F - 10TH GEN BOOST UPTO 4.30GHZ - RAM 16GB DDR4 - 256GB SSD - 500GB HARD - SIDE GLASS RGB', image:gaming,para:'Enhance your gaming with our powerful gaming PC, designed for peak performance. Featuring a top-notch processor and graphics card.'  ,price:'Rs.1,30000'}]




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

<div className='home_back'><h2 style={{display:'flex',alignItems:'flex-start',justifyContent:'center',color:'black',fontWeight:'700',fontFamily:'Montserrat'}}>Our Lastest Products</h2></div>
<div className="scroller">

 {pro.map((elem,index)=>(<div  key={index} className="scroll-1">
   <img src={elem.image} alt="" />
<div>
   <button onClick={()=>{addhandLer(elem)}} style={{marginTop:'20px',marginBottom:'10px',cursor:'pointer',
    padding:'10px 20px',borderRadius:'7px',border:'none',backgroundColor:'rgba(66, 116, 105, 0.838)'
   }}>Add to Cart</button></div>
  </div> ))}
</div></div>
    </div>


  )
}

export default Top