import React,{useState} from "react";

function Search () {
  const [search,setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  

  function handleSubmit (e) {
    e.preventDefault()
    searchRecipe()
    setSearch("")
  }

  function searchRecipe() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c85ed085c85e4c7fa6314c7d9f271307&query=${search}&number=10`)
      .then((r) => r.json())
      .then((data) => setMeals(data.results))
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
      <br />
      <div>
          {meals.map((meal) => (
            <div className="recipe-card">      
              <div className="card-content">
                <img src={meal.image} alt={meal.title} />
                <div className="meal-info">
                  <h2>{meal.title}</h2>
                  <button >Try this</button>
                </div>
              </div>            
            </div>
          ))}
        </div>
    </div>
  );
}

export default Search