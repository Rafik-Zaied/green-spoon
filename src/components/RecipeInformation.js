import React from "react";
import styles from "../css/recipeInformation.module.css";

export default function RecipeInformation({ recipeData }) {
  //we deconstruct the object and get what we need
  const { title, image, readyInMinutes, servings, extendedIngredients, analyzedInstructions } = recipeData;
  //creates an array that holds a list of ingridients mapping trough the extendedIngridient object
  const ingredients = extendedIngredients.map((ingridient, index) => (
    <li className={styles.recipeInformation_list_item} key={index}>
      {ingridient.original}
    </li>
  ));

  //some recipes has the analyzedInstructions object empty, we check if it hold the data we need, and if the data exists, we create
  //an array that holds the steps for the recipe
  let steps = "";
  if (analyzedInstructions[0]) {
    steps = analyzedInstructions[0].steps.map((instruction, index) => (
      <li className={styles.recipeInformation_list_item} key={index}>
        {instruction.step}
      </li>
    ));
  }

  //we check if the image exists because some recepies doesn't have it
  const displayImage = image ? (
    <img className={styles.recipeInformation_image} src={image} alt="recipe-picture" />
  ) : (
    <h2>Image not available :(</h2>
  );

  return (
    <main className={styles.recipeInformation_container}>
      <h2 className={styles.recipeInformation_title}>{title}</h2>
      <p className={styles.recipeInformation_paragraph}>
        Ready in: {readyInMinutes} minutes - Servings: {servings}
      </p>
      <div className={styles.recipeInformation_grid}>
        {displayImage}

        <section className={styles.recipeInformation_ingridients}>
          <h3>Ingredients</h3>
          <ul className={styles.recipeInformation_list}>{ingredients}</ul>
        </section>
      </div>

      {steps ? (
        <section>
          <h3>Steps</h3> <ul className={styles.recipeInformation_list}>{steps}</ul>
        </section>
      ) : (
        <h3>Steps not available</h3>
      )}
    </main>
  );
}
