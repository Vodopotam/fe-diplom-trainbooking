import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import { getData } from '../data.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.inputTo = React.createRef();
        this.inputFrom = React.createRef();
        this.dateTo = React.createRef();
        this.dateFrom = React.createRef();
        this.direction = React.createRef();
        this.tip = React.createRef();
        this.state = {
            citiesTo: [],
            citiesFrom: [],
            cityFrom: {
                name: '',
                id: '',
            },
            cityTo: {
                name: '',
                id: '',
            },
            dateTo: '',
            dateFrom: ''
        };
        this.getCityFrom = this.getCityFrom.bind(this);
        this.getCityTo = this.getCityTo.bind(this);
        this.changeDirection = this.changeDirection.bind(this);
        this.findCityTo = this.findCityTo.bind(this);
        this.findCityFrom = this.findCityFrom.bind(this);
        this.searchTickets = this.searchTickets.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        if (sessionStorage.length > 0) {
            this.setState({
                cityFrom: {
                    name: JSON.parse(sessionStorage.trainInfo).cityFrom.name,
                    id: JSON.parse(sessionStorage.trainInfo).cityFrom.id
                },
                cityTo: {
                    name: JSON.parse(sessionStorage.trainInfo).cityTo.name,
                    id: JSON.parse(sessionStorage.trainInfo).cityTo.id
                },
                dateTo: JSON.parse(sessionStorage.dateInfo).dateTo,
                dateFrom: JSON.parse(sessionStorage.dateInfo).dateFrom,
            });
        } else {
            this.setState({
                cityFrom: {
                    name: '',
                },
                cityTo: {
                    name: '',
                },
                dateTo: '',
                dateFrom: ''
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.trainInfo !== this.props.trainInfo && sessionStorage.length === 0) {
            this.setState({
                cityFrom: {
                    name: '',
                },
                cityTo: {
                    name: '',
                },
                dateTo: '',
                dateFrom: ''
            })
        } else if (prevProps.trainInfo !== this.props.trainInfo && sessionStorage.length > 0) {
            this.setState({
                cityFrom: {
                    name: JSON.parse(sessionStorage.trainInfo).cityFrom.name,
                    id: JSON.parse(sessionStorage.trainInfo).cityFrom.id
                },
                cityTo: {
                    name: JSON.parse(sessionStorage.trainInfo).cityTo.name,
                    id: JSON.parse(sessionStorage.trainInfo).cityTo.id
                },
            })
        } else if (prevProps.dateInfo.dateTo !== this.props.dateInfo.dateTo || prevProps.dateInfo.dateFrom !== this.props.dateInfo.dateFrom) {
            this.setState({
                dateTo: this.props.dateInfo.dateTo || JSON.parse(sessionStorage.dateInfo).dateTo,
                dateFrom: this.props.dateInfo.dateFrom,
            })
        } else if (prevState.dateTo !== this.state.dateTo || prevState.dateFrom !== this.state.dateFrom) {
            this.setState({
                dateTo: this.dateTo.current.value,
                dateFrom: this.dateFrom.current.value,
            });
        } 
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
        this.setState({
            cityFrom: {
                name: event.target.innerText,
                id: event.target.dataset.id,
            },
        });
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

    setDate = async (e) => {
      const { target } = e;
        const value = target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    getCityTo(event) {
        this.inputTo.current.value = event.target.innerText;

        this.setState({
            cityTo: {
                name: event.target.innerText,
                id: event.target.dataset.id,
            },
        });
        this.setState({ citiesTo: [] });
    }

    changeDirection() {
        let cityToName = JSON.parse(sessionStorage.trainInfo).cityTo.name,
            cityToId = JSON.parse(sessionStorage.trainInfo).cityTo.id,
            cityFromName = JSON.parse(sessionStorage.trainInfo).cityFrom.name,
            cityFromId = JSON.parse(sessionStorage.trainInfo).cityFrom.id;
        this.inputFrom.current.value = cityToName;
        this.inputTo.current.value = cityFromName;

        this.setState({
            cityFrom: {
                name: cityToName,
                id: cityToId,
            },
            cityTo: {
                name: cityFromName,
                id: cityFromId,
            },
        });
    }

    searchTickets = async e => {
        if (!(this.state.cityFrom.name && this.state.cityTo.name)) {
            e.preventDefault();
        } else {

            this.props.setTrainInfo({
                cityFrom: {
                    name: this.state.cityFrom.name,
                    id: this.state.cityFrom.id,
                },
                cityTo: {
                    name: this.state.cityTo.name,
                    id: this.state.cityTo.id,
                },

            });

            const dateInfo = {
                dateTo: this.dateTo.current.value,
                dateFrom: this.dateFrom.current.value,
            }
            this.props.setDateInfo(dateInfo)

            this.props.getTickets();
        }
    };

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
                      }`}
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
                <h3 className="header-form-title">Выберите направление</h3>
                <div className="header-form-input__from">
                  <input
                    defaultValue={this.state.cityFrom.name}
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
                    defaultValue={this.state.cityTo.name}
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
                  onChange={this.setDate}
                    ref={this.dateTo}
                    value={this.state.dateTo}
                    className="header-form-input"
                    type="date"
                    name="dateTo"
                  />
                </div>
                <div className="header-form-input__from">
                  <input
                  onChange={this.setDate}
                    ref={this.dateFrom}
                    value={this.state.dateFrom}
                    className="header-form-input"
                    type="date"
                    name="dateFrom"
                  />
                </div>
              </div>

              <p ref={this.tip} className={'header-prompt'}></p>

              <Link
                className={`header-form-submit ${
                  !this.state.cityFrom.name || !this.state.cityTo.name
                    ? 'header-form-submit__disabled'
                    : ''
                }`}
                to="/search/trainselection/"
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