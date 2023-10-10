import Socials from "../Socials/Socials";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>Наши социальные сети</h2>
          <Socials />
        </div>
      </Container>
    </footer>
  );
}
