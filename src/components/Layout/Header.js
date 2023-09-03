import React from "react";
import classes from "./Header.module.css";
import img from "../../assets/food-background.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="Delicious burgers!" />
      </div>
    </>
  );
};

export default React.memo(Header);
