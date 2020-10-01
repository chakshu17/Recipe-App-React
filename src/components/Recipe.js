import React from "react";

function Recipe({ title, calories, image, ingredients }) {
	return (
		<div>
			<h1 >{title}</h1>
			<ul>
				{ingredients.map((ingredient) => 
					(<li>{ingredient.text}</li>)
				)}
			</ul>
			<p>{calories} </p>
			<img src={image}></img>
		</div>
	);
}

export default Recipe;
