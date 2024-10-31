import React from 'react'
import { products } from './InProd'
import { useNavigate } from 'react-router-dom'

const Best = () => {
    const navigate=useNavigate();
  return (
    <div>
<div className='bestsell'><h3 style={{textAlign:'left',fontWeight:'500',fontFamily:'Montserrat',    paddingLeft: '14px',color:'black' }}>Best Sellers Product</h3><div className="underlie"></div></div>
       <div className="backgroundcl">
        <div className="grid">
{products.filter(elem => elem.id<5).map(elem=>(

<div className='best'key={elem.id}><div className="img"><img src={elem.image} alt="#" style={{height:'250px',width:'250px'}}/></div><div className="descrip"><div className="headp"><h4><a style={{fontSize:'14px'}} href="#">{elem.aa}</a></h4><div className='pa'><p style={{color:'black',fontSize:'12px',fontFamily:'Montserrat'}}>{elem.para}</p></div></div><div className='sp' style={{textAlign:'center',fontFamily:'Montserrat',fontSize:'20px',fontWeight:'700'}}><span style={{color:'gray'}}>{elem.price}</span></div><div className="bton"><button  onClick={()=>{navigate(`/productpage/${elem.id}`)}}>View Detail</button></div></div></div>
))}
        </div></div>
    </div>
  )
}

export default Best;