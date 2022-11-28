import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const isItemExists = state.type.find(
      (product) => product.id === action.item.id
    );
    let updatedItems = state.items;
    if (!isItemExists) {
      updatedItems = state.item.concat(action.item);
    } else {
      updatedItems = state.items.map((p) => {
        if (p.id === action.item.id) {
          p.amount = action.item.amount + p.amount;
          p.price = action.item.price + p.price;
        }
        return p;
      });
    }
    if (isItemExists) {
      alert(
        "This item is already added to the cart! Product Quantity incremented!"
      );
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
