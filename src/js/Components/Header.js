import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inputTo = React.createRef();
    this.inputFrom = React.createRef();
    this.direction = React.createRef();
    this.findCityTo = this.findCityTo.bind(this);
    this.findCityFrom = this.findCityFrom.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.state = {
      citiesTo: [],
      citiesFrom: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  findCityTo() {
    let str = this.inputTo.current.value.toLowerCase();
    fetch(
      `https://netology-trainbooking.herokuapp.com/routes/cities?name=${str}`
    )
      .then(response => response.json())
      .then(result => {
        this.setState({
          citiesTo: result,
        });
      });
  }

  findCityFrom() {
    let str = this.inputFrom.current.value.toLowerCase();
    fetch(
      `https://netology-trainbooking.herokuapp.com/routes/cities?name=${str}`
    )
      .then(response => response.json())
      .then(result => {
        this.setState({
          citiesFrom: result,
        });
      });
  }

  changeDirection() {
    let inputToText = this.inputTo.current.value;
    let inputFromText = this.inputFrom.current.value;
    this.inputFrom.current.value = inputToText;
    this.inputTo.current.value = inputFromText;
  }

  render() {
    const { citiesTo, citiesFrom } = this.state;
    if (!citiesTo || !citiesFrom) return;
    return (
      <header
        className={`header ${
          window.location.pathname === '/' ? '' : 'header__trainselection'
        }`}
      >
        <Link className="logo" id="logo-top" to="/">
          Лого
        </Link>
        <nav className="header-navigation">
          <div className="wrapper">
            <ul className="navigation-list">
              <li className="navigation-list__item">
                <Link to="/#about-us" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>О нас</Link>
              </li>
              <li className="navigation-list__item">
                <Link to="/#features" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>Как это работает</Link>
              </li>
              <li className="navigation-list__item">
                <Link to="/#reviews" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>Отзывы</Link>
              </li>
              <li className="navigation-list__item">
                <Link to="#contacts" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>Контакты</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`header-form-container ${
            window.location.pathname === '/'
              ? ''
              : 'header-form-container__full-block'
          }`}
        >
          <h1
            className={`header-title ${
              window.location.pathname === '/' ? '' : 'header-title__full-block'
            }`}
          >
            Вся жизнь - <br />
            <strong>путешествие!</strong>
          </h1>
          <form
            className={`header-form ${
              window.location.pathname === '/' ? '' : 'header-form__full-block'
            }`}
            action="TrainSelection.html"
          >
            <div className="direction">
              <h3 className="header-form-title">Направление</h3>
              <div className="header-form-input__from">
                <input
                  ref={this.inputFrom}
                  className="header-form-input"
                  type="text"
                  name="from"
                  autoComplete="off"
                  list="cityFrom"
                  placeholder="Откуда"
                  onChange={this.findCityFrom}
                  required
                />
                <div className="form-input-cities form-input-cities__from">
                  <datalist id="cityFrom" className="form-input-cities-list">
                    {citiesFrom.length > 0
                      ? citiesFrom.map(city => (
                          <option
                            className="form-input-cities-item"
                            key={city._id}
                          >
                            {city.name}
                          </option>
                        ))
                      : null}
                  </datalist>
                </div>
              </div>
              <div
                ref={this.direction}
                className="direction-update"
                onClick={this.changeDirection}
              ></div>
              <div className="header-form-input__to">
                <input
                  ref={this.inputTo}
                  className="header-form-input header-form-input__to"
                  type="text"
                  name="to"
                  placeholder="Куда"
                  autoComplete="off"
                  list="cityTo"
                  onChange={this.findCityTo}
                  required
                />

                <div className="form-input-cities form-input-cities__to">
                  <datalist id="cityTo" className="form-input-cities-list">
                    {citiesTo.length > 0
                      ? citiesTo.map(city => (
                          <option
                            className="form-input-cities-item"
                            key={city._id}
                          >
                            {city.name}
                          </option>
                        ))
                      : null}
                  </datalist>
                </div>
              </div>
            </div>
            <div className="date">
              <h3 className="header-form-title">Дата</h3>
              <div className="header-form-input__from">
                <input
                  className="header-form-input"
                  type="date"
                  name="arrival"
                />
              </div>
              <div className="header-form-input__from">
                <input
                  className="header-form-input"
                  type="date"
                  name="departure"
                />
              </div>
            </div>
            <Link className="header-form-submit" to="/trainselection/">
              Найти билеты
            </Link>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
