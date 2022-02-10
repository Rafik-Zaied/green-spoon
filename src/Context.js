import React from "react";
import axios from "axios";

const Context = React.createContext();

//we create a context component that holds data that need to be passed to some components
function ContextProvider(props) {
  //holds the array with th recipes to display
  const [recipesArray, setRecipes] = React.useState([]);
  //holds values that we'll use to determine the results of the fetch call, and conditionally render the output
  const [inputError, setInputError] = React.useState(false);
  const [networkError, setNetworkError] = React.useState(false);

  //we fetch some random images to display once the page renders
  React.useEffect(() => {
    const randomUrl =
      "https://api.spoonacular.com/recipes/random?number=12&tags=vegetarian&apiKey=29f2ed933885484ba0ff335edd16201b";
    axios
      .get(randomUrl)
      .then((response) => {
        if (response.data.recipes.length > 0) {
          setRecipes(response.data.recipes);
          setInputError(false);
          setNetworkError(false);
        } else setInputError(true);
      })
      .catch((error) => setNetworkError(true));
  }, []);
  return (
    <Context.Provider value={{ recipesArray, setRecipes, inputError, setInputError, networkError, setNetworkError }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
