import "./TourCard.css";
import Image from "next/image";

function TourCard({ card }) {
  return (
    <li className="tours-card">
    <Image
      className="tours-card__foto"
      src={card}
      alt="tour foto"
    />
    <div className="tours-card__text-container">
      <h3 className="tours-card__title text-card-title">
        Путешествие в&nbsp;горы
      </h3>
      <p className="tours-card__subtitle">от 80 000 руб</p>
    </div>
    <button className="tours-card__forward-button text-bold">
      <span>Подробнее</span>
      <span className="tours-card__button-arrow"></span>
    </button>
    <div className="tours-card__overlay"></div>
  </li>
  )
}

export default TourCard;