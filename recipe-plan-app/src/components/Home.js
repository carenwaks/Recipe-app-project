import React,{useState,useEffect} from "react";
import MealCard from "./MealCard";

function Home() {
    const [meals, setMeals] = useState([]);
     //const url="https://api.spoonacular.com/recipes/random?number=10&apiKey=c85ed085c85e4c7fa6314c7d9f271307"
  
    useEffect(() => {
      fetch()
        .then((r) => r.json())
        .then((data) => setMeals(data.recipes))
        .catch((error) => console.log(error, "error"));
    }, []);

    
    
    return (
      <div className="home-page">
        <h2>Home</h2>
        <h3>What's New</h3>        
        <div>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;
  
  
  
  
  