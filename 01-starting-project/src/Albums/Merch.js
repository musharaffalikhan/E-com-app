import React from "react";
import AddToCart from "./AddToCart";
import classes from "./Merch.module.css";

const Merch = (props) => {
  return (
    <div className={classes["music-content"]}>
      <div className={classes["music-content-div"]}>
        <h3 className={classes["music-content-h3"]}>{props.title}</h3>
        <div className={classes["image-container"]}>
          <img
            className={classes["prod-images"]}
            src={props.imageUrl}
            alt="album images"
          />
        </div>
        <div className={classes["music-content-prod-details"]}>
          <span>{props.price}</span>
          <AddToCart/>
        </div>
      </div>
    </div>
  );
};

export default Merch;
