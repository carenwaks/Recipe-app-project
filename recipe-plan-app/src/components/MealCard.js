import React from "react";

function MealCard({ meal }) {
    // console.log(meal)
    if (!meal) {
        return null;
    }
    
    return (
      <div>
        <h2>{meal.title}</h2>
        <img src={meal.image} alt={meal.title} />
      </div>
    )
}
export default MealCard