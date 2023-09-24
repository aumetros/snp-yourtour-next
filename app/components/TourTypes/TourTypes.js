import "./TourTypes.css";

function TourTypes() {
  return (
    <ul className="tours-types">
      <li>
        <button className="tours-types__type text-bold tours-types__type_active">
          Популярные
        </button>
      </li>
      <li>
        <button className="tours-types__type text-bold">Авторские</button>
      </li>
      <li>
        <button className="tours-types__type text-bold">Походы</button>
      </li>
      <li>
        <button className="tours-types__type text-bold">Сплавы</button>
      </li>
      <li>
        <button className="tours-types__type text-bold">Велопрогулки</button>
      </li>
    </ul>
  );
}

export default TourTypes;
