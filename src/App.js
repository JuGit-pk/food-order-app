import React, { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meal/Meals";

function App() {
  const [cartIsVissible, setcartIsVissible] = useState(false);
  const showCartHandler = () => {
    setcartIsVissible(true);
  };
  const hideCartHandler = () => {
    setcartIsVissible(false);
  };

  return (
    <Fragment>
      {cartIsVissible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
