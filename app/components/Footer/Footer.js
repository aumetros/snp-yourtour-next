import "./Footer.css";
import Socials from "../Socials/Socials";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title text">Наши социальные сети</h2>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
