import Section from "components/Section/Section";
import Container from "components/Container/Container";
import TourTypes from "components/TourTypes/TourTypes";
import TourCard from "components/TourCard/TourCard";
import { arrCards } from "utils/useData";
import styles from "./ChooseTour.module.scss";

export default function ChooseTour() {
  return (
    <Section className={styles.root} id="choose-tour">
      <Container>
        <h2 className={styles.title}>Выбери свой тур</h2>
        <TourTypes />
        <ul className={styles.cards}>
          {arrCards.map((card, index) => {
            return <TourCard key={index} card={card} />;
          })}
        </ul>
      </Container>
    </Section>
  );
}
