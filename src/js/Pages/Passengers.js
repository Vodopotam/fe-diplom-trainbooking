import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../js/Components/SideBar.js';
import Passenger from '../../js/Components/Passenger.js';

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.passenger = React.createRef();
    this.passenger2 = React.createRef();
    this.state = {
      passengerAdded: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onAddChild = () => {
    this.setState({
      passengerAdded: this.state.passengerAdded + 1,
    });
  };

  render() {
    let passes = [];
    for (let i = 0; i < this.state.passengerAdded; i++) {
      passes.push(<Passenger key={i} number={i + 4} />);
    }

    return (
      <div className="content">
        <div className="main-information">
          <ul className="order-navigation">
            <li className="order-navigation__list active">
              <span></span>
              <p className="order-navigation__text">Билеты</p>
            </li>
            <li className="order-navigation__list active">
              <span></span>
              <p className="order-navigation__text">Пассажиры</p>
            </li>
            <li className="order-navigation__list">
              <span></span>
              <p className="order-navigation__text">Оплата</p>
            </li>
            <li className="order-navigation__list">
              <span></span>
              <p className="order-navigation__text">Проверка</p>
            </li>
          </ul>
          <div className="wrapper">
            <SideBar />

            <main className="main-block">
              <div className="main-block__wrapper">
                <div className="passenger">
                  <div
                    className="passenger-short-block"
                    onClick={() =>
                      this.passenger.current.classList.toggle('hidden')
                    }
                  >
                    <h5 className="passenger-short-block__title">Пассажир 1</h5>
                  </div>
                  <div className="passenger-full-block" ref={this.passenger}>
                    <form method="post" action="#" className="passenger-form">
                      <div className="personal-data">
                        <div className="select-wrapper">
                          <select className="passenger-select">
                            <option className="passenger-option">
                              Взрослый
                            </option>
                            <option className="passenger-option">
                              Детский
                            </option>
                          </select>
                          <div className="select-arrow"></div>
                        </div>
                        <div className="full-name">
                          <label className="passenger-label">
                            Фамилия
                            <br />
                            <input
                              className="passenger-input"
                              type="text"
                              name="surname"
                              placeholder="Мартынюк"
                              required
                            />
                          </label>
                          <label className="passenger-label">
                            Имя
                            <br />
                            <input
                              className="passenger-input"
                              type="text"
                              name="name"
                              placeholder="Ирина"
                              required
                            />
                          </label>
                          <label className="passenger-label">
                            Отчество
                            <br />
                            <input
                              className="passenger-input"
                              type="text"
                              name="patronymic"
                              placeholder="Эдуардовна"
                              required
                            />
                          </label>
                        </div>

                        <div className="sex-and-birthday">
                          <div className="sex">
                            <h5 className="passenger-label">Пол</h5>
                            <div className="sex-selection">
                              <label className="passenger-label" htmlFor="male">
                                <input
                                  type="radio"
                                  name="sex"
                                  value="мужской"
                                  id="male"
                                />
                                <span className="radio-control male"></span>
                              </label>
                              <label
                                className="passenger-label"
                                htmlFor="female"
                              >
                                <input
                                  type="radio"
                                  name="sex"
                                  value="женский"
                                  id="female"
                                />
                                <span className="radio-control female"></span>
                              </label>
                            </div>
                          </div>
                          <div className="birthday">
                            <h5 className="passenger-label">Дата рождения</h5>
                            <div className="birthday-selection">
                              <label
                                className="passenger-label"
                                htmlFor="birthday"
                              >
                                <input
                                  type="date"
                                  name="birthday"
                                  className="birthday__input"
                                  id="birthday"
                                  required=""
                                />
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="checkbox">
                          <input
                            id="limited-mobility"
                            className="checkbox__input"
                            type="checkbox"
                            name="mobility"
                            value="subscribed"
                          />
                          <label
                            htmlFor="limited-mobility"
                            className="checkbox__label"
                          >
                            ограниченная подвижность
                          </label>
                        </div>
                      </div>

                      <div className="passport-data">
                        <div className="select-wrapper select-wrapper_passport">
                          <label className="passenger-label">
                            Тип документа
                          </label>
                          <select className="passenger-select passenger-select_passport">
                            <option className="passenger-ption">
                              Паспорт РФ
                            </option>
                            <option
                              className="passenger-option passenger-option_child"
                              disabled
                            >
                              Свидетельство о рождении
                            </option>
                          </select>
                          <div className="select-arrow select-arrow_passport"></div>
                        </div>
                        <label className="passenger-label passenger-label_passport">
                          Серия
                          <br />
                          <input
                            className="passenger-input passenger-input_passport"
                            type="number"
                            name="series"
                            placeholder=" &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95;"
                            required
                          />
                        </label>
                        <label className="passenger-label passenger-label_passport">
                          Номер
                          <br />
                          <input
                            className="passenger-input passenger-input_passport"
                            type="number"
                            name="number"
                            placeholder=" &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95;"
                            required
                          />
                        </label>
                      </div>
                    </form>

                    <div className="next-passenger">
                      <div className="next-passenger-error hidden">
                        <p className="next-passenger-error__text">
                          Номер свидетельства о рождении указан некорректно{' '}
                          <br />
                          Пример: <b>VIII-ЫП-123456</b>
                        </p>
                      </div>
                      <div className="next-passenger-ready">
                        <p className="next-passenger-ready__text">Готово</p>
                        <a className="next-passenger__link">
                          Следующий пассажир
                        </a>
                      </div>
                      <a className="next-passenger__link hidden">
                        Следующий пассажир
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="passenger"
                  onClick={() =>
                    this.passenger2.current.classList.toggle('hidden')
                  }
                >
                  <div className="passenger-short-block">
                    <h5 className="passenger-short-block__title">Пассажир 2</h5>
                  </div>
                  <div className="passenger-full-block" ref={this.passenger2}>
                    <form method="post" action="#" className="passenger-form">
                      <div className="personal-data">
                        <div className="select-wrapper">
                          <select className="passenger-select">
                            <option className="passenger-option">
                              Детский
                            </option>
                            <option className="passenger-option">
                              Взрослый
                            </option>
                          </select>
                          <div className="select-arrow"></div>
                        </div>
                        <div className="full-name">
                          <label className="passenger-label">
                            Фамилия
                            <br />
                            <input
                              className="passenger-input"
                              type="text"
                              name="surname"
                              required
                            />
                          </label>
                          <label className="passenger-label">
                            Имя
                            <br />
                            <input
                              className="passenger-input"
                              type="text"
                              name="name"
                              required
                            />
                          </label>
                          <label className="passenger-label">
                            Отчество
                            <br />
                            <input
                              className="passenger-input"
                              type="text"
                              name="patronymic"
                              required
                            />
                          </label>
                        </div>

                        <div className="sex-and-birthday">
                          <div className="sex">
                            <h5 className="passenger-label">Пол</h5>
                            <div className="sex-selection">
                              <label
                                className="passenger-label"
                                htmlFor="male2"
                              >
                                <input
                                  type="radio"
                                  name="sex"
                                  value="мужской"
                                  id="male2"
                                />
                                <span className="radio-control male"></span>
                              </label>
                              <label
                                className="passenger-label"
                                htmlFor="female2"
                              >
                                <input
                                  type="radio"
                                  name="sex"
                                  value="женский"
                                  id="female2"
                                />
                                <span className="radio-control female"></span>
                              </label>
                            </div>
                          </div>
                          <div className="birthday">
                            <h5 className="passenger-label">Дата рождения</h5>
                            <div className="birthday-selection">
                              <label
                                className="passenger-label"
                                htmlFor="birthday2"
                              >
                                <input
                                  type="date"
                                  name="birthday"
                                  className="birthday__input"
                                  id="birthday2"
                                  required
                                />
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="checkbox">
                          <input
                            id="limited-mobility2"
                            className="checkbox__input"
                            type="checkbox"
                            name="mobility"
                            value="subscribed"
                          />
                          <label
                            htmlFor="limited-mobility2"
                            className="checkbox__label"
                          >
                            ограниченная подвижность
                          </label>
                        </div>
                      </div>

                      <div className="passport-data">
                        <div className="select-wrapper select-wrapper_passport select-wrapper_child">
                          <label className="passenger-label">
                            Тип документа
                          </label>
                          <select className="passenger-select passenger-select_passport">
                            <option className="passenger-option" disabled>
                              Паспорт РФ
                            </option>
                            <option className="passenger-option passenger-option_child">
                              Свидетельство о рождении
                            </option>
                          </select>
                          <div className="select-arrow select-arrow_passport"></div>
                        </div>
                        <label className="passenger-label passenger-label_passport">
                          Номер
                          <br />
                          <input
                            className="passenger-input passenger-input_passport passenger-input_child"
                            type="number"
                            name="number"
                            placeholder="12 символов"
                            required
                          />
                        </label>
                      </div>
                    </form>

                    <div className="next-passenger">
                      <a className="next-passenger__link hidden">
                        Следующий пассажир
                      </a>
                      <div className="next-passenger-error">
                        <p className="next-passenger-error__text">
                          Номер свидетельства о рожденни указан некорректно{' '}
                          <br />
                          Пример: <b>VIII-ЫП-123456</b>
                        </p>
                      </div>
                      <div className="next-passenger-ready hidden">
                        <p className="next-passenger-ready__text">Готово</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Passenger number={3} />

                {passes}

                <div
                  className="add-passenger"
                  onClick={this.onAddChild.bind(this)}
                >
                  <h5 className="add-passenger__title">Добавить пассажира</h5>
                </div>

                <Link to="/payment/" className="goto-passengers-button">
                  Далее
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Passengers;
