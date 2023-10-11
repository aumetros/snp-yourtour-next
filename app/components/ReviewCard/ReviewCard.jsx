import Image from "next/image";
import styles from "./ReviewCard.module.scss";

export default function ReviewCard({ review }) {
  return (
    <div className={styles.root}>
      <div>
        {review.text.map((p, i) => {
          return (
            <p key={i} className={styles.text}>
              {p}
            </p>
          );
        })}
      </div>
      <div className={styles.profile}>
        <h3 className={styles["profile-name"]}>{review.name}</h3>
        <span className={styles["profile-tour"]}>{review.tour}</span>
        <Image
          className={styles["profile-foto"]}
          src={review.foto}
          alt="profile foto"
        />
      </div>
    </div>
  );
}
