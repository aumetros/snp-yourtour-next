import { reviews } from "../../utils/useData";
import ReviewCard from "../ReviewCard/ReviewCard";
import Container from "../Container/Container";
import styles from "./Review.module.scss";

export default function Review() {
  return (
    <section id="review" className={styles.root}>
      <Container>
        <h2 className={styles.title}>Отзывы&nbsp;наших путешественников</h2>
        <p className={styles.subtitle}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className={styles.cards}>
          {reviews.map((review, index) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </div>
      </Container>
    </section>
  );
}
