import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { add, remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import  classes from './Cart.module.css'
const Cart = () => {
const [item,setitem] = useState([])
    const dispatch=useDispatch();

    const products=useSelector((state)=>state.cart)


const handleRemove=(index)=>{
 dispatch(remove({index}))}
    // on product change setitem and localstorage
 useEffect(()=>{
    // if(products && products.length>0){
    if(products){
    setitem(products)
    // console.log(products)}
    // else if (products && products.length === 0){
        // setitem([])
    }
          
            }
         ,[products])
// showing products from local storage on mount
useEffect(() => {
 
    if (products>0){
        
        const localData = JSON.parse(localStorage.getItem('data'))
        if (Array.isArray(localData) && localData.length > 0) {
            setitem(localData);
        }

    }
    
}, [])
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
                        src={element.image}
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