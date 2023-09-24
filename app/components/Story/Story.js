import "./Story.css";

function Story({ story }) {
  return (
<div className="stories-card">
        <div className="stories-card__text">
          <h3 className="stories-card__title text-card-title">{story.title}</h3>
          <p className="stories-card__description text">
            {story.text}
          </p>
          <ul className="stories-card__list text">
            {story.points.map((point, i) => {
              return <li key={i}>{point}</li>
            })}
          </ul>
        </div>
        <div className="stories-card__footer">
          <button className="stories-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="stories-card__arrow-button"></span>
          </button>
          <ul className="stories-card__links">
            {story.links.map((link, i) => {
              return (
                <li key={i}>
              <a href={link[1]} className="stories-card__link" target="_blank" rel="noopener noreferrer">{link[0]}</a>
            </li>
              )
            })}
          </ul>
        </div>
        <div className="stories-card__overlay"></div>
        <img className="stories-card__image" src={story.foto} alt="stories card foto" />
      </div>
     
  )
}

export default Story;