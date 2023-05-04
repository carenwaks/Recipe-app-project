import React, { useState } from "react";
import ViewCard from "./ViewCard";

function MealCard({ meal }) {
  const [selectedMeal, setSelectedMeal] = useState(null);

  function handleCardDisplay() {
    setSelectedMeal(meal);
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
          <button onClick={handleCardDisplay}>Try this Out</button>
        </div>
      </div>
      {selectedMeal && (
        <ViewCard
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
}

export default MealCard;