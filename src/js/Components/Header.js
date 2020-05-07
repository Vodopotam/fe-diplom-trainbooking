import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import { getData } from '../data.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inputTo = React.createRef();
    this.inputFrom = React.createRef();
    this.direction = React.createRef();
    this.getCityFrom = this.getCityFrom.bind(this);
    this.getCityTo = this.getCityTo.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.findCityTo = this.findCityTo.bind(this);
    this.findCityFrom = this.findCityFrom.bind(this);
    this.searchTickets = this.searchTickets.bind(this);
    this.state = {
      citiesTo: [],
      citiesFrom: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  findCityFrom() {
    let str = this.inputFrom.current.value.toLowerCase();
    getData(`routes/cities?name=${str}`).then(result => {
      this.setState({
        citiesFrom: result,
      });
    });
  }

  getCityFrom(event) {
    this.inputFrom.current.value = event.target.innerText;
    this.props.cityFrom.name = event.target.innerText;
    this.props.cityFrom.id = event.target.dataset.id;
    this.setState({ citiesFrom: [] });
  }

  findCityTo() {
    let str = this.inputTo.current.value.toLowerCase();
    getData(`routes/cities?name=${str}`).then(result => {
      this.setState({
        citiesTo: result,
      });
    });
  }

  getCityTo(event) {
    this.inputTo.current.value = event.target.innerText;
    this.props.cityTo.name = event.target.innerText;
    this.props.cityTo.id = event.target.dataset.id;
    this.setState({ citiesTo: [] });
  }

  changeDirection() {
    let inputToText = this.inputTo.current.value;
    let inputFromText = this.inputFrom.current.value;
    this.inputFrom.current.value = inputToText;
    this.inputTo.current.value = inputFromText;
  }

  searchTickets() {
    console.log('search');
    getData(
      `routes?from_city_id=${this.props.cityFrom.id}&to_city_id=${this.props.cityTo.id}`
    ).then(result => {
      this.setState({
        citiesTo: result,
      });
    });
  }

  render() {
    const { citiesTo, citiesFrom } = this.state;
    if (!citiesTo || !citiesFrom) return;
    return (
      <header
        className={`header ${
          window.location.pathname === '/' ? '' : 'header__trainselection'
        }
                      ${
                        window.location.pathname === '/order-done/'
                          ? 'order-done'
                          : ''
                      }
              `}
      >
        <Link className="logo" id="logo-top" to="/">
          Лого
        </Link>
        <nav className="header-navigation">
          <div className="wrapper">
            <ul className="navigation-list">
              <li className="navigation-list__item">
                <Link
                  to="/#about-us"
                  scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                >
                  О нас
                </Link>
              </li>
              <li className="navigation-list__item">
                <Link
                  to="/#features"
                  scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                >
                  Как это работает
                </Link>
              </li>
              <li className="navigation-list__item">
                <Link
                  to="/#reviews"
                  scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                >
                  Отзывы
                </Link>
              </li>
              <li className="navigation-list__item">
                <Link
                  to="#contacts"
                  scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                >
                  Контакты
                </Link>
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

          {window.location.pathname !== '/order-done/' ? (
            <form
              className={`header-form ${
                window.location.pathname === '/'
                  ? ''
                  : 'header-form__full-block'
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
                    {citiesFrom.length > 0 ? (
                      <ul
                        id="cityFrom"
                        className="form-input-cities-list"
                        onClick={this.getCityFrom}
                      >
                        {citiesFrom.map(city => {
                          return (
                            <li
                              data-id={city._id}
                              className="form-input-cities-item"
                              key={city._id}
                            >
                              {city.name}
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
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
                    {citiesTo.length > 0 ? (
                      <ul
                        id="cityTo"
                        className="form-input-cities-list"
                        onClick={this.getCityTo}
                      >
                        {citiesTo.map(city => {
                          return (
                            <li
                              data-id={city._id}
                              className="form-input-cities-item"
                              key={city._id}
                            >
                              {city.name}
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
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
              <Link
                className="header-form-submit"
                to="/trainselection/"
                onClick={this.searchTickets}
              >
                Найти билеты
              </Link>
            </form>
          ) : null}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
