import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  //FOR BUMING ANIMATION
  const [bumpingBtn, setBumpingBtn] = useState(false);
  const cartCtx = useContext(CartContext);
  const buttonClass = `button ${bumpingBtn && "bump"}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBumpingBtn(true);

    const timer = setTimeout(() => {
      setBumpingBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  const numberOfItemsForBadge = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <div className={buttonClass} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className="badge">{numberOfItemsForBadge}</span>
    </div>
  );
};

export default HeaderCartButton;
