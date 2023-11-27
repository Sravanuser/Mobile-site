import React from "react";
import "./Nav.css";
import {BsCartPlusFill} from "react-icons/bs";
import Navigation from "./Navigation.jsx";
import { useNavigate } from "react-router-dom";

export default function LargeScreenNav(){
    const navigate = useNavigate();
    return(
        <div className="LargeScreen">
        <div className='SideNav'>
        <p>Shopping-site</p>
        <input type="search" placeholder='search for products and brands' name="search-bar"/>
        <BsCartPlusFill className="bs" onClick={()=>navigate('AddToCart')}/>
        </div>
        <Navigation/>
        </div>
    )
}