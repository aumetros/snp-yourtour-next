import Section from "@/components/Section/Section";
import styles from "./FindTour.module.scss";

export default function FindTour() {
  return (
    <Section className={styles.root}>
      <h1 className={styles.title}>Идеальные путешествия существуют</h1>
      <p className={styles.subtitle}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <button className={styles["find-button"]} type="button">
        Найти тур
      </button>
    </Section>
  );
}
