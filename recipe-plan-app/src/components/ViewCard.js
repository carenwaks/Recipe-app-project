import React from "react";

function ViewCard({ meal, onClose }) {
  return (
    <div className="view-card">
      <button onClick={onClose}>Close</button>
      <h2>{meal.title}</h2>
      <img src={meal.image} alt={meal.title} />
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
  );
}

export default ViewCard;