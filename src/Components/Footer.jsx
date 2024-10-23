import React from 'react'
import app from '../assets/app.jpg'
import play from '../assets/play.jpg'
import '../App.css'
import pay from '../assets/pay.png'
import face from'../assets/facebook.png'
import insta from '../assets/insta.png'
import link from '../assets/link.png'
import twitter from '../assets/twitter.png'
const Footer = () => {
  const img1={
    border: '1px solid green', 
    borderRadius: '4px',
    background:`url(${app})`,
  backgroundRepeat:'no-repeat',width:'149px',height: '51px'}
  const img2={
    border: '1px solid green', 
    borderRadius: '4px',background:`url(${play})`,
  backgroundRepeat:'no-repeat',width:'149px',height: '51px'}
  return (
    <div className="c">
    <div className='flex'>
      <div className="about"><h5>Contact</h5>
      <h5>Adress: <span>F.B AREA KARACHI</span></h5>
      <h5>Phone:<span>03344232232</span></h5>
      <div><h4>Follow us:</h4>
      <a href="#"><img src={face} alt="#" style={{height:'40px'}} /></a> <a href="#"><img src={insta} alt="#"  style={{height:'40px'}} /></a> <a href="#"><img src={twitter} alt="#"  style={{height:'40px'}} /></a><a href="#"><img src={link} alt="#"  style={{height:'40px'}} /></a></div>
      
      </div>
  <div className="payemnts"><h5>Install Our Apps</h5>
  <div className="btn"><button style={img1}></button><button style={img2}></button>
  </div>   
  <span>Secured payment gateways</span>    
 <div> <img src={pay} alt="#" /></div>
   </div>
   
</div>
<span>Copyright © 2024 RF stores.com</span></div>)
}
export default Footer;