import Link from "next/link";
import React from "react";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["nav-container"]}>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
    </nav>
  );
};

export default Navbar;
