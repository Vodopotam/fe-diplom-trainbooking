import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../js/Components/SideBar.js';
import Ticket from '../../js/Components/Ticket.js';
import { getData } from '../../js/data.js';

class TrainSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tickets: [],
            quantity: ''
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        getData(`routes?from_city_id=${this.props.cityFrom.id}&to_city_id=${this.props.cityTo.id}`)
            .then(result => {

                this.setState({
                    tickets: result.items || [],
                    quantity: result.items ? result.items.length : 0,
                });
                console.log(result.items)
            });
    }



    render() {
        const { loading, quantity, tickets } = this.state;
        console.log(this.props.location);

        return (
            <div className="content">
        
        {loading ? (
          <div className="main-information loader">
            <div className="wrapper">
              <p className="loader-text">Идет поиск</p>
              <img
                src={require('../../img/loader.gif')}
                className="loader-img"
                alt="loader"
              />
            </div>
          </div>
        ) : (
          <div className="main-information">
            <ul className="order-navigation">
              <li className="order-navigation__list active">
                <span></span>
                <p className="order-navigation__text">Билеты</p>
              </li>
              <li className="order-navigation__list">
                <span></span>
                <p className="order-navigation__text">Пассажиры</p>
              </li>
              <li className="order-navigation__list">
                <span></span>
                <p className="order-navigation__text">Оплата</p>
              </li>
              <li className="order-navigation__list">
                <span></span>
                <p className="order-navigation__text">Проверка</p>
              </li>
            </ul>
            <div className="wrapper">
              <SideBar />

              <main className="main-block">
                <div className="results">
                  <div className="results-found">
                    найдено <span className="results-found__number">{this.state.quantity}</span>
                  </div>

                  <div className="results-sortby">
                    <p className="results-sortby__text">сортировать по: </p>
                    <select className="sort-by__selection" tabIndex="1">
                      <option className="results-sortby__label" value="time">
                        времени
                      </option>
                      <option className="results-sortby__label" value="price">
                        стоимости
                      </option>
                      <option
                        className="results-sortby__label"
                        value="duration"
                      >
                        длительности
                      </option>
                    </select>
                  </div>
                  {/*<div className="sort-by__selection" tabIndex="1" 
										onChange={this.sortBy} 
										ref={elem => this.select = elem}>
								  <input className="results-sortby__input" name="select" type="radio" id="opt1" value="time" />
								  <label htmlFor="opt1" className="results-sortby__label">времени</label>
								  <input className="results-sortby__input" name="select" type="radio" id="opt2" value="price" />
								  <label htmlFor="opt2" className="results-sortby__label">стоимости</label>
								  <input className="results-sortby__input" name="select" type="radio" id="opt3" value="duration" />
								  <label htmlFor="opt3" className="results-sortby__label">длительности</label>
								</div>
							</div> */}

                  <form className="results-quantity">
                    <p className="">показывать по:</p>
                    <label>
                      <input
                        className="results-quantity__radio"
                        type="radio"
                        name="quantity"
                      />
                      <span className="results-quantity__text">5</span>
                    </label>
                    <label>
                      <input
                        className="results-quantity__radio"
                        type="radio"
                        name="quantity"
                      />
                      <span className="results-quantity__text">10</span>
                    </label>
                    <label>
                      <input
                        className="results-quantity__radio"
                        type="radio"
                        name="quantity"
                      />
                      <span className="results-quantity__text">20</span>
                    </label>
                  </form>
                </div>

                <div className="tickets">
                {tickets.length > 0 ? 
                	tickets.map(ticket => {
                	return ( <Ticket {...this.state} {...this.props} /> )
                })
                	: null}

                 {/*} <div className="ticket">
                    <div className="train-info">
                      <div className="train-info__number">116C</div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          Адлер &#8594;
                        </span>
                        <br />
                        Москва &#8594;
                        <br /> Санкт-Петербург
                      </div>
                    </div>

                    <div className="time-info">
                      <div className="time-info__direction-to">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration">9 : 42</div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                      <div className="time-info__direction-from">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration time-info__duration_reverse">
                          9 : 42
                        </div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="coach-choice">
                      <ul className="coaches">
                        <li className="coaches__sitting coaches_type">
                          <p className="coaches__name">Сидячий</p>
                          <div className="coaches__quantity">88</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">1920</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__reserved coaches_type">
                          <p className="coaches__name">Плацкарт</p>
                          <div className="coaches__quantity">52</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">2530</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__compartment coaches_type">
                          <p className="coaches__name">Купе</p>
                          <ul className="coaches__name-subnames">
                            <li className="coaches__name-subname">
                              <div className="coaches__name">верхние</div>
                              <div className="coaches__quantity">19</div>
                              <div className="coaches__price-number">
                                2920{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                            <li className="coaches__name-subname">
                              <div className="coaches__name">нижние</div>
                              <div className="coaches__quantity">5</div>
                              <div className="coaches__price-number">
                                3530{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="coaches__quantity">24</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">3820</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__luxe coaches_type">
                          <p className="coaches__name">Люкс</p>
                          <div className="coaches__quantity">15</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">4950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul className="ticket-options">
                        <li className="ticket-options__wifi"></li>
                        <li className="ticket-options__speed"></li>
                        <li className="ticket-options__comfort"></li>
                      </ul>
                      <Link
                        to="/placeselection/"
                        className="place-selection-button"
                      >
                        Выбрать места
                      </Link>
                    </div>
                  </div>

                  <div className="ticket">
                    <div className="train-info">
                      <div className="train-info__number">020У</div>
                      <div className="train-info__direction">
                        Москва &#8594;
                        <br /> Санкт-Петербург
                        <br />
                        &#171;Мегаполис&#187;
                      </div>
                    </div>

                    <div className="time-info">
                      <div className="time-info__direction-to">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:20</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Ленинградский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration">8 : 39</div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">08:59</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Московский вокзал
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="coach-choice">
                      <ul className="coaches">
                        <li className="coaches__compartment coaches_type">
                          <p className="coaches__name">Купе</p>
                          <ul className="coaches__name-subnames">
                            <li className="coaches__name-subname">
                              <div className="coaches__name">верхние</div>
                              <div className="coaches__quantity">19</div>
                              <div className="coaches__price-number">
                                2920{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                            <li className="coaches__name-subname">
                              <div className="coaches__name">нижние</div>
                              <div className="coaches__quantity">5</div>
                              <div className="coaches__price-number">
                                3530{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="coaches__quantity">90</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">3950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__luxe coaches_type">
                          <p className="coaches__name">Люкс</p>
                          <div className="coaches__quantity">31</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">4950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul className="ticket-options">
                        <li className="ticket-options__wifi"></li>
                        <li className="ticket-options__speed"></li>
                        <li className="ticket-options__comfort"></li>
                      </ul>
                      <Link
                        to="/placeselection/"
                        className="place-selection-button"
                      >
                        Выбрать места
                      </Link>
                    </div>
                  </div>

                  <div className="ticket">
                    <div className="train-info">
                      <div className="train-info__number">116C</div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          Нижний Новгород &#8594;
                        </span>
                        <br />
                        Москва &#8594;
                        <br /> Санкт-Петербург
                        <br />
                        &#171;Волга&#187;
                      </div>
                    </div>

                    <div className="time-info">
                      <div className="time-info__direction-to">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:41</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Ленинградский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration">8 : 32</div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:13</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                      <div className="time-info__direction-from">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:41</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Ленинградский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration time-info__duration_reverse">
                          8 : 32
                        </div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:13</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="coach-choice">
                      <ul className="coaches">
                        <li className="coaches__reserved coaches_type">
                          <p className="coaches__name">Плацкарт</p>
                          <div className="coaches__quantity">52</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">2530</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__compartment coaches_type">
                          <p className="coaches__name">Купе</p>
                          <ul className="coaches__name-subnames">
                            <li className="coaches__name-subname">
                              <div className="coaches__name">верхние</div>
                              <div className="coaches__quantity">19</div>
                              <div className="coaches__price-number">
                                2920{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                            <li className="coaches__name-subname">
                              <div className="coaches__name">нижние</div>
                              <div className="coaches__quantity">5</div>
                              <div className="coaches__price-number">
                                3530{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="coaches__quantity">24</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">3820</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__luxe coaches_type">
                          <p className="coaches__name">Люкс</p>
                          <div className="coaches__quantity">15</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">4950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul className="ticket-options">
                        <li className="ticket-options__wifi"></li>
                        <li className="ticket-options__speed"></li>
                        <li className="ticket-options__comfort"></li>
                      </ul>
                      <Link
                        to="/placeselection/"
                        className="place-selection-button"
                      >
                        Выбрать места
                      </Link>
                    </div>
                  </div>

                  <div className="ticket">
                    <div className="train-info">
                      <div className="train-info__number">116C</div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          Адлер &#8594;
                        </span>
                        <br />
                        Москва &#8594;
                        <br /> Санкт-Петербург
                      </div>
                    </div>

                    <div className="time-info">
                      <div className="time-info__direction-to">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration">9 : 42</div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                      <div className="time-info__direction-from">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration time-info__duration_reverse">
                          9 : 42
                        </div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="coach-choice">
                      <ul className="coaches">
                        <li className="coaches__sitting coaches_type">
                          <p className="coaches__name">Сидячий</p>
                          <div className="coaches__quantity">88</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">1920</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__reserved coaches_type">
                          <p className="coaches__name">Плацкарт</p>
                          <div className="coaches__quantity">52</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">2530</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__compartment coaches_type">
                          <p className="coaches__name">Купе</p>
                          <ul className="coaches__name-subnames">
                            <li className="coaches__name-subname">
                              <div className="coaches__name">верхние</div>
                              <div className="coaches__quantity">19</div>
                              <div className="coaches__price-number">
                                2920{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                            <li className="coaches__name-subname">
                              <div className="coaches__name">нижние</div>
                              <div className="coaches__quantity">5</div>
                              <div className="coaches__price-number">
                                3530{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="coaches__quantity">24</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">3820</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__luxe coaches_type">
                          <p className="coaches__name">Люкс</p>
                          <div className="coaches__quantity">15</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">4950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul className="ticket-options">
                        <li className="ticket-options__wifi"></li>
                        <li className="ticket-options__speed"></li>
                        <li className="ticket-options__comfort"></li>
                      </ul>
                      <Link
                        to="/placeselection/"
                        className="place-selection-button"
                      >
                        Выбрать места
                      </Link>
                    </div>
                  </div>

                  <div className="ticket">
                    <div className="train-info">
                      <div className="train-info__number">116C</div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          Адлер &#8594;
                        </span>
                        <br />
                        Москва &#8594;
                        <br /> Санкт-Петербург
                      </div>
                    </div>

                    <div className="time-info">
                      <div className="time-info__direction-to">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration">9 : 42</div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                      <div className="time-info__direction-from">
                        <div className="time-info__departure">
                          <div className="time-info__departure-time">00:10</div>
                          <div className="time-info__departure-city">
                            Москва
                          </div>
                          <div className="time-info__departure-station">
                            Курский вокзал
                          </div>
                        </div>
                        <div className="time-info__duration time-info__duration_reverse">
                          9 : 42
                        </div>
                        <div className="time-info__arrival">
                          <div className="time-info__arrival-time">09:52</div>
                          <div className="time-info__arrival-city">
                            Санкт-Петербург
                          </div>
                          <div className="time-info__arrival-station">
                            Ладожский вокзал
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="coach-choice">
                      <ul className="coaches">
                        <li className="coaches__sitting coaches_type">
                          <p className="coaches__name">Сидячий</p>
                          <div className="coaches__quantity">88</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">1920</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__reserved coaches_type">
                          <p className="coaches__name">Плацкарт</p>
                          <div className="coaches__quantity">52</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">2530</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__compartment coaches_type">
                          <p className="coaches__name">Купе</p>
                          <ul className="coaches__name-subnames">
                            <li className="coaches__name-subname">
                              <div className="coaches__name">верхние</div>
                              <div className="coaches__quantity">19</div>
                              <div className="coaches__price-number">
                                2920{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                            <li className="coaches__name-subname">
                              <div className="coaches__name">нижние</div>
                              <div className="coaches__quantity">5</div>
                              <div className="coaches__price-number">
                                3530{' '}
                                <span className="coaches__price-currency">
                                  &#x20bd;
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="coaches__quantity">24</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">3820</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                        <li className="coaches__luxe coaches_type">
                          <p className="coaches__name">Люкс</p>
                          <div className="coaches__quantity">15</div>
                          <div className="coaches__price">
                            от{' '}
                            <span className="coaches__price-number">4950</span>{' '}
                            <span className="coaches__price-currency">
                              &#x20bd;
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul className="ticket-options">
                        <li className="ticket-options__wifi"></li>
                        <li className="ticket-options__speed"></li>
                        <li className="ticket-options__comfort"></li>
                      </ul>
                      <Link
                        to="/placeselection/"
                        className="place-selection-button"
                      >
                        Выбрать места
                      </Link>
                    </div>
                  </div>*/}
                </div>

                <div className="pagination">
                  <div className="angle-back">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  <ul className="pagination-pages">
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                  </ul>
                  <div className="angle-forward">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </main>
            </div>
          </div>
        )
    }

    <script type="text/javascript" src="js/TrainSelection.js"></script> <
    script
    defer
    src = "https://use.fontawesome.com/releases/v5.0.9/js/all.js"
    integrity = "sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
    crossOrigin = "anonymous" >
        < /script> <
        /div>
);
}
}

export default TrainSelection;