import TourTypes from "../TourTypes/TourTypes";
import TourCard from "../TourCard/TourCard";
import { arrCards } from "../../utils/useData";
import styles from "./ChooseTour.module.scss"


export default function ChooseTour() {
  return (
    <section id="choose-tour" className={styles.root}>
      <h2 className={`${styles.title} text-section-title`}>Выбери свой тур</h2>
      <TourTypes />
      <ul className={styles.cards}>
        {arrCards.map((card, index) => {
          return <TourCard key={index} card={card} />;
        })}
      </ul>
    </section>
  );
}