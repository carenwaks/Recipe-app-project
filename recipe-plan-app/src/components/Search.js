import React,{useState} from "react";
import MealCard from "./MealCard";

function Search () {
  const [search,setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  function handleSubmit (e) {
    e.preventDefault()
    searchRecipe()
  }

  function searchRecipe() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c85ed085c85e4c7fa6314c7d9f271307&query=${search}&number=10`)
      .then((r) => r.json())
      .then((data) => setMeals(data.results))
  }

  function handleCardDisplay ({meal}) {
    return (
      <div>
      <h3>Instructions</h3>
      <p>{meal.instructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {meal.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Description</h3>
      <p>{meal.description}</p>
        </div>
    )
  }

  return (
    <div className="search-page">
      <h3>Search</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Search for recipe by name eg pasta"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
         />
      </form>
      <h3>{search}</h3>
      <div>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
    </div>
  );
}

export default Search