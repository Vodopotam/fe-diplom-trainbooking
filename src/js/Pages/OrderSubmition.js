import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../js/Components/Header.js';

class OrderSubmition extends React.Component {
  constructor(props) {
    super(props);
    this.directionToBlock = React.createRef();
    this.directionFromBlock = React.createRef();
    this.passengersBlock = React.createRef();
    this.state = {
      isHiddenBlockTo: false,
      isHiddenBlockFrom: false,
      isHiddenBlockPassengers: false,
    };
  }

  changeIconBlockTo(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockTo: !this.state.isHiddenBlockTo,
    });
  }

  changeIconBlockFrom(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockFrom: !this.state.isHiddenBlockFrom,
    });
  }

  changeIconBlockPassengers(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockPassengers: !this.state.isHiddenBlockPassengers,
    });
  }

  render() {
    return (
      <div className="content">
        <Header />

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
            <li className="order-navigation__list active">
              <span></span>
              <p className="order-navigation__text">Оплата</p>
            </li>
            <li className="order-navigation__list active">
              <span></span>
              <p className="order-navigation__text">Проверка</p>
            </li>
          </ul>
          <div className="wrapper">
            <aside className="aside-block">
              <div className="trip-options">
                <h4 className="passengers-header">Детали поездки</h4>
                <div className="direction-to direction-to_passengers">
                  <div className="direction-short-block">
                    <h4 className="direction-to__title direction-to__title_passengers">
                      Туда
                    </h4>
                    <p className="direction-to__date">30.08.2018</p>
                    <div
                      className={`direction-to__more ${
                        this.state.isHiddenBlockTo ? 'more' : 'less'
                      }`}
                      onClick={() =>
                        this.changeIconBlockTo(this.directionToBlock.current)
                      }
                    ></div>
                  </div>
                  <div
                    className="direction-full-block"
                    ref={this.directionToBlock}
                  >
                    <div className="train-number">
                      <p className="train-number__text">&#8470; Поезда</p>
                      <p className="train-number__number">116C</p>
                    </div>
                    <div className="train-route">
                      <p className="train-route__text">Название</p>
                      <p className="train-route__cities">
                        Адлер
                        <br />
                        Санкт-Петербург
                      </p>
                    </div>

                    <div className="train-info-time">
                      <div className="time-info__departure time-info__departure_passengers">
                        <p className="time-info__departure-time">
                          00:10
                          <br />
                          <span className="direction-to__date direction-to__date_full">
                            30.08.2018
                          </span>
                        </p>
                        <div className="time-info__duration">9 : 42</div>
                        <p className="time-info__arrival-time">
                          09:52
                          <br />
                          <span className="direction-to__date direction-to__date_full">
                            31.08.2018
                          </span>
                        </p>
                      </div>
                      <div className="train-info-route">
                        <p className="time-info__departure-city">
                          Москва
                          <br />
                          <span className="time-info__departure-station">
                            Курский
                            <br />
                            вокзал
                          </span>
                        </p>
                        <p className="time-info__arrival-city">
                          Санкт-Петербург
                          <br />
                          <span className="time-info__arrival-station">
                            Ладожский
                            <br />
                            вокзал
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="direction-from direction-from_passengers">
                  <div className="direction-short-block">
                    <h4 className="direction-from__title direction-from__title_passengers">
                      Обратно
                    </h4>
                    <p className="direction-from__date">09.09.2018</p>
                    <div
                      className={`direction-from__more ${
                        this.state.isHiddenBlockFrom ? 'more' : 'less'
                      }`}
                      onClick={() =>
                        this.changeIconBlockFrom(
                          this.directionFromBlock.current
                        )
                      }
                    ></div>
                  </div>
                  <div
                    className="direction-full-block"
                    ref={this.directionFromBlock}
                  >
                    <div className="train-number">
                      <p className="train-number__text">&#8470; Поезда</p>
                      <p className="train-number__number">116C</p>
                    </div>
                    <div className="train-route">
                      <p className="train-route__text">Название</p>
                      <p className="train-route__cities">
                        Адлер
                        <br />
                        Санкт-Петербург
                      </p>
                    </div>

                    <div className="train-info-time">
                      <div className="time-info__departure time-info__departure_passengers">
                        <p className="time-info__departure-time">
                          00:10
                          <br />
                          <span className="direction-to__date direction-to__date_full">
                            09.09.2018
                          </span>
                        </p>
                        <div className="time-info__duration time-info__duration_reverse">
                          9 : 42
                        </div>
                        <p className="time-info__arrival-time">
                          09:52
                          <br />
                          <span className="direction-to__date direction-to__date_full">
                            08.09.2018
                          </span>
                        </p>
                      </div>
                      <div className="train-info-route">
                        <p className="time-info__departure-city">
                          Москва
                          <br />
                          <span className="time-info__departure-station">
                            Курский
                            <br />
                            вокзал
                          </span>
                        </p>
                        <p className="time-info__arrival-city">
                          Санкт-Петербург
                          <br />
                          <span className="time-info__arrival-station">
                            Ладожский
                            <br />
                            вокзал
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="passengers-info">
                  <div className="direction-short-block">
                    <h4 className="direction-from__title direction-from__title_passengers">
                      Пассажиры
                    </h4>
                    <div
                      className={`direction-from__more ${
                        this.state.isHiddenBlockPassengers ? 'more' : 'less'
                      }`}
                      onClick={() =>
                        this.changeIconBlockPassengers(
                          this.passengersBlock.current
                        )
                      }
                    ></div>
                  </div>
                  <div
                    className="direction-full-block"
                    ref={this.passengersBlock}
                  >
                    <div className="passengers-adults">
                      <p className="passengers-text">2 Взрослых</p>
                      <div className="passengers-price">5 840 &#x20bd;</div>
                    </div>
                    <div className="passengers-children">
                      <p className="passengers-text">1 Ребенок</p>
                      <div className="passengers-price">1 920 &#x20bd;</div>
                    </div>
                  </div>
                </div>

                <div className="total-price">
                  <p className="total-price__text">Итог</p>
                  <div className="total-price__price">7 760 &#x20bd;</div>
                </div>
              </div>
            </aside>

            <main className="main-block">
              <div className="main-block__wrapper">
                <div className="submition-train">
                  <div className="submition-header">
                    <h5 className="submition-title">Поезд</h5>
                  </div>
                  <div className="ticket ticket_submition">
                    <div className="train-info">
                      <div className="train-info__number">116C</div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          Адлер &#8594;
                        </span>
                        <br />
                        Москва &#8594;
                        <br /> Санкт-Петербург
                      </div>
                    </div>

                    <div className="time-info">
                      <div className="time-info__direction-to">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration">9 : 42</div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                      <div className="time-info__direction-from">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration time-info__duration_reverse">
                          9 : 42
                        </div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="coach-choice">
                      <ul className="coaches">
                        <li className="coaches__sitting coaches_type">
                          <p className="coaches__name">Сидячий</p>
                          <div className="coaches__quantity">88</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">1920</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__reserved coaches_type">
                          <p className="coaches__name">Плацкарт</p>
                          <div className="coaches__quantity">52</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">2530</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__compartment coaches_type">
                          <p className="coaches__name">Купе</p>
                          <ul className="coaches__name-subnames">
                            <li className="coaches__name-subname">
                              <div className="coaches__name">верхние</div>
                              <div className="coaches__quantity">19</div>
                              <div className="coaches__price-number">
                                2920{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                            <li className="coaches__name-subname">
                              <div className="coaches__name">нижние</div>
                              <div className="coaches__quantity">5</div>
                              <div className="coaches__price-number">
                                3530{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="coaches__quantity">24</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">3820</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__luxe coaches_type">
                          <p className="coaches__name">Люкс</p>
                          <div className="coaches__quantity">15</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">4950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul className="ticket-options">
                        <li className="ticket-options__wifi"></li>
                        <li className="ticket-options__speed"></li>
                        <li className="ticket-options__comfort"></li>
                      </ul>
                      <Link to="/trainselection/" className="submition-button">
                        Изменить
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="submition-passengers">
                  <div className="submition-header">
                    <h5 className="submition-title">Пассажиры</h5>
                  </div>
                  <div className="submition-passengers-info">
                    <ul className="submition-passengers-list">
                      <li className="submition-passenger">
                        <div className="submition-passenger-age">Взрослый</div>
                        <ul className="submition-passenger-data">
                          <li className="submition-passenger-name">
                            Мартынюк Ирина Эдуардовна
                          </li>
                          <li className="submition-passenger-sex">
                            Пол{' '}
                            <span className="submition-passenger-sex__span">
                              женский
                            </span>
                          </li>
                          <li className="submition-passenger-birth">
                            Дата рождения{' '}
                            <span className="submition-passenger-birth__span">
                              17.02.1985
                            </span>
                          </li>
                          <li className="submition-passenger-id">
                            Паспорт РФ{' '}
                            <span className="submition-passenger-id__span">
                              4204 380694
                            </span>
                          </li>
                        </ul>
                      </li>

                      <li className="submition-passenger">
                        <div className="submition-passenger-age">Детский</div>
                        <ul className="submition-passenger-data">
                          <li className="submition-passenger-name">
                            Мартынюк Кирилл Сергеевич
                          </li>
                          <li className="submition-passenger-sex">
                            Пол{' '}
                            <span className="submition-passenger-sex__span">
                              мужской
                            </span>
                          </li>
                          <li className="submition-passenger-birth">
                            Дата рождения{' '}
                            <span className="submition-passenger-birth__span">
                              25.01.2006
                            </span>
                          </li>
                          <li className="submition-passenger-id">
                            Свидетельство о рождении{' '}
                            <span className="submition-passenger-id__span">
                              VIII УН 256319
                            </span>
                          </li>
                        </ul>
                      </li>

                      <li className="submition-passenger">
                        <div className="submition-passenger-age">Взрослый</div>
                        <ul className="submition-passenger-data">
                          <li className="submition-passenger-name">
                            Мартынюк Сергей Петрович
                          </li>
                          <li className="submition-passenger-sex">
                            Пол{' '}
                            <span className="submition-passenger-sex__span">
                              мужской
                            </span>
                          </li>
                          <li className="submition-passenger-birth">
                            Дата рождения{' '}
                            <span className="submition-passenger-birth__span">
                              19.06.1982
                            </span>
                          </li>
                          <li className="submition-passenger-id">
                            Паспорт РФ{' '}
                            <span className="submition-passenger-id__span">
                              4204 380694
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="submition-passengers-price">
                      <div className="total-price total-price_submition">
                        <p className="total-price__text total-price__text_submition">
                          Всего
                        </p>
                        <div className="total-price__price total-price__price_submition">
                          7 760 &#x20bd;
                        </div>
                      </div>
                      <Link to="/passengers/" className="submition-button">
                        Изменить
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="submition-payment-type">
                  <div className="submition-header">
                    <h5 className="submition-title">Способ оплаты</h5>
                  </div>
                  <div className="submition-payment-type-info">
                    <div className="submition-payment-type-text">Наличными</div>
                    <div className="submition-payment-type-button">
                      <Link to="/passengers/" className="submition-button">
                        Изменить
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  to="/order-done/"
                  className="goto-passengers-button active goto-passengers-button_submition"
                >
                  Подтвердить
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSubmition;
