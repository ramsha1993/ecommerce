import React, { useState } from 'react'
import top from '../assets/top.jpg'
import prevs from '../assets/prev.png'
import next from '../assets/next.png'
import playstation from '../assets/play station.jpg'
import latop from '../assets/laptop.jpg'

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

  const images=[latop,playstation,
top
  ]
const btn1={
background:`url(${prevs})`,
backgroundRepeat:'no-repeat',
height:'60px',
width:'50px',
border:'none',
borderRadius:'30px',cursor:'pointer',
position:'absolute',

// top:'2px',
left:'85px',
top:'1350px'
// bottom:'-100px'
// top:'10px'
// top:'5px'
}
const btn2={
  background:`url(${next})`,
  backgroundRepeat:'no-repeat',
  height:'60px',
  width:'50px',
  border:'none',
  borderRadius:'30px',cursor:'pointer',
  position:'absolute',
  right:'85px',
  // bottom:'10px'
top:'1350px'
  }
  return (
    <div className='top'>
    <h1>Our Top Rated Products</h1>
<div className='all'>
<div className='imag'><img src={images[imge]} alt="#" 
/><div className="overlay">

</div>

</div> 
<button className='prev' style={btn1} onClick={prevhandler}></button>
  <button className='next' style={btn2} onClick={handler}></button>
</div>


    </div>


  )
}

export default Top