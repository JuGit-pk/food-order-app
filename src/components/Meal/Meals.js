import React from "react";
import MealsSummary from "./MealsSummary/MealsSummary";
import MealsAvailable from "./MealsAvailable/MealsAvailable";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <MealsAvailable />
    </>
  );
};

export default Meals;
