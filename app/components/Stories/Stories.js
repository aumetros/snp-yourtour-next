import "./Stories.css";
import Story from "../Story/Story";
import { stories } from "../../utils/useData";

export default function Stories() {
  return (
    <section id="stories" className="stories">
      <h2 className="stories__title text-section-title">Истории путешествий</h2>
      <p className="stories__subtitle text">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <div className="stories__cards">
        {stories.map((story, i) => {
          return <Story key={i} story={story} />;
        })}
      </div>
    </section>
  );
}
