import React, { useState } from 'react'
import '../App.css';import apple from'../assets/apple lap.jpg'
import head from '../assets/headphone.jpg'
import iphonex from'../assets/iphonex.webp'
import smart from '../assets/smart watch.jpg'
import imac from '../assets/imac.jpg'
import keyboard from '../assets/keyboard.webp'
import mouse from '../assets/mouse.webp'
import gaming from '../assets/gamingpc.webp'
import earpod from '../assets/earpod.webp'
import ipad from '../assets/appleipad.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import hp from '../assets/hp.webp'
import sm from '../assets/smart.webp'
import { useNavigate } from 'react-router-dom';
import { add } from '../store/cartSlice';
import rename from '../assets/rename-1.jpg';
import renam from '../assets/rename-3.jpg';
import ren from '../assets/rename-4.jpg';
import re from '../assets/rename-5.jpg';
import { useDispatch } from 'react-redux';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
export const products=[{id:0,name:'laptop',image:apple, aa:
  'Apple MacBook Air 15.3" Laptop | Apple M3 8-Core Chip | MRYN3 , Space Gray'
  ,para:'The Space Gray Apple 15" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. '
  ,price:'Rs.500000'},{id:1,image:head, aa:'Sony WH-1000XM4 Wireless Premium Noise Can...',para:'Experience superior sound quality with our premium wireless headphones, designed for ultimate comfort and performance. With powerful bass, crystal-clear mids, and crisp highs. The ergonomic design ensures hours of comfortable wear.',
  price:'Rs.2000'},{id:2,image:iphonex, aa:'Apple iphone 13 - 128 GB - 6.1" Inch Display - JV (Factory Locked) - 1 Year Official Warranty',para:'Featuring a vibrant 6.1-inch Super Retina XDR display, it offers incredible clarity and color. Powered by the A15 Bionic chip, the iPhone 13 ensures lightning-fast speed for gaming and multitasking.',price:'Rs.130000'},
  {id:3,image:sm, para:'  Featuring a vibrant touch display, it tracks your fitness goals, monitors heart rate, and provides notifications right on your wrist. With customizable watch faces and interchangeable band.',aa:'S9 Ultra Series 9 Smart Watch|Body Temperature Monitor|Bluetooth Call|Calculator Wireless ',price:'Rs.20000'},
    {id:4,image:smart, price:'Rs.10000', para:'Featuring a vibrant touch display, it tracks your fitness goals, monitors heart rate, and provides notifications right on your wrist. With customizable watch faces and interchangeable bands, you can express your personal style effortlessly.', aa:'S8 Ultra Series 8 Smart Watch|Body Temperature Monitor'
    },{id:5,aa:'NEW GAMING PC - CORE I5 10400F - 10TH GEN BOOST UPTO 4.30GHZ - RAM 16GB DDR4 - 256GB SSD', image:gaming,para:'Enhance your gaming with our powerful gaming PC, designed for peak performance. Featuring a top-notch processor and graphics card.'  ,price:'Rs.1,30000'},{id:6,
      image:earpod, aa:'M10 &amp; M90 &amp; i12 black Double Wireless 2 Airpods Bluetooth',para:'Experience unparalleled sound quality with our premium earpods, designed for comfort and style. With advanced noise-canceling technolog.', price:'Rs.5000'
    },{ id:7,aa:'Apple iPad 10 (10th Generation) 2022 - 10.9 " Inch Display - WiFi - 64GB &amp' ,para:'Introducing the Apple iPad 10 (10th Generation) 2022, featuring a stunning 10.9-inch display that brings your content to life. Available in both 64GB and 256GB storage options.',image:ipad, price:'Rs.1,20000'},{id:8,
      name:'laptop',image:hp, aa:'Hp Chromebook 11 G6 EE | 4GB RAM DDR4 | 16GB SSD EMMC ', para:'Discover the HP Chromebook 11 G6 EE, a reliable and compact laptop designed for everyday tasks. With 4GB of DDR4 RAM and 16GB eMMC storage, it offers smooth performance. ', price:'Rs.50000'
    },{id:9,image:mouse, aa:'Bluetooth Mouse for APPle MacBook Air Pro Retina 11 12 13 15 16 mac' ,para:'Enhance your productivity with our Bluetooth Mouse, designed specifically for Apple MacBook Air and Pro models (11", 12", 13", 15", and 16"). This wireless mouse offers' ,price:'Rs.20000'},{
      id:10,image:keyboard, aa:'HUO JI Compact Wireless Mechanical Keyboard: RGB Backlit Keyboard, Wired and Bluetooth 5.0,71-Key Layout.',para:'Upgrade your typing experience with the HUO JI Compact Wireless Mechanical Keyboard.', price:'Rs.25000'
    },{id:11, image:imac,aa:'Apple iMac MGPC3 8‑core CPU 8‑core GPU 8GB unified memory 256GB' ,para:'Experience stunning performance and design with the Apple iMac MGPC3, featuring an impressive 24-inch 4.5K Retina display that brings your content to life with vibrant colors and sharp details.',price:'Rs.7,40000'},{id:12,image:rename,para:'Discover next-level gaming with our Ultra Series Wireless Gaming Headset, designed for immersive audio and maximum comfort. Equipped with noise-canceling technology.',aa:'"Elevate Your Game with the Ultra Series Wireless Gaming Headset',price:'Rs.50000'},
  {id:13,image:renam,aa:'Stay Connected in Style with the Smart Fit Pro Watch',para:'Experience seamless connectivity and advanced fitness tracking with the Smart Fit Pro Watch. Designed for those who live life on the go, this sleek smartwatch lets you manage call',price:'RS.40000'},{id:14,image:ren,aa:'Experience Precision Control with the Elite Game Controller',para:'Designed for gamers who demand the best, the Elite Game Controller combines ergonomic comfort with high-performance features.',price:'Rs.20000'}
,{id:14,image:re,aa:'Premium Headphones for Every Ear',para:'Experience sound like never before with our UltraComfort Wireless Headphones. Designed for audiophiles and casual listeners alike, ',price:'Rs.5000'}]






const InProd = ({Active:initialActive}) => {
  const [Active, setActive] = useState(initialActive||false)
  const dispatch=useDispatch();
  const addtocart=(prodt)=>{
return dispatch(add(prodt))
  }

  // Filter products by name if Active is true
  const filteredProducts = Active
    ? products.filter((product) => product.name === 'laptop') // Update 'laptop' to desired filter criteria
    : products;

  return (
    <div className="Produckte">
      {filteredProducts.map((elem) => (
        <div className="child" key={elem.id}>
          <div className="img">
            <Link to={`/productpage/${elem.id}`}>
              <img src={elem.image} alt="" style={{ height: '200px', width: '200px' }} />
            </Link>
          </div>
          <div className="descrip">
            <div className="headp">
              <h4>
                <Link to={`/productpage/${elem.id}`}>{elem.aa}</Link>
              </h4>
              <div style={{ display: 'flex' }}>
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStarHalfStroke} />
              </div>
              <div><p>50+ has been sold out</p></div>
              <div><p>Available only for Residents of Pakistan</p></div>
              <div className="sp"><span>{elem.price}</span></div>
            </div>
            <div className="bton">
              <button onClick={() => addtocart(elem)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InProd;