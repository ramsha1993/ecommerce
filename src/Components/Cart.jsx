import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
const [item, setitem] = useState([])
    const dispatch=useDispatch();

    const products=useSelector((state)=>state.cart)

const updatelocalstorage=(items)=>{
const existingData=localStorage.getItem('data')
let updateData=[];
if(existingData) 
    {try{
    updateData=JSON.parse(existingData)

}catch(error){
    console.log("error",error)
}}
updateData=[...updateData,...items]
const filter=updateData.filter(existingData.id === items.id)
localStorage.setItem('data',JSON.stringify(filter))
}

 useEffect(()=>{
    if(products.length>0){
        updatelocalstorage(products)
   console.log(products)
    }
 },[products]) 

const handleRemove=(item)=>{
        dispatch(remove(item))

}

useEffect(()=>{
const localdata=localStorage.getItem('data')
if(localdata){
try{
    const parsedata=JSON.parse(localdata)
    setitem(parsedata)
}catch(error){
console.log('Error',error)
}}
}

,[])



   





  return (<>
    <div><h1 style={{textAlign:'center'}}>Cart</h1></div>
    <div className="cart-wrapper">
{item.map((element,index)=>(
    <div className='cart-pro'key={index}><img width='100px' height='100px'src={element.image} alt="#" />
    <h5>{element.aa}</h5><h5 style={{width:'100px'}}>{element.price}</h5><button className='but'onClick={(()=>handleRemove(element))}>Remove</button></div>

)
    
    
    )}    
</div>
        </>)}
export default Cart