import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../js/data.js';

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}


render() {
	console.log(this.props)
	return (
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
		)
}}

export default Ticket;