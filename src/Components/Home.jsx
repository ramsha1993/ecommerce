import React from 'react'
import '../App.css'
import banner from '../assets/banner.jpg';
import Top from './Top';




function Home() {
   const backgroundStyle={
    backgroundImage:`url(${banner})`,
    height:'100vh',
    backgroundSize:'cover',                // Zooms the image by 129%
  backgroundRepeat: 'no-repeat',          // Prevents the image from repeating
  backgroundPosition: 'center',     
  zIndex:'-1',
  }
  
  return (<>
    <div className='home' style={backgroundStyle} >
<div style={{zIndex:'1',backgroundColor:'rgba(128, 128, 128, 0.6)', width:'100%',height:'100vh'}}>




<div className='inner'><h1>"Shop the Latest Trends with Unbeatable Prices!"</h1>
<p style={{padding:'0px 15px',
  paddingRight:'280px ',
  fontFamily: 'Montserrat',
  fontSize: '22px'}}><span style={{color:'#2B2B2B'}}>"Welcome to [Your Store Name], your go-to destination for the latest in mobile phones, laptops, and cutting-edge electronics. Discover top brands and unbeatable deals on all your favorite devices, from smartphones to high-performance laptops. With fast shipping, secure checkout, and dedicated customer support, upgrading your tech has never been easier. Shop now and stay ahead with the best in technology!"</span></p>
</div></div>

    </div>
    <Top />
    </>
 
)}


export default Home;