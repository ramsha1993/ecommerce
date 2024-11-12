import React, {useEffect, useState } from 'react'
import './Cart.module.css'
import { useSelector } from 'react-redux'
import { add, remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import  classes from './Cart.module.css'

const Cart = () => {
 
const [item,setitem] = useState([])
    const dispatch=useDispatch();

    const products=useSelector((state)=>state.cart)


const handleRemove=(elem)=>{
 dispatch(remove(elem))}
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

const value=useSelector((state)=>state.cart)
const filterprice=value.map((elem)=>parseFloat(elem.price.replace(/Rs\.?|,/gi, ""))).reduce((sum,curval)=>sum+curval,0);
console.log(filterprice)
const shiping=200;
let productitem=0;
let checkArray=[]
const filterid=value.forEach((elem)=>{

if(!checkArray.includes(elem.id)){
    checkArray.push(elem.id);
    productitem+=1}})
    const it_includes=[]
return (
<div className={classes.container}>
 <table className='check-out table'>
    <tbody>
        <tr style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', marginBottom:'17px',padding:'10px 10px'}}><th>Product</th>
    <th>Price</th>
<th>Remove</th>
</tr>
    
    <div className={classes.cartWrapper}> {/* Ensure this uses the class from the module */}
        {item.length === 0 ? (
            <p>Your cart is empty</p>
      
        ):(item.filter((item) => {
              // Only include items that are not in `it_includes`
              if (!it_includes.includes(item.id)) {
                it_includes.push(item.id); // Add unique item ID to `it_includes`
                return true; // Include this item in the filtered array
              }}).map((element,index) => (
    <tr style={{    display: 'flex',
                    alignItems: 'center',width:'100%'}}><div className='cart-pro' key={index}>
{ console.log(index)}
               
    <td style={{width:'65%'}}> <div className={classes.imgtext}> <img
                        width='100px'
                        height='100px'
                        src={element.image}
                        alt="#"
                    />
                    <h5>{element.aa}</h5></div></td>
                 <td>   <h5 style={{ width: '100px' }}>{element.price}</h5></td>
               <td>     <button className='but' onClick={() => handleRemove(element)}>Remove</button></td>
             </div> </tr>  
            ))
          )}
    </div></tbody>
    </table>
    <div className={classes.Maincheckout}>
        <div className={classes.second}><div><button>Proceed to checkout</button></div>
   <div className={classes.center}> <div className={classes.checkout}><p>Total products:</p> <h5>{productitem}</h5></div>
<div className={classes.checkout}><p>Total items:</p> <h5>{value.length}</h5></div>
<div className={classes.checkout}><p>Taxes + shipping:</p><h5>{value.length>0?shiping:0}</h5></div>
<div className={classes.checkout}><p>Total: </p><h5>Rs.{filterprice>0?filterprice+shiping:filterprice}</h5></div></div>
    </div>
    </div></div>


  );
}
export default Cart;