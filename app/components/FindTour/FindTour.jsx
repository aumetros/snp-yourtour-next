import Section from "components/Section/Section";
import Container from "components/Container/Container";
import styles from "./FindTour.module.scss";

export default function FindTour() {
  return (
    <Section className={styles.root}>
      <Container>
        <h1 className={styles.title}>Идеальные путешествия существуют</h1>
        <p className={styles.subtitle}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <button className={styles["find-button"]} type="button">
          Найти тур
        </button>
      </Container>
    </Section>
  );
}
