import "./CollectTour.css";
import ToursForm from "../ToursForm/ToursForm";

function CollectTour() {
  return (
    <section id="collect-tour" className="collect-tour">
      <h2 className="collect-tour__title text-section-title">
        Собери свой тур
      </h2>
      <p className="collect-tour__subtitle text">
        Идейные соображения высшего порядка, а&nbsp;также рамки и место обучения
        кадров
      </p>
      <ToursForm />
    </section>
  );
}

export default CollectTour;
