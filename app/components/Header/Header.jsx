"use client";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isScrollMenuShow, setIsScrollMenuShow] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  function handleScrollWindow() {
    if (typeof window !== undefined) {
      setScrollPosition(window.scrollY);
    }
  }

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScrollWindow);
    }
  }, []);

  React.useEffect(() => {
    if (scrollPosition > 450) {
      setIsScrollMenuShow(true);
    } else {
      setIsScrollMenuShow(false);
    }
  }, [scrollPosition]);

  return (
    <header className={`${styles.root} ${isScrollMenuShow && styles.scrolled}`}>
      <div
        className={styles.navbar}
      >
        <div className={styles.navbarContainer}>
          <div
            className={`${styles.logo} ${isScrollMenuShow && styles.scrolled}`}
          ></div>
          <NavigationMenu isScroll={isScrollMenuShow} />
          <a
            href="tel:+79999999999"
            className={`${styles["phone-number"]} ${
              isScrollMenuShow && styles.scrolled
            }`}
          >
            +7 999 999 99 99
          </a>
        </div>
      </div>
    </header>
  );
}
