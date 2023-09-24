import "./Gallery.css";
import { arrGallery } from "../../utils/useData";

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery__title text-section-title">
        Фотографии путешествий
      </h2>
      <p className="gallery__subtitle text">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <div className="tours-gallery">
        <div className="tours-gallery__container tours-gallery__container_row_first">
          {arrGallery.slice(0, 4).map((img, i) => {
            return (
              <img
                key={i}
                src={img}
                alt="gallery foto"
                className="tours-gallery__item tours-gallery__item_row_first"
              />
            );
          })}
        </div>
        <div className="tours-gallery__container tours-gallery__container_row_second">
          {arrGallery.slice(4, 9).map((img, i) => {
            return (
              <img
                key={i}
                src={img}
                alt="gallery foto"
                className="tours-gallery__item tours-gallery__item_row_second"
              />
            );
          })}
        </div>
        <div className="tours-gallery__container tours-gallery__container_row_third">
          {arrGallery.slice(9).map((img, i) => {
            return (
              <img
                key={i}
                src={img}
                alt="gallery foto"
                className="tours-gallery__item tours-gallery__item_row_third"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
