import Section from "components/Section/Section";
import Container from "components/Container/Container";
import Story from "components/Story/Story";
import { stories } from "utils/useData";
import styles from "./Stories.module.scss";

export default function Stories() {
  return (
    <Section className="stories" id="stories">
      <Container>
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
      </Container>
    </Section>
  );
}
