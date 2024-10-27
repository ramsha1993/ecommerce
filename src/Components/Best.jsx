import React from 'react'
import { products } from './InProd'
import { useNavigate } from 'react-router-dom'

const Best = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div className='bestsell'><h2 style={{display:'flex',flexDirection:'column',alignItems:'center',fontWeight:'700',fontFamily:'Montserrat',color:'black'
        }}>Best Sellers Product</h2></div>
        <div className="grid">
{products.filter(elem => elem.id>5).map(elem=>(

<div className='best'key={elem.id}><div className="img"><img src={elem.image} alt="#" style={{height:'200px',width:'200px'}}/></div><div className="descrip"><div className="headp"><h4><a style={{fontSize:'14px'}} href="#">{elem.aa}</a></h4><div className='pa'><p style={{color:'black',fontSize:'12px',fontFamily:'Montserrat'}}>{elem.para}</p></div></div><div className='sp' style={{textAlign:'center',fontFamily:'Montserrat',fontSize:'20px',fontWeight:'700'}}><span >{elem.price}</span></div><div className="bton"><button  onClick={()=>{navigate(`/productpage/${elem.id}`)}}>View Detail</button></div></div></div>
))}
        </div>
    </div>
  )
}

export default Best;