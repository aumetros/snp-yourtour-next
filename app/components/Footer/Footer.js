import "./Footer.css";
import Socials from "../Socials/Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title text">Наши социальные сети</h2>
        <Socials />
      </div>
    </footer>
  );
}