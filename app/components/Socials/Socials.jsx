import styles from "./Socials.module.scss"

export default function Socials() {
  return (
    <ul className={styles.root}>
      <li>
        <div className={`${styles.icon} ${styles.inst}`}></div>
        <a
          href="https://instagram.com/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </li>
      <li>
        <div className={`${styles.icon} ${styles.fb}`}></div>
        <a
          href="https://facebook.com/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
      </li>
      <li>
        <div className={`${styles.icon} ${styles.vk}`}></div>
        <a
          href="https://vk.ru/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          vkontakte
        </a>
      </li>
    </ul>
  );
}