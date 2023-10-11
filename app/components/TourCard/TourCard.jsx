import Image from "next/image";
import styles from "./TourCard.module.scss";

export default function TourCard({ card }) {
  return (
    <li className={styles.root}>
      <Image className={styles.foto} src={card} alt="tour foto" />
      <div className={styles["text-сontainer"]}>
        <h3 className={styles.title}>Путешествие в&nbsp;горы</h3>
        <p className={styles.subtitle}>от 80 000 руб</p>
      </div>
      <button className={styles["forward-button"]}>
        <span>Подробнее</span>
        <span className={styles["button-arrow"]}></span>
      </button>
      <div className={styles.overlay}></div>
    </li>
  );
}
