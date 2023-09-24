import "./Mail.css";
import mail from "../../images/mail-img.png";

function Mail() {
  return (
<section className="mail">
        <img className="mail__foto" src={mail} alt="cta foto" />
        <div className="mail__text">
          <h3 className="mail__title">Пора в путешествие вместе с нами!</h3>
          <div>
            <span className="mail__subtitle text">Напиши на почту и узнай подробности на <a href="mailto:yourtour@gmail.com"
                className="mail__link">yourtour@gmail.com</a></span>
          </div>
        </div>
      </section>
  )
}

export default Mail;