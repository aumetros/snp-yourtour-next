import Image from "next/image";
import styles from "./Story.module.scss";

export default function Story({ story }) {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.description}>{story.text}</p>
        <ul className={styles.list}>
          {story.points.map((point, i) => {
            return <li key={i}>{point}</li>;
          })}
        </ul>
      </div>
      <div className={styles.footer}>
        <button className={styles["forward-button"]}>
          <span>Подробнее</span>
          <span className={styles["arrow-button"]}></span>
        </button>
        <ul className={styles.links}>
          {story.links.map((link, i) => {
            return (
              <li key={i}>
                <a
                  href={link[1]}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link[0]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.overlay}></div>
      <Image
        className={styles.image}
        src={story.foto}
        alt="stories card foto"
        width={1170}
        height={567}
      />
    </div>
  );
}
