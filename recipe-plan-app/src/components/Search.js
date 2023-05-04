import React,{useState,useEffect} from "react";
import MealCard from "./MealCard";

function Search () {
    
    const [meals, setMeals] = useState([]);
    //const url="https://api.spoonacular.com/recipes/random?apiKey=c85ed085c85e4c7fa6314c7d9f271307&number=5"
  
    useEffect(() => {
      fetch()
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setMeals(data);
          })
        .catch((error) => console.log(error, "error"));
    }, []);
    console.log(meals)

    return (
      <div className="home-page">
        <h3>Home</h3>
        <form>
          <input type="text" placeholder="Search for recipe by name eg pasta" />
          <button>
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
              alt=""
            />
          </button>
        </form>
        <div>
          {meals.map((meal) => {
            return <MealCard key={meal.id} meal={meal} />
          })}
        </div>
      </div>
    );
}

export default Search