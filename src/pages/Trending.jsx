import React from 'react';
import Trending from "../data/data.json";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Trending_page() {
  const navigate =useNavigate();
  const trending=Trending.Trending;
  return (
    <div className='Trending_page'>
    {
      trending.map((item,id)=>{
        return(
          <div key={id} className='Product'>
          <Link to={`${item.id}`}>
          <div className='Product_images'>
            <img src={item.src} />
        </div>
        </Link>
        <div className='Product_name'>
          <h4 className='mobile_name'>{item.name}</h4>
          <p className='mobile_price'>{item.price}</p>
          <button className="btn-1" role="button" onClick={()=>navigate(`${id}`)}>See More</button>
          </div>
          </div>
        )
      })
    }
      </div>
  )
}
