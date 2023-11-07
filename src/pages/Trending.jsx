import React from 'react';
import Trending from "../data/data.json";
import { Link } from 'react-router-dom';

export default function Trending_page() {
  const trending=Trending.Trending;
  return (
    <div className='Trending_page'>
    {
      trending.map((item,id)=>{
        return(
          <div key={id} className='Product'>
          <Link to={`${id}`}>
          <div className='Product_images'>
            <img src={item.src} />
        </div>
        </Link>
        <div className='Product_name'>
          <h4 className='mobile_name'>{item.name}</h4>
          <p className='mobile_price'>{item.price}</p>
          <button class="btn-1" role="button">Add to cart</button>
          </div>
          </div>
        )
      })
    }
      </div>
  )
}
