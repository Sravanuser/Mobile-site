import React from "react";
import "../Carousel-page/Carousel.css";
import {Carousel} from "../Carousel-page/Carousel";
import MobileData from "../data/data.json";
import { Link } from "react-router-dom";

export default function Home(){
    const TrendingData = MobileData.MobilesData;
    const filterData = TrendingData.filter(item =>item.ui.includes('Trending'));
    const Slider = TrendingData.filter(item =>item.ui.includes('slider'));
    return(
        <div className="home">
        <Carousel data={Slider}/>
        <h4 className="trending_site">Trending in Shopping site</h4>
        <hr/>
        <div className="trending">
        {
                filterData.map((item,index)=>{
                return(
                <div className="trend" key={index}>
                <Link to={`${item.id}`}>
                <img src={item.src} alt={item.alt} />
                <p>{item.name}</p>
                </Link>
                </div>
                )
            })
        }
        </div>
        <h4 className="trending_site">Mostly viewed</h4>
        <hr/>
        <div className="trending">
        {
            filterData.map((item,index)=>{
                return(
                <div className="trend" key={index}>
                <Link to={`${item.id}`}>
                <img src={item.src} alt={item.alt} />
                <p>{item.name}</p>
                </Link>
                </div>
                )
            })
        }
        </div>
        <br/>
        </div>
    )
}