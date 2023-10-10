import styles from "./TourTypes.module.scss";

export default function TourTypes() {
  return (
    <ul className={styles.root}>
      <li>
        <button className={`${styles.type} ${styles.active}`}>
          Популярные
        </button>
      </li>
      <li>
        <button className={styles.type}>Авторские</button>
      </li>
      <li>
        <button className={styles.type}>Походы</button>
      </li>
      <li>
        <button className={styles.type}>Сплавы</button>
      </li>
      <li>
        <button className={styles.type}>Велопрогулки</button>
      </li>
    </ul>
  );
}