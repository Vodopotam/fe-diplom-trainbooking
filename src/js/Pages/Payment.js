import React from 'react';
import { Link } from 'react-router-dom';
import SideBarWithData from '../../js/Components/SideBarWithData.js';

class Payment extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(sessionStorage);
    const passengersInfo =
      JSON.parse(sessionStorage.passengersInfo) || this.props.passengersInfo;
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
            <SideBarWithData
              {...this.props}
              {...this.state}
              passengersInfo={passengersInfo}
            />

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
