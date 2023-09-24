import "./Socials.css";

function Socials() {
  return (
    <ul className="socials">
      <li>
        <div className="socials__icon socials__icon_el_inst"></div>
        <a
          href="https://instagram.com/"
          className="socials__link text"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </li>
      <li>
        <div className="socials__icon socials__icon_el_fb"></div>
        <a
          href="https://facebook.com/"
          className="socials__link text"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
      </li>
      <li>
        <div className="socials__icon socials__icon_el_vk"></div>
        <a
          href="https://vk.ru/"
          className="socials__link text"
          target="_blank"
          rel="noopener noreferrer"
        >
          vkontakte
        </a>
      </li>
    </ul>
  );
}

export default Socials;
