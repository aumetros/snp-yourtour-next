import "./ChooseTour.css";
import TourTypes from "../TourTypes/TourTypes";
import TourCard from "../TourCard/TourCard";
import { arrCards } from "../../utils/useData";


export default function ChooseTour() {
  return (
    <section id="choose-tour" className="choose-tour">
      <h2 className="choose-tour__title text-section-title">Выбери свой тур</h2>
      <TourTypes />
      <ul className="choose-tour__cards">
        {arrCards.map((card, index) => {
          return <TourCard key={index} card={card} />;
        })}
      </ul>
    </section>
  );
}