import React from 'react'
import "./display.css";
import { useParams } from 'react-router-dom';
import Trending from "./data.json";

export default function TrendingData() {
  let params=useParams().id;
  const Data=Trending.Trending;
  const data=Data[params];
  return (
    <div className='display_data'>
    <div className='display'>
    <div className='image'>
    <img src={data.src} alt={data.alt}/>
    </div>
    <div className='data'>
    <h3>{data.name}</h3>
    <p className='brand'>{data.brand}</p>
    <h4><span>{data.price}</span></h4>
    <p className='bran'>{data.Processor}</p>
    <p className='bran'>{data.Display}</p>
    <p className='bran'>{data.Camera}</p>
    <p className='bran'>{data.Battery}</p>
    <p className='bran'>{data.Storage}</p>
    <p className='bran'>{data.Connectortype}</p>
    <button class="button-85" role="button">Add to cart</button>
    </div>
    </div>
    </div>
  )
}
