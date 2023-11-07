import React from "react";
import "./Nav.css";
import {BsCartPlusFill} from "react-icons/bs";
import Navigation from "./Navigation.jsx";

export default function LargeScreenNav(){
    return(
        <div className="LargeScreen">
        <div className='SideNav'>
        <p>Shopping-site</p>
        <input type="search" placeholder='search for products and brands' name="search-bar"/>
        <BsCartPlusFill className="bs"/>
        </div>
        <Navigation/>
        </div>
    )
}