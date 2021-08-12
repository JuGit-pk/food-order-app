import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItemsForBadge = cartCtx.items.reduce((current, item) => {
    return current + item.totalAmount;
  }, 0);
  return (
    <div className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className="badge">{numberOfItemsForBadge}</span>
    </div>
  );
};

export default HeaderCartButton;
