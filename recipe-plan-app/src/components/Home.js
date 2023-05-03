import React,{useState,useEffect} from "react";
import MealCard from "./MealCard";

function Home() {
    const [meals, setMeals] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=c85ed085c85e4c7fa6314c7d9f271307&query=pasta"
      )
        .then((r) => r.json())
        .then((data) => setMeals(data.results))
        .catch((error) => console.log(error, "error"));
    }, []);
  
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
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;
  
  
  
  
  