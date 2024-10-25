import React, { useState } from 'react'
import prevs from '../assets/prev.png'
import next from '../assets/next.png'
import bn from '../assets/banner-4.png'
import bann from '../assets/banner-7.png'
import baner from '../assets/baner-8.jpg'
import bannner from '../assets/banner-9.jpg'
const Top = () => {
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

  const images=[bn,bann,bannner]
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
    <h1>Our Top Rated Products</h1>
<div className='all'>
<div className='imag'><img src={images[imge]} alt="#" 
/><div className='text' ><h2>Buy Our lastest product </h2>
 <p>
 "50% OFF on Our Latest Products! 🎉 Grab the newest arrivals <br />at half the price. Limited time only—shop now and save big!"</p>
 
 </div>
 <button className='prev' style={btn1} onClick={prevhandler}></button>
 <button className='next' style={btn2} onClick={handler}></button>

 <div className="overlay">
 
</div>
</div> 

</div>


    </div>


  )
}

export default Top