import React,{useState} from "react";
import MealCard from "./MealCard";

function Search () {
  const [search,setSearch] = useState("");
  const [meal, setMeal] = useState([]);

  function handleSubmit (e) {
    e.preventDefault()
    searchRecipe()
  }

  function searchRecipe() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c85ed085c85e4c7fa6314c7d9f271307&query=${search}&number=10`)
      .then((r) => r.json())
      .then((data) => setMeal(data.results))
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
        <button>
          <img
            src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
            alt=""
          />
        </button>
      </form>
      <h3>{search}</h3>
      <div>
        {meal.map((recipe) => (
          <MealCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Search