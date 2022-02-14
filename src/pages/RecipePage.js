import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import RecipeInformation from "../components/RecipeInformation";

export default function RecipePage() {
  //we get the id of the recipe the user clicked on, and we fetch the data, once we have the data we pass it to the recipeInformation component
  //which displays it
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = React.useState();

  React.useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=29f2ed933885484ba0ff335edd16201b`;

    axios.get(url).then((response) => setRecipeData(response.data));
  }, [recipeId]);

  return (
    <div>
      <Header />
      {recipeData && <RecipeInformation recipeData={recipeData} />}
    </div>
  );
}
