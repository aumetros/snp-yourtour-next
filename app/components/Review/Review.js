import "./Review.css";
import { reviews } from "../../utils/useData";
import ReviewCard from "../ReviewCard/ReviewCard";

function Review() {
  return (
    <section id="review" className="review">
      <h2 className="review__title text-section-title">
        Отзывы&nbsp;наших путешественников
      </h2>
      <p className="review__subtitle text">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <div className="review__cards">
        {reviews.map((review, index) => {
          return <ReviewCard key={index} review={review} />;
        })}
      </div>
    </section>
  );
}

export default Review;
