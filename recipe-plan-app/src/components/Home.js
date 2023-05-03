import React from "react";
import MealCard from "./MealCard";

function Home () {
    return <div>
        <h3>Home</h3>
        <form>
            <input type="text" placeholder="Search for recipe by name eg pasta" />
            <button ><img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" alt="" /></button> 
        </form>        
        <MealCard/>
        </div>
}
export default Home