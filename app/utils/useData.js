/**Данные для ChooseTour */
import card1 from "../images/card-tour-photo-1.jpg";
import card2 from "../images/card-tour-photo-2.jpg";
import card3 from "../images/card-tour-photo-3.jpg";
import card4 from "../images/card-tour-photo-4.jpg";
import card5 from "../images/card-tour-photo-5.jpg";
import card6 from "../images/card-tour-photo-6.jpg";

/**Данные для Review */
import reviewFoto1 from "../images/profile-01-img.png";
import reviewFoto2 from "../images/profile-02-img.png";

/**Данные для Gallery */
import foto1 from "../images/gallery-01-img.png";
import foto2 from "../images/gallery-02-img.png";
import foto3 from "../images/gallery-03-img.png";
import foto4 from "../images/gallery-04-img.png";
import foto5 from "../images/gallery-05-img.png";
import foto6 from "../images/gallery-06-img.png";
import foto7 from "../images/gallery-07-img.png";
import foto8 from "../images/gallery-08-img.png";
import foto9 from "../images/gallery-09-img.png";
import foto10 from "../images/gallery-10-img.png";
import foto11 from "../images/gallery-11-img.png";
import foto12 from "../images/gallery-12-img.png";
import foto13 from "../images/gallery-13-img.png";

/**Данные для Stories */
import story1 from "../images/stories-card-01-img.png";
import story2 from "../images/stories-card-02-img.png";
import story3 from "../images/stories-card-03-img.png";

export const arrCards = Array.of(card1, card2, card3, card4, card5, card6);

export const reviews = [
  {
    name: "Мария",
    text: [
      `Идейные соображения высшего порядка, а также рамки и место обучения кадров
    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения
    высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение
    модели развития.`,
    ],
    tour: "Тур: Вдали от дома",
    foto: reviewFoto1,
  },
  {
    name: "Павел",
    text: [
      `Равным образом постоянный количественный рост и сфера нашей активности играет
    важную роль в формировании системы обучения кадров, соответствует насущным потребностям.`,
      `Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности
    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная
    практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает
    создание модели развития.`,
    ],
    tour: "Тур: Путешествие в горы",
    foto: reviewFoto2,
  },
];

export const stories = [
  {
    title: `Автостопом в Стамбул`,
    text: `Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу
    (специалистов) участие в формировании новых предложений:`,
    points: ["вкусная еда", "дешевый транспорт", "красивый город."],
    links: [
      ["instagram", "https://instagram.com/"],
      ["facebook", "https://facebook.com/"],
      ["YouTube", "https://www.youtube.com/"],
    ],
    foto: story1,
  },
  {
    title: `Автостопом в Стамбул`,
    text: `Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу
    (специалистов) участие в формировании новых предложений:`,
    points: [],
    links: [
      ["instagram", "https://instagram.com/"],
      ["ВКонтакте", "https://www.vk.ru/"],
    ],
    foto: story2,
  },
  {
    title: `Автостопом в Стамбул`,
    text: `Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу
    (специалистов) участие в формировании новых предложений:`,
    points: [],
    links: [
      ["instagram", "https://instagram.com/"],
      ["facebook", "https://facebook.com/"],
      ["ВКонтакте", "https://www.vk.ru/"],
    ],
    foto: story3,
  },
];

export const arrGallery = Array.of(
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
  foto13
);
