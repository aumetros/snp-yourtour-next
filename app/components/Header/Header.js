"use client";
import "./Header.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import React from "react";

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
    <header className={`header ${isScrollMenuShow && "header_scrolled"}`}>
      <div
        className={`header__navbar ${
          isScrollMenuShow && "header__navbar_scrolled"
        }`}
      >
        <div className="header__navbar-container">
          <div
            className={`header__logo ${
              isScrollMenuShow && "header__logo_scrolled"
            }`}
          ></div>
          <NavigationMenu isScroll={isScrollMenuShow} />
          <a
            href="tel:+79999999999"
            className={`header__phone-number ${
              isScrollMenuShow && "header__phone-number_scrolled"
            } text`}
          >
            +7 999 999 99 99
          </a>
        </div>
      </div>
      <h1 className="header__title">Идеальные путешествия существуют</h1>
      <p className="header__subtitle text">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <button className="header__find-button" type="button">
        Найти тур
      </button>
    </header>
  );
}
