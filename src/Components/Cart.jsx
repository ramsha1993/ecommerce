import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import  classes from './Cart.module.css'

const Cart = () => {
const [item,setitem] = useState([])
    const dispatch=useDispatch();

    const products=useSelector((state)=>state.cart)

const updatelocalstorage=(items)=>{

localStorage.setItem('data',JSON.stringify(items))
}



const handleRemove=(index)=>{
 dispatch(remove({index}))
//  console.log(products)
//     const update=item.filter((__,idx)=>(idx !== index));
// console.log(update)
//      setitem(update)
// updatelocalstorage(update)
    }
    // on product change setitem and localstorage
 useEffect(()=>{
            if(products){
                setitem(products)
                updatelocalstorage(products)
           console.log(products)
            }
         },[products]) 

// showing products from local storage on mount
useEffect(()=>{
 const localdata=JSON.parse(localStorage.getItem('data'))
if(localdata>0){
try{
    
setitem(localdata)}
catch(error){
console.log('Error',error)
}}
}

,[])
return (
<div className={classes.container}>
    <div>
        <h1 className={classes.cartHeading}>Cart</h1> {/* Use the new class here */}
    </div>
    <div className={classes.cartWrapper}> {/* Ensure this uses the class from the module */}
        {item.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            item.map((element,index) => (
                <div className='cart-pro' key={index}>
{ console.log(index)}
                    <img
                        width='100px'
                        height='100px'
                        src={element.image || "/static/media/headphone.35744d1d7bc0b01d5a3d.jpg"}
                        alt="#"
                    />
                    <h5>{element.aa}</h5>
                    <h5 style={{ width: '100px' }}>{element.price}</h5>
                    <button className='but' onClick={() => handleRemove(index)}>Remove</button>
                </div>
            ))
        )}
    </div>
</div>


  );
}
export default Cart;