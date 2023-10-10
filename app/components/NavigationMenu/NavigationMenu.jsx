import styles from "./NavigationMenu.module.scss";

export default function NavigationMenu({ isScroll }) {
  return (
    <ul className={styles.root}>
      <li>
        <a
          href="#choose-tour"
          className={`${styles.item} ${isScroll && styles.scrolled}`}
        >
          Туры
        </a>
      </li>
      <li>
        <a
          href="#collect-tour"
          className={`${styles.item} ${isScroll && styles.scrolled}`}
        >
          Создать тур
        </a>
      </li>
      <li>
        <a
          href="#review"
          className={`${styles.item} ${isScroll && styles.scrolled}`}
        >
          Отзывы
        </a>
      </li>
      <li>
        <a
          href="#stories"
          className={`${styles.item} ${isScroll && styles.scrolled}`}
        >
          Истории
        </a>
      </li>
    </ul>
  );
}
