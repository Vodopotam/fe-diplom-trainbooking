import React from 'react';

class Passenger extends React.Component {
  constructor(props) {
    super(props);
    this.newPassenger = React.createRef();
  }

  render() {
    return (
      <div className="passenger" id={`passenger${this.props.number}`}>
        <div
          className="passenger-short-block"
          onClick={() => this.newPassenger.current.classList.toggle('hidden')}
        >
          <h5 className="passenger-short-block__title passenger-short-block_full-hidden">
            Пассажир {this.props.number}
          </h5>
        </div>
        <div className="passenger-full-block hidden" ref={this.newPassenger}>
          <form method="post" action="#" className="passenger-form">
            <div className="personal-data">
              <div className="select-wrapper">
                <select className="passenger-select">
                  <option className="passenger-option">Взрослый</option>
                  <option className="passenger-option">Детский</option>
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
                    <label className="passenger-label" htmlFor="male3">
                      <input
                        type="radio"
                        name="sex"
                        value="мужской"
                        id="male3"
                      />
                      <span className="radio-control male"></span>
                    </label>
                    <label className="passenger-label" htmlFor="female3">
                      <input
                        type="radio"
                        name="sex"
                        value="женский"
                        id="female3"
                      />
                      <span className="radio-control female"></span>
                    </label>
                  </div>
                </div>
                <div className="birthday">
                  <h5 className="passenger-label">Дата рождения</h5>
                  <div className="birthday-selection">
                    <label className="passenger-label" htmlFor="birthday3">
                      <input
                        type="date"
                        name="birthday"
                        className="birthday__input"
                        id="birthday3"
                        required
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
                  value="subscribed"
                />
                <label htmlFor="limited-mobility3" className="checkbox__label">
                  ограниченная подвижность
                </label>
              </div>
            </div>

            <div className="passport-data">
              <div className="select-wrapper select-wrapper_passport select-wrapper_child">
                <label className="passenger-label">Тип документа</label>
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
            <input
              type="submit"
              className="next-passenger__link"
              value="Следующий пассажир"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Passenger;
