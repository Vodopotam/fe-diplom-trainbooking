import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { getData } from '../data.js';

class OrderDone extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const trainInfo = JSON.parse(sessionStorage.trainInfo),
      currentCoach = JSON.parse(sessionStorage.currentCoach),
      passengersList = JSON.parse(sessionStorage.passengersList),
      contactData = JSON.parse(sessionStorage.contactData),
      seats = JSON.parse(sessionStorage.seats);
    const order = {
      user: {
        first_name: contactData.name,
        last_name: contactData.surname,
        patronymic: contactData.patronymic,
        phone: contactData.phone,
        email: contactData.email,
        payment_method: contactData.paymentMethod,
      },
      departure: {
        route_direction_id: trainInfo.cityFrom.id,
        seats: passengersList.map((passenger, i) => ({
          coach_id: currentCoach._id,
          person_info: {
            is_adult: passenger.isAdult === 'Взрослый' ? true : false,
            first_name: passenger.name,
            last_name: passenger.surname,
            patronymic: passenger.patronymic,
            gender: passenger.gender,
            birthday: passenger.birthday,
            document_type:
              passenger.isAdult === 'Взрослый'
                ? 'паспорт'
                : 'Свидетельство о рождении',
            document_data: passenger.document,
          },
          seat_number: seats[i],
          is_child: passenger.isAdult === 'Взрослый' ? false : true,
        })),
      },
    };
    getData(`order`, 'POST', order).then(response => console.log(response));
  }

  clearData = () => {
  	this.props.setTrainInfo({})
	sessionStorage.clear()
  }

  render() {
    const passengersInfo = JSON.parse(sessionStorage.passengersInfo),
      contactData = JSON.parse(sessionStorage.contactData);
    return (
      <div className="content">
        <div className="main-information order-done">
          <div className="wrapper">
            <h1 className="order-done-header">Благодарим Вас за заказ!</h1>
            <div className="order-done-block">
              <div className="order-number-and-price">
                <p className="order-number">№ Заказа 285АА</p>
                <p className="order-price__text">
                  сумма{' '}
                  <span className="order-price__price">
                    {passengersInfo.price}&#x20bd;
                  </span>
                </p>
              </div>
              <div className="order-done-features">
                <ul className="order-done-features-list">
                  <li className="order-done-features-list__item">
                    билеты будут отправлены на ваш e-mail
                  </li>
                  <li className="order-done-features-list__item">
                    <b>распечатайте</b> и сохраняйте билеты до даты поездки
                  </li>
                  <li className="order-done-features-list__item">
                    <b>предьявите</b> распечатанные билеты при посадке
                  </li>
                </ul>
              </div>
              <div className="order-done-letter">
                <h2 className="order-done-letter__title">
                  {contactData.name + ' ' + contactData.patronymic}!
                </h2>
                <p className="order-done-letter__text">
                  Ваш заказ успешно оформлен.
                  <br /> В ближайшее время с вами свяжется наш оператор для
                  подтверждения.
                </p>
                <p className="order-done-letter__text">
                  <b>
                    Благодарим Вас за оказанное доверие и желаем приятного
                    путешествия!
                  </b>
                </p>
              </div>
              <div className="order-service">
                <div className="order-service__wrapper">
                  <div className="order-service-value">
                    <p className="order-service__text">Оценить сервис</p>
                    <form className="order-service__stars stars">
                      <input
                        type="radio"
                        className="star order-service__star"
                        id="star1"
                        name="stars"
                      />
                      <label htmlFor="star1"></label>
                      <input
                        type="radio"
                        className="star order-service__star"
                        id="star2"
                        name="stars"
                      />
                      <label htmlFor="star2"></label>
                      <input
                        type="radio"
                        className="star order-service__star"
                        id="star3"
                        name="stars"
                      />
                      <label htmlFor="star3"></label>
                      <input
                        type="radio"
                        className="star order-service__star"
                        id="star4"
                        name="stars"
                      />
                      <label htmlFor="star4"></label>
                      <input
                        type="radio"
                        className="star order-service__star"
                        id="star5"
                        name="stars"
                      />
                      <label htmlFor="star5"></label>
                    </form>
                  </div>
                  <Link
                    to="/"
                    className="goto-main"
                    onClick={this.clearData}
                  >
                    Вернуться на главню
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDone;
