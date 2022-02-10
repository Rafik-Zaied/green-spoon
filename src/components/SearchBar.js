import React from "react";
import axios from "axios";
import { Context } from "../Context";
import styles from "../css/searchbar.module.css";

export default function SearchBar() {
  const { setRecipes, setInputError, setNetworkError } = React.useContext(Context);
  const [userInput, setUserInput] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;
    setUserInput(value);
  }

  //on submit we fetch the data using the user input, the data we need it's inside response.data.results, it's an array that contains
  //objects that holds the recipes data if there's no recipes that matches the user input the array will be empty, in that case we set
  //inputError to true, a state saved in context that we'll use to conditionally render our recipes page, samething for networkError
  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&diet=vegetarian&number=18&apiKey=29f2ed933885484ba0ff335edd16201b`;
    axios
      .get(url)
      .then((response) => {
        if (response.data.results.length > 0) {
          setRecipes(response.data.results);
          setInputError(false);
          setNetworkError(false);
        } else setInputError(true);
      })
      .catch((error) => setNetworkError(true));
  }

  return (
    <section className={styles.searchbar_section}>
      <h1 className={styles.searchbar_title}>Green Spoon</h1>
      <h2 className={styles.searchbar_subtitle}>Home of thousands of vegetarian recipes</h2>
      <h3 className={styles.searchbar_paragraph}>
        Type what you're looking for in the searchbar, or be inspired by some dishes below
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className={styles.user_input}
          type="text"
          name="userInput"
          value={userInput}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
