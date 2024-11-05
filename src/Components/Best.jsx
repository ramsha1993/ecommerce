import React from 'react'
import { products } from './InProd'
import { useNavigate } from 'react-router-dom'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Best = () => {
    const navigate=useNavigate();
  return (
    <div>
<div className='bestsell'><h3 style={{textAlign:'left',fontWeight:'500',fontFamily:'Montserrat',    paddingLeft: '14px',color:'black' }}>Best Sellers Product</h3><div className="underlie"></div></div>
       <div className="backgroundcl">
        <div className="grid">
{products.filter(elem => elem.id<5).map(elem=>(

<div className='best'key={elem.id}><div className="img"><img src={elem.image} alt="#" style={{height:'250px',width:'250px'}}/></div><div className="descrip"><div className="headp"><h4><a style={{fontSize:'14px'}} href="#">{elem.aa}</a></h4> <div style={{ display: 'flex' }}>
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
                <FontAwesomeIcon style={{ color: 'orange' }} icon={faStarHalfStroke} />
              </div>
              <div ><p style={{fontFamily:'Montserrat',color:'black'}}>50+ has been sold out</p></div>
              <div><p style={{fontFamily:'Montserrat',color:'black'}}>Available only for Residents of Pakistan</p></div><div className="sp"><span>{elem.price}</span></div></div><div className="bton"><button  onClick={()=>{navigate(`/productpage/${elem.id}`)}}>View Detail</button></div></div></div>
))}
        </div></div>
    </div>
  )
}

export default Best;