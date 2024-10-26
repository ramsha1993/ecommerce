import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
const [item,setitem] = useState([])
    const dispatch=useDispatch();

    const products=useSelector((state)=>state.cart)

const updatelocalstorage=(items)=>{
    console.log(items)
let updateData=[];
updateData=[...updateData,...items]
// console.log(updateData)
localStorage.setItem('data',JSON.stringify(updateData))
}

 useEffect(()=>{
    if(products.length>0){
        updatelocalstorage(products)
   console.log(products)
    }
 },[products]) 

const handleRemove=(elem)=>{
        dispatch(remove(elem))
        console.log(elem)
        const localData = JSON.parse(localStorage.getItem('data')) || [];
        const updatedData = localData.filter((item) => item.aa !== elem.aa); // Assuming 'aa' is a unique identifier
        localStorage.setItem('data', JSON.stringify(updatedData));
        setitem(updatedData)
        }

useEffect(()=>{
 const localdata=JSON.parse(localStorage.getItem('data'))
if(localdata){
try{
    
setitem(localdata)}
catch(error){
console.log('Error',error)
}}
}

,[])
return (
    <>
      <div><h1 style={{ textAlign: 'center' }}>Cart</h1></div>
      <div className="cart-wrapper">
        {item.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          item.map((element, index) => (
            <div className='cart-pro' key={index}>
              <img
                width='100px'
                height='100px'
                src={element.image || "/static/media/headphone.35744d1d7bc0b01d5a3d.jpg"}
                alt="#"
              />
              <h5>{element.aa}</h5>
              <h5 style={{ width: '100px' }}>{element.price}</h5>
              <button className='but' onClick={() => handleRemove(element)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default Cart