import React from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Recipes from "../components/Recipes";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Recipes />
    </div>
  );
}
