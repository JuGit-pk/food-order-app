import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addItemtoCartHandler = (item) => {};
  const removeItemtoCartHandler = (id) => {};

  const CartContextObject = {
    items: [],
    totalAmount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };

  return (
    <CartContext.Provider value={CartContextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
