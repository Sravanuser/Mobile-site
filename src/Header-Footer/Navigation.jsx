import React from "react";
import "./Nav.css";
import {NavLink} from "react-router-dom";

export default function Navigation(props){
    return(
        <div className="Navigation">
        <NavLink to="/" onClick={props.CloseMobileMenu}>Home</NavLink>
        <NavLink to="/mobile" onClick={props.CloseMobileMenu}>mobiles</NavLink>
        <NavLink to="/mobile" onClick={props.CloseMobileMenu}>mobiles</NavLink>
        <NavLink to="/mobile" onClick={props.CloseMobileMenu}>mobiles</NavLink>
        </div>
    )
}