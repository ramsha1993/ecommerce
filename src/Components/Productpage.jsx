
import { useParams } from 'react-router-dom'
import { products } from './InProd';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
const Productpage = () => {

const dispatch=useDispatch();
  const addtocart=(prodt)=>{
return dispatch(add(prodt))
  }


const {productId}=useParams();
console.log(productId)
const product=products.find((p)=>p.id === parseInt(productId))
// console.log(product);


  return (
    <div  className='main' ><div className="image"><img width={'300px'} height={'300px'} src={product.image} alt="#" /></div><div className="des"><h1>{product.aa}</h1><p>{product.para}</p> <h4>{product.price}</h4><div >
<button className='bt' onClick={()=>addtocart(product)}>Add to Cart</button></div></div></div>

)}


export default Productpage;