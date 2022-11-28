import React, { useRef } from "react";
import classes from "./AddToCart.module.css";

const AddToCart = (props) => {
    const inputRef = useRef();
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        props.onAddToCart(enteredAmountNumber);
    }
  return (
    <form className={classes.form} ref={inputRef} onSubmit={submitHandler}>
      <button className={classes["shop-item-button"]}>ADD TO CART</button>
    </form>
  );
};

export default AddToCart;
