import React, {useState} from "react";

function MealCard({ meal }) {
  const[likes,setLikes]= useState(0) 
  function handleLike () {
    setLikes(likes + 1)
  } 

  if (!meal) {
    return null;
  }

  return (
    <div className="recipe-card">      
      <div className="card-content">
        <img src={meal.image} alt={meal.title} />
        <div className="meal-info">
          <h2>{meal.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: meal.summary }}></p>
          <button onClick={handleLike}>{likes}Like this</button>
        </div>
      </div>
      <h3>Instructions</h3>
      <p>{meal.instructions}</p>
      {/* <h3>Ingredients</h3> */}
      {/* <ul>
        {meal.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>  */}
    </div>
  );
}

export default MealCard;