import React from "react";
import AvailableAlbums from "../Albums/AvailableAlbums";
import AvailableMerch from "../Albums/AvailableMerch";
import Footer from "../layout/Footer";
import HeaderCartButton from "../layout/HeaderCartButton";
import MainHeader from "../layout/MainHeader";
import classes from "./Store.module.css";

const Store = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <MainHeader />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <section id="music" className={classes.container}>
        <h2 className={classes["section-h2"]}>MUSIC</h2>
        <AvailableAlbums />
      </section>
      <section>
        <h2 className={classes["section-h2"]}>MERCH</h2>
        <AvailableMerch />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Store;
