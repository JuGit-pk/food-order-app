import React from "react";
import MealsItemForm from "../MealsItemForm/MealsItemForm";
import "./MealItem.css";

const MealsItem = ({ name, description, price }) => {
  const dollars = `$${price}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{dollars}</p>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
