import React from "react";

function ViewCard ({meal}) {
    return <div>
        <h3>{meal.title} display</h3>
        <img src={meal.image} alt={meal.title}/>
        <p>{meal.instructions}</p>
        <div>
            <ul>
            {meal.extendedIngredients.map((item) => {
                return <li key={item.id}>{item.original}</li>
            })}
            </ul>
        </div>
    </div>
}
export default ViewCard;