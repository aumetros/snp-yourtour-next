import "./NavigationMenu.css";

export default function NavigationMenu({ isScroll }) {
  return (
    <ul className="navigation-menu">
      <li>
        <a href="#choose-tour" className={`navigation-menu__item ${isScroll && "navigation-menu__item_scrolled"}`}>
          Туры
        </a>
      </li>
      <li>
        <a href="#collect-tour" className={`navigation-menu__item ${isScroll && "navigation-menu__item_scrolled"}`}>
          Создать тур
        </a>
      </li>
      <li>
        <a href="#review" className={`navigation-menu__item ${isScroll && "navigation-menu__item_scrolled"}`}>
          Отзывы
        </a>
      </li>
      <li>
        <a href="#stories" className={`navigation-menu__item ${isScroll && "navigation-menu__item_scrolled"}`}>
          Истории
        </a>
      </li>
    </ul>
  );
}
