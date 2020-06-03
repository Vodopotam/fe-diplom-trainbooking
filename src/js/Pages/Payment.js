import React from 'react';
import { Link } from 'react-router-dom';
import SideBarWithData from '../Components/SideBarWithData.js';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameValid: false,
      surname: '',
      surnameValid: false,
      patronymic: '',
      patronymicValid: false,
      email: '',
      emailValid: false,
      phone: '',
      phoneValid: false,
      paymentMethod: 'наличными',
      dataValid: false,
    };
    this.error = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInputValue = e => {
    const { target } = e;
    const value = target.value;
    const { name } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField = (fieldname, value) => {
    let surnameValid = this.state.surnameValid,
      nameValid = this.state.nameValid,
      patronymicValid = this.state.patronymicValid,
      emailValid = this.state.emailValid,
      phoneValid = this.state.phoneValid;

    switch (fieldname) {
      case 'surname':
        surnameValid = value.match(/^[а-яё]+$/i);
        this.error.current.innerHTML = surnameValid
          ? ''
          : `Данные в поле 'Фамилия' указаны некорректно. Пример: <b>Иванов</b>`;
        break;
      case 'name':
        nameValid = value.match(/^[а-яё]+$/i);
        this.error.current.innerHTML = nameValid
          ? ''
          : `Данные в поле 'Имя' указаны некорректно. Пример: <b>Иван</b>`;
        break;
      case 'patronymic':
        patronymicValid = value.match(/^[а-яё]+$/i);
        this.error.current.innerHTML = patronymicValid
          ? ''
          : `Данные в поле 'Отчество' указаны некорректно. Пример: <b>Иванович</b>`;
        break;
      case 'phone':
        phoneValid = value.match(/^\+?[78][(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/);
        this.error.current.innerHTML = phoneValid
          ? ''
          : `Данные в поле 'Контактный телефон' указаны некорректно. Пример: <b>+7(999)888-77-66</b>`;
        break;
      case 'email':
        emailValid = value.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/);
        this.error.current.innerHTML = emailValid
          ? ''
          : `Данные в поле 'E-mail' указаны некорректно. Пример: <b>email@mail.com</b>`;
        break;
      default:
        break;
    }
    this.setState(
      {
        surnameValid: surnameValid,
        nameValid: nameValid,
        patronymicValid: patronymicValid,
        phoneValid: phoneValid,
        emailValid: emailValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      dataValid:
        this.state.surnameValid &&
        this.state.nameValid &&
        this.state.patronymicValid &&
        this.state.emailValid,
    });
  };

  handlePayment = e => {
    this.setState({
      paymentMethod: e.target.value,
    });
  };

  setTransfer = e => {
    if (!this.state.dataValid) {
      e.preventDefault();
    }
    const contactData = {
      name: this.state.name,
      surname: this.state.surname,
      patronymic: this.state.patronymic,
      email: this.state.email,
      phone: this.state.phone,
      paymentMethod: this.state.paymentMethod,
    };
    sessionStorage.contactData = JSON.stringify(contactData);
  };

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
            <SideBarWithData {...this.props} {...this.state} />

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
                          onChange={this.handleInputValue}
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
                          onChange={this.handleInputValue}
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
                          onChange={this.handleInputValue}
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
                        maxLength="20"
                        onChange={this.handleInputValue}
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
                        onChange={this.handleInputValue}
                        required
                      />
                    </label>
                    <div ref={this.error} className="payment-error"></div>
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
                        name="payment"
                        value="онлайн"
                        checked={this.state.paymentMethod === 'онлайн'}
                        onChange={this.handlePayment}
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
                        name="payment"
                        value="наличными"
                        checked={this.state.paymentMethod === 'наличными'}
                        onChange={this.handlePayment}
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
                    name="submit"
                    className={`payment-submit ${
                      this.state.dataValid ? 'active' : ''
                    }`}
                    onClick={this.setTransfer}
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
