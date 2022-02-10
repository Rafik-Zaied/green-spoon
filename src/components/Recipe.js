import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/recipe.module.css";

export default function Recipe(props) {
  //some recipes doesn't have the image, we check if the value exists and we render the image or a placeholder text
  const displayImage = props.image ? (
    <img className={styles.recipe_img} src={props.image} alt="recipe-picture" />
  ) : (
    <h2 className={styles.image_error}>Image not available :(</h2>
  );
  return (
    <div className={styles.recipe_container}>
      {displayImage}
      <h3 className={styles.recipe_title}>{props.title}</h3>
      {/*we pass the recipe id to the recipePage/ so we can dinamically fetch the data and display the data we need for that specific recipe*/}
      <Link className={styles.recipe_link} to={`/recipePage/${props.id}`}>
        <p>Go to the recipe!</p>
      </Link>
    </div>
  );
}
