import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import "./css/index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipePage/:recipeId" element={<RecipePage />} />
    </Routes>
  );
}
