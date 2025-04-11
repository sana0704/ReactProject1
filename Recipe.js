import React, { useState } from "react";
import "./css/style2.css";

export const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  const handleInput = (e) => {
    setRecipe(e.target.value);
  };

  const addRecipe = () => {
    if (recipe.trim()) {
      setRecipes([...recipes, recipe]);
      setRecipe("");
    }
  };

  const deleteRecipe = (index) => {
    setRecipes((prevRecipes) => prevRecipes.filter((val, i) =>
         i !== index));
  };

  return (
    <>
      <h2><center>Welcome To Kitchen-Queen!</center></h2>

      <div className="div1">
        <label><center>Type Your Recipe</center></label>
        <input 
          type="text" 
          name="add" 
          value={recipe} 
          onChange={handleInput} 
        />
      </div>

      <div className="btn-grp">
        <button type="button" onClick={addRecipe}>Add Recipe</button>
        <button type="button" onClick={() => setShowRecipes(!showRecipes)}>
          {showRecipes ? "Hide Recipes" : "View Recipes"}
        </button>
      </div>

      {showRecipes && (
        <>
          <h3><center>Recipe List</center></h3>
          <ul>
            {recipes.map((rec, index) => (
              <li key={index}>
                {rec}
                <button onClick={() => deleteRecipe(index)}>Delete</button>
              </li>))}</ul></>)}</>);};

