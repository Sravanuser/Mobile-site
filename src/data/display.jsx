import React from 'react'
import "./display.css";
import { useParams } from 'react-router-dom';
import Slider from "../data/data.json";
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { useState } from 'react';

export default function Display() {
    const [showmsg, setshowmsg] = useState(false);
    let params=useParams().id;
    const Data=Slider.MobilesData;
    const data=Data[params];
    const {addToCart} = useContext(CartContext);
    function handle(){
    addToCart(Data[params]);
    setshowmsg(true);
    setTimeout(()=>{
      setshowmsg(false);
    },3000)
    }
    return (
    <div className='display_data'>
    {
      showmsg && <p className='message'>Added to cart</p>
    }
    <div className='display'>
    <div className='image'>
    <img src={data.src} alt={data.alt}/>
    </div>
    <div className='data'>
    <h3>{data.name}</h3>
    <p className='brand'>{data.brand}</p>
    <h4><span>₹{data.price}</span></h4>
    <p className='bran'>{data.Processor}</p>
    <p className='bran'>{data.Display}</p>
    <p className='bran'>{data.Camera}</p>
    <p className='bran'>{data.Battery}</p>
    <p className='bran'>{data.Storage}</p>
    <p className='bran'>{data.Connectortype}</p>
    <button className="button-85" onClick={()=>handle()} role="button">Add to cart</button>
    </div>
    </div>
    </div>
  )
}
