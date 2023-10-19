import Section from "components/Section/Section";
import Container from "components/Container/Container";
import Image from "next/image";
import styles from "./Mail.module.scss";

export default function Mail() {
  return (
    <Section className={styles.root}>
      <Container mail={true}>
        <Image
          className={styles.foto}
          src="/images/mail-img.png"
          alt="cta foto"
          width={370}
          height={370}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>Пора в путешествие вместе с нами!</h3>
          <div>
            <span className={styles.subtitle}>
              Напиши на почту и узнай подробности на{" "}
              <a href="mailto:yourtour@gmail.com" className={styles.link}>
                yourtour@gmail.com
              </a>
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
