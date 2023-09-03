import React from "react";

import classes from "./Spinner.module.css";
import pizzaImg from "../../assets/pizza-part.png";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <img
        src={pizzaImg}
        className={`${classes["pizza-part"]} ${classes["pizza-part-1"]}`}
        alt="pizza spinner"
      />
      <img
        src={pizzaImg}
        className={`${classes["pizza-part"]} ${classes["pizza-part-2"]}`}
        alt="pizza spinner"
      />
      <img
        src={pizzaImg}
        className={`${classes["pizza-part"]} ${classes["pizza-part-3"]}`}
        alt="pizza spinner"
      />
      <img
        src={pizzaImg}
        className={`${classes["pizza-part"]} ${classes["pizza-part-4"]}`}
        alt="pizza spinner"
      />
    </div>
  );
};

export default Spinner;
