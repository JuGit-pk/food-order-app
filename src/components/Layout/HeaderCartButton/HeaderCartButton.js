import React from "react";
import CartIcon from "../../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className="badge">3</span>
    </div>
  );
};

export default HeaderCartButton;
