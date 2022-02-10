import React from "react";
import { Context } from "../Context";
import Recipe from "./Recipe";
import styles from "../css/recipes.module.css";

export default function Recipes() {
  //we receive the data we need from Context, recipesArray holds the array of recipes to display, if it's empty because there's no match
  //with the user input or for network issues we know it thanks to the value inside inputError and networkError.
  //if there's an error we return the corresponding message, if we have the data we need, we map trough it and create for every recipe in the array
  //a recipe component wich displays it's image title and a link that takes us to the recipe page.
  const { recipesArray, inputError, networkError } = React.useContext(Context);
  let recipeComponents;
  let errorMessage;
  if (inputError) {
    errorMessage = <h2>Recipes not found :(</h2>;
  } else if (networkError) {
    errorMessage = <h2>Network Error, we can't retrieve the informations at the moment :(</h2>;
  } else {
    recipeComponents = recipesArray.map((recipe) => (
      <Recipe key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} />
    ));
  }
  return (
    <main className={styles.recipes_container}>
      {inputError || networkError ? errorMessage : <div className={styles.recipes_display}>{recipeComponents}</div>}
    </main>
  );
}
