 import React from "react";
import "./Nav.css";
import Navigation from "./Navigation.jsx";
import AddToCart from "../pages/AddToCart.jsx";
import { useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross1} from "react-icons/rx";
import {BsCartPlusFill} from "react-icons/bs";

export default function SmallScreenNav(){
    const navigate = useNavigate();
    const[open,setopen] = React.useState(false);
    const ham=<GiHamburgerMenu className="ham" size="35px" style={{color:"white"}} onClick={()=>setopen(!open)} />
    const cross=<RxCross1 className="cross" size="35px" onClick={()=>setopen(!open)}/>
    const CloseMobileMenu=()=>{
        setopen(false);
    }
    return(
        <div className="SmallScreen">
        <div className='SideNav'>
        {open ? cross : ham}
        {open &&  <Navigation CloseMobileMenu={CloseMobileMenu}/>}
        <p className="logo">Shopping-site</p>
        <BsCartPlusFill className="bs" onClick={()=>navigate("AddTocart")}/>
        </div>
        <div className="input">
        <input type="search" placeholder='search for products and brands' name="search-bar"/>
        </div>
        </div>
    )
}