import React from "react";
import "../Carousel-page/Carousel.css";
import {Carousel} from "../Carousel-page/Carousel";
import Slider from "../data/data.json";
import Trending from "../data/data.json";
import { Link } from "react-router-dom";

export default function Home(){
    let trending_products=Trending.Trending;
    return(
        <div className="home">
        <Carousel data={Slider}/>
        <h4 class="trending_site">Trending in Shopping site</h4>
        <hr/>
        <div className="trending">
        {
            trending_products != [] ? trending_products.map((item,index)=>{
                return(
                <div className="trend" key={index}>
                <Link to="/Trending">
                <img src={item.src} alt={item.alt} />
                <p>{item.name}</p>
                </Link>
                </div>
                )
            }) : <p>Data not found</p>
        }
        </div>
        <h4 className="trending_site">Mostly viewed</h4>
        <hr/>
        <div className="trending">
        {
            trending_products != [] ? trending_products.map((item,index)=>{
                return(
                <div className="trend" key={index}>
                <Link to="/Trending">
                <img src={item.src} alt={item.alt} />
                <p>{item.name}</p>
                </Link>
                </div>
                )
            }) : <p>Data not found</p>
        }
        </div>
        <br/>
        </div>
    )
}