import React from "react";
import {Routes, NavLink,Route} from 'react-router-dom';
import Home from './Home';
import Search from "./Search";


function NavBar () {
    return( <>
    <div className="hero">
    <nav>    
    <ul>
        <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/">Home</NavLink></li>
        <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/search">Search</NavLink></li>  
    </ul>
    <button></button>
    </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />      
    </Routes>
    </>)
}
export default NavBar