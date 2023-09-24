import "./ReviewCard.css";
import Image from "next/image";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-card__text-container">
        {review.text.map((p, i) => {
          return <p key={i} className="review-card__text text-bold">{p}</p>;
        })}
      </div>
      <div className="review-card__profile">
        <h3 className="review-card__profile-name">{review.name}</h3>
        <span className="review-card__profile-tour text-small">
          {review.tour}
        </span>
        <Image
          className="review-card__profile-foto"
          src={review.foto}
          alt="profile foto"
        />
      </div>
    </div>
  );
}

export default ReviewCard;
