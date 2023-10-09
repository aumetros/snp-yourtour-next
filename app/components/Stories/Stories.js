import Story from "../Story/Story";
import { stories } from "../../utils/useData";
import styles from "./Stories.module.scss"

export default function Stories() {
  return (
    <section id="stories" className={styles.root}>
      <h2 className={styles.title}>Истории путешествий</h2>
      <p className={styles.subtitle}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <div className={styles.cards}>
        {stories.map((story, i) => {
          return <Story key={i} story={story} />;
        })}
      </div>
    </section>
  );
}
