import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

export function Carousel({data}) {
  let Data=data;
  const[slide,setslide]=React.useState(0);
  const nextSlide=()=>{
    setslide(slide===Data.length-1 ? 0 : slide+1);
  }
  const prevSlide=()=>{
    setslide(slide===0 ? Data.length-1 : slide-1);
  }
  useEffect(()=>{
    const interval=setInterval(()=>{
      nextSlide();
    },2000);
    return()=>{
      clearInterval(interval);
    }
  },[slide])
  return (
    <div className='carousel'>
    <BsFillArrowLeftCircleFill className="left" onClick={prevSlide} />
    {
      Data.map((item,id)=>{
        return(
          <div className='slide' key={id}>
          <Link to={`${item.id}`}>
          <img src={item.src} alt={item.alt} className={slide===id ? "images" : "images images-hidden"}/>
          </Link>
          </div>
          )
        })
      }
      <BsFillArrowRightCircleFill className='right' onClick={nextSlide}/>
      <span className='indicator'>
      {
        Data.map((_,id)=>{
          return(
            <button key={id} onClick={()=>setslide(id)} className={slide===id ? "indicators" : "indicators indicators-hidden"}></button>
          )
        })
      }
      </span>
    </div>
  )
}
