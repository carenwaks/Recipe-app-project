import React from 'react';
import { useParams } from 'react-router-dom';


const MealDisplay = ({ recipes }) => {
  const { id } = useParams();
  

  if (!recipes) {
    return <div>Recipe not found</div>;
  }
  
  
  return (
    <div className="recipe-details">
      <img src={recipes.image} alt={recipes.title} key={id}/>
      <h2>{recipes.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: recipes.summary }}></p>
      <h3>Instructions</h3>
      <p>{recipes.instructions}</p>
    </div>
  );
};

export default MealDisplay;
