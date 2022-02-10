import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        <h3>Green Spoon</h3>
      </Link>
    </header>
  );
}
