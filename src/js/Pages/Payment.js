import React from 'react';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
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

  componentDidMount() {
    window.scrollTo(0, 0);
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
        <div className="main-information payment">
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
            <li className="order-navigation__list">
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

            <main className="main-block main-block_payment">
              <div className="main-block__wrapper">
                <form action="OrderSubmition.html" className="payment-form">
                  <div className="personal-info">
                    <div className="payment-header">
                      <h5 className="payment-title">Персональные данные</h5>
                    </div>
                    <div className="full-name full-name_payment">
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
                    <label className="passenger-label passenger-label_payment">
                      Контактный телефон
                      <br />
                      <input
                        className="passenger-input passenger-input_payment"
                        type="tel"
                        name="phone"
                        placeholder="+7 &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95;"
                        required
                      />
                    </label>
                    <label className="passenger-label passenger-label_payment">
                      E-mail
                      <br />
                      <input
                        className="passenger-input passenger-input_payment"
                        type="email"
                        name="email"
                        placeholder="inbox@gmail.ru"
                        required
                      />
                    </label>
                  </div>

                  <div className="payment-method">
                    <div className="payment-header">
                      <h5 className="payment-title">Способ оплаты</h5>
                    </div>
                    <div className="checkbox checkbox_payment">
                      <input
                        id="online"
                        className="checkbox__input"
                        type="radio"
                        name="mobility"
                        value="subscribed"
                      />
                      <label
                        htmlFor="online"
                        className="checkbox__label checkbox__label_payment"
                      >
                        Онлайн
                      </label>
                      <ul className="payment-selection">
                        <li className="payment-selection__item">
                          Банковской
                          <br />
                          картой
                        </li>
                        <li className="payment-selection__item">PayPal</li>
                        <li className="payment-selection__item">
                          Visa QIWI Wallet
                        </li>
                      </ul>
                    </div>
                    <div className="checkbox checkbox_payment">
                      <input
                        id="cash"
                        className="checkbox__input"
                        type="radio"
                        name="mobility"
                        value="subscribed"
                      />
                      <label
                        htmlFor="cash"
                        className="checkbox__label checkbox__label_payment"
                      >
                        Наличными
                      </label>
                    </div>
                  </div>

                  <Link
                    to="/order-submition/"
                    type="submit"
                    name="submit"
                    className="payment-submit"
                  >
                    Купить билеты
                  </Link>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
