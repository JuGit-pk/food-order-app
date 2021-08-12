import React from "react";
import "./Header.css";
import mealImg from "../../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealImg} alt="a tabel is full of meals" />
      </div>
    </>
  );
};

export default Header;
