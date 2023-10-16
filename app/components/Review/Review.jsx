import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { reviews } from "@/utils/useData";
import styles from "./Review.module.scss";

export default function Review() {
  return (
    <Section className={styles.root} id="review">
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
    </Section>
  );
}
