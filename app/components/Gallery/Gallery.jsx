import { arrGallery } from "../../utils/useData";
import Image from "next/image";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        Фотографии путешествий
      </h2>
      <p className={styles.subtitle}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <div className="tours-gallery">
        <div className={`${styles.container} ${styles.container_row_first}`}>
          {arrGallery.slice(0, 4).map((img, i) => {
            return (
              <Image
                key={i}
                src={img}
                alt="gallery foto"
                className={`${styles.item} ${styles.item_row_first}`}
              />
            );
          })}
        </div>
        <div className={`${styles.container} ${styles.container_row_second}`}>
          {arrGallery.slice(4, 9).map((img, i) => {
            return (
              <Image
                key={i}
                src={img}
                alt="gallery foto"
                className={`${styles.item} ${styles.item_row_second}`}
              />
            );
          })}
        </div>
        <div className={`${styles.container} ${styles.container_row_third}`}>
          {arrGallery.slice(9).map((img, i) => {
            return (
              <Image
                key={i}
                src={img}
                alt="gallery foto"
                className={`${styles.item} ${styles.item_row_third}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
