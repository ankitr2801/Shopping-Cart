import React from "react";
import styles from "../styles/Total.module.css";
// import { itemContext } from "../itemContext";
// import { useContext } from "react";
import { useValue } from "../itemContext";

function Navbar() {
  const {total , item , handleReset , toggle} = useValue()
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles.reset} onClick={handleReset} >Reset</button>
      <button className={styles.reset} onClick={toggle}>Cart</button>
    </div>
  );
}

export default Navbar;
