import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from '../Components/Ticket.js';
import SideBarWithData from '../Components/SideBarWithData.js';

class OrderSubmition extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const departure = JSON.parse(sessionStorage.currentCoach),
      passengersList = JSON.parse(sessionStorage.passengersList),
      passengersInfo = JSON.parse(sessionStorage.passengersInfo),
      contactData = JSON.parse(sessionStorage.contactData);

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
            <SideBarWithData {...this.props} {...this.state} />

            <main className="main-block">
              <div className="main-block__wrapper">
                <div className="submition-header">
                  <h5 className="submition-title">Поезд</h5>
                </div>
                <Ticket departure={departure} />
                <div className="submition-passengers">
                  <div className="submition-header">
                    <h5 className="submition-title">Пассажиры</h5>
                  </div>
                  <div className="submition-passengers-info">
                    <ul className="submition-passengers-list">
                      {passengersList.map((passenger, i) => (
                        <li className="submition-passenger" key={i}>
                          <div className="submition-passenger-age">
                            {passenger.isAdult === 'Взрослый'
                              ? 'Взрослый'
                              : 'Детский'}
                          </div>
                          <ul className="submition-passenger-data">
                            <li className="submition-passenger-name">
                              {passenger.name}
                            </li>
                            <li className="submition-passenger-sex">
                              Пол{' '}
                              <span className="submition-passenger-sex__span">
                                {passenger.gender}
                              </span>
                            </li>
                            <li className="submition-passenger-birth">
                              Дата рождения{' '}
                              <span className="submition-passenger-birth__span">
                                {passenger.birthday}
                              </span>
                            </li>
                            {passenger.isAdult === 'Взрослый' ? (
                              <li className="submition-passenger-id">
                                Паспорт РФ{' '}
                                <span className="submition-passenger-id__span">
                                  {passenger.document}
                                </span>
                              </li>
                            ) : (
                              <li className="submition-passenger-id">
                                Свидетельство о рождении{' '}
                                <span className="submition-passenger-id__span">
                                  {passenger.document}
                                </span>
                              </li>
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                    <div className="submition-passengers-price">
                      <div className="total-price total-price_submition">
                        <p className="total-price__text total-price__text_submition">
                          Всего
                        </p>
                        <div className="total-price__price total-price__price_submition">
                          {passengersInfo.price} &#x20bd;
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
                    <div className="submition-payment-type-text">
                      {contactData.paymentMethod}
                    </div>
                    <div className="submition-payment-type-button">
                      <Link to="/payment/" className="submition-button">
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
