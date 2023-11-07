import React from "react";
import "./Nav.css";
import {NavLink} from "react-router-dom";

export default function Navigation(props){
    return(
        <div className="Navigation">
        <NavLink to="/" onClick={()=>props.isMobile && props.CloseMobileMenu}>Home</NavLink>
        <NavLink to="/mobile" onClick={()=>props.isMobie && props.CloseMobileMenu}>mobiles</NavLink>
        <NavLink to="/laptop" onClick={()=>props.isMobie && props.CloseMobileMenu}>Laptop</NavLink>
        <NavLink to="" onClick={()=>props.isMobie && props.CloseMobileMenu}>Login</NavLink>
        </div>
    )
}