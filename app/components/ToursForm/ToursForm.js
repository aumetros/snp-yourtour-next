import styles from "./ToursForm.module.scss";

export default function ToursForm() {
  return (
    <form className={styles.root}>
      <fieldset className={`${styles.fieldset} ${styles['fieldset_type_inputs']}`}>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="name">
            Имя
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Введите Ваше имя"
            required
          />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="direction">
            Направление
          </label>
          <div className={styles['select-container']}>
            <select
              className={styles.select}
              id="direction"
              name="direction"
              defaultValue={""}
              required
            >
              <option value="" disabled hidden>
                Куда хотите ехать
              </option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Лондон">Лондон</option>
              <option value="Ямайка">Ямайка</option>
            </select>
          </div>
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="phone">
            Телефон
          </label>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="tel"
            placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            required
          />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="date-from">
            Дата от
          </label>
          <input
            className={`${styles.input} ${styles.date}`}
            id="date-from"
            name="date-from"
            type="date"
            required
          />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="date-to">
            Дата до
          </label>
          <input
            className={`${styles.input} ${styles.date}`}
            id="date-to"
            name="date-to"
            type="date"
            required
          />
        </div>
        <div className={`${styles.container} ${styles['container_size_wide']}`}>
          <label className={styles.label} htmlFor="comment">
            Комментарий
          </label>
          <textarea
            className={styles.comment}
            id="comment"
            name="comment"
          ></textarea>
        </div>
      </fieldset>
      <fieldset className={`${styles.fieldset} ${styles['fieldset_type_checkboxes']}`}>
        <span className={styles.label}>Вам есть 18 лет?</span>
        <div className={styles.radios}>
          <label
            className={`${styles.label} ${styles['label_el_radio']}`}
            htmlFor="adult-user"
          >
            <input
              className={styles.radio}
              type="radio"
              name="adult"
              id="adult-user"
              value="true"
            />
            <span className={`${styles.pseudo} ${styles['pseudo_type_radio']}`}></span>
            <span>Да</span>
          </label>
          <label
            className={`${styles.label} ${styles['label_el_radio']}`}
            htmlFor="underage-user"
          >
            <input
              className={styles.radio}
              type="radio"
              name="adult"
              id="underage-user"
              value="false"
            />
            <span className={`${styles.pseudo} ${styles['pseudo_type_radio']}`}></span>
            <span>Нет</span>
          </label>
        </div>
      </fieldset>
      <fieldset className={`${styles.fieldset} ${styles['fieldset_type_agree']}`}>
        <label className={styles.label} htmlFor="agree">
          <input
            className={styles.checkbox}
            type="checkbox"
            name="agree"
            value="agree"
            id="agree"
            required
          />
          <span className={`${styles.pseudo} ${styles['pseudo_type_checkbox']}`}></span>
        </label>
        <div>
          <span className={styles['agree-text']}>
            Нажимая кнопку, я принимаю условия
          </span>
          <a
            className={styles['agree-link']}
            href="https://www.consultant.ru/document/cons_doc_LAW_305/"
            target="_blank"
            rel="noreferrer"
          >
            Лицензионного договора
          </a>
        </div>
      </fieldset>
      <div>
        <button className={styles['submit-button']} type="submit">
          Найти тур
        </button>
        <button className={styles['reset-button']} type="reset">
          Сбросить
        </button>
      </div>
    </form>
  );
}