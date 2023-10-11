import mail from "../../images/mail-img.png";
import Image from "next/image";
import styles from "./Mail.module.scss"

export default function Mail() {
  return (
<section className={styles.root}>
        <Image className={styles.foto} src={mail} alt="cta foto" />
        <div className={styles.text}>
          <h3 className={styles.title}>Пора в путешествие вместе с нами!</h3>
          <div>
            <span className={styles.subtitle}>Напиши на почту и узнай подробности на <a href="mailto:yourtour@gmail.com"
                className={styles.link}>yourtour@gmail.com</a></span>
          </div>
        </div>
      </section>
  )
}