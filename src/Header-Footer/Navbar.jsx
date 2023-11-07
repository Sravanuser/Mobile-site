import React from 'react';
import "./Nav.css";
import SmallScreenNav from './SmallScreenNav.jsx';
import LargeScreenNav from './LargeScreenNav.jsx';

export default function Navbar(){
    return(
        <div className="Navbar">
        <LargeScreenNav/>
        <SmallScreenNav/>
        </div>
    )
}