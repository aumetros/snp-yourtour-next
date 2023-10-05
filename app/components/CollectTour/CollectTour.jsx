import ToursForm from "../ToursForm/ToursForm";
import styles from "./CollectTour.module.scss";

export default function CollectTour() {
  return (
    <section id="collect-tour" className={styles.root}>
      <h2 className={styles.title}>
        Собери свой тур
      </h2>
      <p className={styles.subtitle}>
        Идейные соображения высшего порядка, а&nbsp;также рамки и место обучения
        кадров
      </p>
      <ToursForm />
    </section>
  );
}
