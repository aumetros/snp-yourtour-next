import styles from "./Container.module.scss";

export default function Container({ children, wide, mail }) {
  return (
    <div
      className={`${styles.root} ${wide ? styles.wide : ""} ${mail ? styles.mail : ""}`}
    >
      {children}
    </div>
  );
}
