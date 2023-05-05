import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return ( <nav className="nav">
        <NavLink to="/" className=" site-title">Site title</NavLink>
        <ul>
            <li >
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/">Home</NavLink>                
            </li>
            <li>
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/search">Search</NavLink>
            </li>
            <li>
                <NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/about">About</NavLink>
            </li>
        </ul>
    </nav>          
  );
};
export default NavBar;