import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../js/Components/SideBar.js';
import CoachSitting from '../../js/Components/CoachSitting.js';
import CoachReserved from '../../js/Components/CoachReserved.js';
import CoachCompartment from '../../js/Components/CoachCompartment.js';
import CoachLuxe from '../../js/Components/CoachLuxe.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class PlaceSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="content">
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
              <h4 className="placeselection_header">Выбор мест</h4>

              <div className="main-block__wrapper">
                <div className="placeselection-train-info__direction-to">
                  <div className="other-train">
                    <div className="other-train__arrow"></div>
                    <Link to="/trainselection/" className="other-train__button">
                      Выбрать другой поезд
                    </Link>
                  </div>
                  <div className="placeselection-time-info__direction-to">
                    <div className="train-info train-info_placeselection">
                      <div className="train-info__number train-info__number_placeselection">
                        116C
                      </div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          Адлер &#8594;
                        </span>
                        <br />
                        Москва &#8594;
                        <br /> Санкт-Петербург
                      </div>
                    </div>

                    <div className="time-info__departure">
                      <div className="time-info__departure-time">00:10</div>
                      <div className="time-info__departure-city">Москва</div>
                      <div className="time-info__departure-station">
                        Курский вокзал
                      </div>
                    </div>
                    <div className="time-info__duration time-info__duration_placeselection"></div>
                    <div className="time-info__arrival">
                      <div className="time-info__arrival-time">09:52</div>
                      <div className="time-info__arrival-city">
                        Санкт-Петербург
                      </div>
                      <div className="time-info__arrival-station">
                        Ладожский вокзал
                      </div>
                    </div>
                    <div className="time-info-duration-placeselection">
                      9 часов
                      <br />
                      42 минуты
                    </div>
                  </div>

                  <h4 className="placeselection-train-info__header">
                    Количество билетов
                  </h4>

                  <ul className="placeselection-tickets">
                    <li className="placeselection-tickets__adults">
                      <div className="placeselection-tickets__total">
                        <label className="placeselection-tickets__total-label">
                          Взрослых
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="5"
                          defaultValue="3"
                          step="1"
                        />
                      </div>
                      <p className="placeselection-tickets__text">
                        Можно добавить еще 3 пассажиров
                      </p>
                    </li>
                    <li className="placeselection-tickets__children active">
                      <div className="placeselection-tickets__total">
                        <label className="placeselection-tickets__total-label">
                          Детских
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="5"
                          defaultValue="2"
                          step="1"
                        />
                      </div>
                      <p className="placeselection-tickets__text">
                        Можно добавить еще 3 детей до 10 лет.Свое место в
                        вагоне, как у взрослых, но дешевле в среднем на 50-65%
                      </p>
                    </li>
                    <li className="placeselection-tickets__children-without-place empty">
                      <div className="placeselection-tickets__total">
                        <label className="placeselection-tickets__total-label">
                          Детских &laquo;без места&raquo;
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="5"
                          defaultValue="0"
                          step="1"
                        />
                      </div>
                    </li>
                  </ul>

                  <h4 className="placeselection-train-info__header">
                    Тип вагона
                  </h4>

                  <Tabs>
                    <TabList className="coach-types">
                      <Tab selected className="coach-type coach-type__sitting">
                        Сидячий
                      </Tab>
                      <Tab className="coach-type coach-type__reserved">
                        Плацкарт
                      </Tab>
                      <Tab className="coach-type coach-type__compartment">
                        Купе
                      </Tab>
                      <Tab className="coach-type coach-type__luxe">Люкс</Tab>
                    </TabList>

                    <TabPanel>
                      <CoachSitting />
                    </TabPanel>
                    <TabPanel>
                      <CoachReserved />
                    </TabPanel>
                    <TabPanel>
                      <CoachCompartment />
                    </TabPanel>
                    <TabPanel>
                      <CoachLuxe />
                    </TabPanel>
                  </Tabs>

                  <Tabs>
                    <TabList className="coach-types">
                      <Tab selected className="coach-type coach-type__sitting">
                        Сидячий
                      </Tab>
                      <Tab className="coach-type coach-type__reserved">
                        Плацкарт
                      </Tab>
                      <Tab className="coach-type coach-type__compartment">
                        Купе
                      </Tab>
                      <Tab className="coach-type coach-type__luxe">Люкс</Tab>
                    </TabList>

                    <TabPanel>
                      <CoachSitting />
                    </TabPanel>
                    <TabPanel>
                      <CoachReserved />
                    </TabPanel>
                    <TabPanel>
                      <CoachCompartment />
                    </TabPanel>
                    <TabPanel>
                      <CoachLuxe />
                    </TabPanel>
                  </Tabs>
                </div>

                <Link
                  to="/passengers/"
                  className="goto-passengers-button active"
                >
                  Далее
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceSelection;
