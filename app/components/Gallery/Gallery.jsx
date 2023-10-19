import Section from "components/Section/Section";
import Container from "components/Container/Container";
import Image from "next/image";
import { arrGallery } from "utils/useData";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <Section className={styles.root}>
      <Container wide={true}>
        <h2 className={styles.title}>Фотографии путешествий</h2>
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
                  width={442.5}
                  height={301}
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
                  width={348}
                  height={301}
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
                  width={442.5}
                  height={301}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
