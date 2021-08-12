import React from "react";
import Modal from "../UI/Modal/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
        {
          id: "m2",
          name: "Schnitzel",
          description: "A german specialty!",
          price: 16.5,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total</span>
        <span>574.19</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Cancel
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
