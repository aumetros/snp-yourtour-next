import Socials from "../Socials/Socials";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши социальные сети</h2>
        <Socials />
      </div>
    </footer>
  );
}