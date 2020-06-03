import React, { Fragment } from 'react';

class Passenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: '',
      surnameValid: false,
      name: '',
      nameValid: false,
      patronymic: '',
      patronymicValid: false,
      selectedGender: 'мужской',
      birthday: null,
      birthdayValid: false,
      limitedMobility: false,
      passportSeries: '',
      passportSeriesValid: false,
      passportNumber: '',
      passportNumberValid: false,
      birthCertificate: '',
      birthCertificateValid: false,
      formValid: false,
      isOpen: this.props.isOpen,
    };
    this.error = React.createRef();
    this.confirmationButton = React.createRef();
  }

  toggleOpenBlock = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

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
    if (!this.error.current) {
      return;
    }
    let surnameValid = this.state.surnameValid,
      nameValid = this.state.nameValid,
      patronymicValid = this.state.patronymicValid,
      birthdayValid = this.state.birthdayValid,
      passportSeriesValid = this.state.passportSeriesValid,
      passportNumberValid = this.state.passportNumberValid,
      birthCertificateValid = this.state.birthCertificateValid;

    switch (fieldname) {
      case 'surname':
        surnameValid = value.match(/^[а-яё]+$/i);
        this.error.current.innerHTML = surnameValid
          ? ''
          : `Данные в поле 'Фамилия' указаны некорректно. <br />Пример: <b>Иванов</b>`;
        break;
      case 'name':
        nameValid = value.match(/^[а-яё]+$/i);
        this.error.current.innerHTML = nameValid
          ? ''
          : `Данные в поле 'Имя' указаны некорректно. <br />Пример: <b>Иван</b>`;
        break;
      case 'patronymic':
        patronymicValid = value.match(/^[а-яё]+$/i);
        this.error.current.innerHTML = patronymicValid
          ? ''
          : `Данные в поле 'Отчество' указаны некорректно. <br />Пример: <b>Иванович</b>`;
        break;
      case 'birthday':
        birthdayValid = value.match(
          /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/
        );
        this.error.current.innerHTML = birthdayValid
          ? ''
          : `Введите данные в поле 'Дата рождения'`;
        break;
      case 'passportSeries':
        passportSeriesValid = value.match(/[0-9]{4}/);
        this.error.current.innerHTML = passportSeriesValid
          ? ''
          : `Данные в поле 'Серия' указаны некорректно. <br />Пример: <b>1 2 3 4</b>`;
        break;
      case 'passportNumber':
        passportNumberValid = value.match(/[0-9]{6}/);
        this.error.current.innerHTML = passportNumberValid
          ? ''
          : `Данные в поле 'Номер' указаны некорректно. <br />Пример: <b>1 2 3 4 5 6</b>`;
        break;
      case 'birthCertificate':
        birthCertificateValid = value.match(
          /^[A-Z]{4}[-]{1}[А-Я]{2}[-]{1}[0-9]{6}$/
        );
        this.error.current.innerHTML = birthCertificateValid
          ? ''
          : `Данные в поле 'Номер' указаны некорректно. <br />Пример: <b>VIII-ЫП-123456</b>`;
        break;
      default:
        break;
    }
    this.setState(
      {
        surnameValid: surnameValid,
        nameValid: nameValid,
        patronymicValid: patronymicValid,
        birthdayValid: birthdayValid,
        passportSeriesValid: passportSeriesValid,
        passportNumberValid: passportNumberValid,
        birthCertificateValid: birthCertificateValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const validAdult =
      this.state.surnameValid &&
      this.state.nameValid &&
      this.state.patronymicValid &&
      this.state.birthdayValid &&
      this.state.passportSeriesValid &&
      this.state.passportNumberValid;
    const validChild =
      this.state.surnameValid &&
      this.state.nameValid &&
      this.state.patronymicValid &&
      this.state.birthdayValid &&
      this.state.birthCertificateValid;
    this.setState({
      formValid: validAdult || validChild,
    });
  };

  setMobility = () => {
    this.setState({
      limitedMobility: !this.state.limitedMobility,
    });
  };

  handleGenderChange = e => {
    this.setState({
      selectedGender: e.target.value,
    });
  };

  setConfirmation = () => {
    const passenger = {
      isAdult: this.props.adult ? 'Взрослый' : 'Ребенок',
      name: `${this.state.surname} ${this.state.name}  ${this.state.patronymic}`,
      gender: this.state.selectedGender,
      birthday: this.state.birthday,
      document: this.props.adult
        ? `${this.state.passportSeries + ' ' + this.state.passportNumber}`
        : this.state.birthCertificate,
    };
    this.props.setPassengersList(passenger);
    this.confirmationButton.current.className = 'hidden';
  };

  render() {
    // const passengersInfo = JSON.parse(sessionStorage.passengersInfo) || null;
    const { isOpen, limitedMobility } = this.state;
    const { adult, child } = this.props;
    return (
      <div className="passenger">
        <div className="passenger-short-block" onClick={this.toggleOpenBlock}>
          <h5
            className={`passenger-short-block__title ${
              isOpen ? '' : 'passenger-short-block_full-hidden'
            }`}
          >
            Пассажир {this.props.number}
          </h5>
        </div>
        <div className={`passenger-full-block ${!isOpen ? 'hidden' : 'open'}`}>
          <form method="post" action="#" className="passenger-form">
            <div className="personal-data">
              <div className="select-wrapper">
                <select
                  className="passenger-select"
                  defaultValue={adult ? 'adult' : 'child'}
                >
                  <option
                    value={adult}
                    disabled={child}
                    className="passenger-option"
                  >
                    Взрослый
                  </option>
                  <option
                    value={child}
                    disabled={adult}
                    className="passenger-option"
                  >
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
                    data-name="Фамилия"
                    required
                    onChange={this.handleInputValue}
                  />
                </label>
                <label className="passenger-label">
                  Имя
                  <br />
                  <input
                    className="passenger-input"
                    type="text"
                    name="name"
                    data-name="Имя"
                    required
                    onChange={this.handleInputValue}
                  />
                </label>
                <label className="passenger-label">
                  Отчество
                  <br />
                  <input
                    className="passenger-input"
                    type="text"
                    name="patronymic"
                    data-name="Отчество"
                    required
                    onChange={this.handleInputValue}
                  />
                </label>
              </div>

              <div className="sex-and-birthday">
                <div className="sex">
                  <h5 className="passenger-label">Пол</h5>
                  <div className="sex-selection">
                    <label className="passenger-label">
                      <input
                        type="radio"
                        name="sex"
                        value="мужской"
                        checked={this.state.selectedGender === 'мужской'}
                        onChange={this.handleGenderChange}
                      />
                      <span className="radio-control male"></span>
                    </label>
                    <label className="passenger-label">
                      <input
                        type="radio"
                        name="sex"
                        value="женский"
                        checked={this.state.selectedGender === 'женский'}
                        onChange={this.handleGenderChange}
                      />
                      <span className="radio-control female"></span>
                    </label>
                  </div>
                </div>
                <div className="birthday">
                  <h5 className="passenger-label">Дата рождения</h5>
                  <div className="birthday-selection">
                    <label className="passenger-label">
                      <input
                        type="date"
                        name="birthday"
                        className="birthday__input"
                        required
                        onChange={this.handleInputValue}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="checkbox">
                <input
                  id="limited-mobility3"
                  className="checkbox__input"
                  type="checkbox"
                  name="mobility"
                  checked={limitedMobility}
                  onChange={this.setMobility}
                />
                <label htmlFor="limited-mobility3" className="checkbox__label">
                  ограниченная подвижность
                </label>
              </div>
            </div>

            <div className="passport-data">
              <div className="select-wrapper select-wrapper_passport select-wrapper_child">
                <label className="passenger-label">Тип документа</label>
                <select
                  className="passenger-select passenger-select_passport"
                  defaultValue={adult ? 'adult' : 'child'}
                >
                  <option
                    value={adult}
                    disabled={child}
                    className="passenger-option"
                  >
                    Паспорт РФ
                  </option>
                  <option
                    value={child}
                    disabled={adult}
                    className="passenger-option passenger-option_child"
                  >
                    Свидетельство о рождении
                  </option>
                </select>
              </div>
              {adult ? (
                <Fragment>
                  <label className="passenger-label passenger-label_passport">
                    Серия
                    <br />
                    <input
                      className="passenger-input passenger-input_passport"
                      type="text"
                      name="passportSeries"
                      data-name="Серия"
                      placeholder=" &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95;"
                      maxLength="4"
                      onKeyUp={e =>
                        (e.target.value = e.target.value.replace(/[^\d]/g, ''))
                      }
                      onChange={this.handleInputValue}
                      required
                    />
                  </label>
                  <label className="passenger-label passenger-label_passport">
                    Номер
                    <br />
                    <input
                      className="passenger-input passenger-input_passport"
                      text="number"
                      name="passportNumber"
                      data-name="Номер"
                      placeholder=" &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95; &#95;&#95;"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      onKeyUp={e =>
                        (e.target.value = e.target.value.replace(/[^\d]/g, ''))
                      }
                      onChange={this.handleInputValue}
                      required
                    />
                  </label>
                </Fragment>
              ) : (
                <label className="passenger-label passenger-label_passport">
                  Номер
                  <br />
                  <input
                    className="passenger-input passenger-input_passport passenger-input_child"
                    type="text"
                    name="birthCertificate"
                    data-name="Номер"
                    maxLength="14"
                    placeholder="14 символов"
                    onChange={this.handleInputValue}
                    required
                  />
                </label>
              )}
            </div>
          </form>

          <div className="next-passenger">
            <button
              ref={this.confirmationButton}
              className={`${
                this.state.formValid ? 'next-passenger__link ' : 'hidden'
              }`}
              onClick={this.setConfirmation}
            >
              Подтвердить данные
            </button>

            <div
              ref={this.error}
              className={`${
                !this.state.formValid ? 'next-passenger-error' : 'hidden'
              }`}
            >
              <p className="next-passenger-error__text"></p>
            </div>
            <div
              className={`${
                this.state.formValid ? 'next-passenger-ready' : 'hidden'
              }`}
            >
              <p className="next-passenger-ready__text">Готово</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Passenger;
