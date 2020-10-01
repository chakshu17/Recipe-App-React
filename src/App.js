import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
	const APP_ID = "224efa3a";
	const APP_KEY = "fb69ef518fc400afede708bc45c9545b";

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	return (
		<div className="App">
			<h1>Hello React </h1>
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button
					// onClick={() => setCounter(counter + 1)}
					className="search-buton"
					type="submit"
				>
					Search
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipe />
			))}
		</div>
	);
}

export default App;
