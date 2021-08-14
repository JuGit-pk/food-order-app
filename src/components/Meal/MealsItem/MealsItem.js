import React, { useContext } from "react";
import MealsItemForm from "../MealsItemForm/MealsItemForm";
import "./MealItem.css";
import CartContext from "../../../store/cart-context";

const MealsItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      name,
      amount,
      price,
      id,
    });
  };
  const dollars = `$${price}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{dollars}</p>
      </div>
      <div>
        <MealsItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
