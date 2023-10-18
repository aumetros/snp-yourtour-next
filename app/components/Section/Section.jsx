import styles from "./Section.module.scss";

export default function Section({ children, className, id }) {
  return (
    <section className={`${className} ${styles.root}`} id={id}>
      {children}
    </section>
  );
}
