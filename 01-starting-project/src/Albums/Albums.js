import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import AddToCart from "./AddToCart";
import classes from "./Albums.module.css";

const Albums = (props) => {
const cartCtx = useContext(CartContext);
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
            imageURL: props.imageUrl,
        });
    }

  return (
    <div className={classes['music-content']}>
      <div className={classes["music-content-div"]}>
        <h3 className={classes["music-content-h3"]}>
          {props.title}
        </h3>
        <div className={classes["image-container"]}>
          <img
            className={classes["prod-images"]}
            src={props.imageUrl}
            alt="album images"
          />
        </div>
        <div className={classes["music-content-prod-details"]}>
          <span>{props.price}</span>
         <AddToCart onAddToCart={addToCartHandler}/>
        </div>
      </div>
    </div>
  );
};

export default Albums;
