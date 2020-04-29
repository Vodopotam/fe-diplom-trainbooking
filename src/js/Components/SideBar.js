import React from 'react';
import InputRange from 'react-input-range';
// import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    // this.inputMin = React.createRef();
    // this.inputMax = React.createRef();
    // this.priceSlider = React.createRef();
    this.directionToBlock = React.createRef();
    this.directionFromBlock = React.createRef();
    this.state = {
      isHiddenBlockTo: true,
      isHiddenBlockFrom: true,
      valuePrice: { min: 1920, max: 4500 },
      valueTimeToDepature: { min: 0, max: 11 },
      valueTimeToArrival: { min: 0, max: 24 },
      valueTimeFromDeparture: { min: 0, max: 24 },
      valueTimeFromArrival: { min: 0, max: 24 },
    };
  }

  changeIconBlockTo(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockTo: !this.state.isHiddenBlockTo,
    });
  }

  changeIconBlockFrom(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockFrom: !this.state.isHiddenBlockFrom,
    });
  }

  render() {
    return (
      <aside className="aside-block">
        <div className="trip-options">
          <form className="aside-date-form" action="#">
            <label className="aside-date-form__text">
              Дата поездки
              <br />
              <input
                className="aside-date-form__input"
                type="date"
                name="date"
              />
            </label>
            <label className="aside-date-form__text">
              Дата возвращения
              <br />
              <input
                className="aside-date-form__input"
                type="date"
                name="date"
              />
            </label>
          </form>

          <form className="aside-options-choice" action="#">
            <label className="aside-options-choice__label">
              <input
                type="checkbox"
                className="aside-options-choice__checkbox"
              />
              <span className="aside-options-choice__text">Купе</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                type="checkbox"
                className="aside-options-choice__checkbox"
              />
              <span className="aside-options-choice__text">Плацкарт</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                type="checkbox"
                className="aside-options-choice__checkbox"
              />
              <span className="aside-options-choice__text">Сидячий</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                type="checkbox"
                className="aside-options-choice__checkbox"
              />
              <span className="aside-options-choice__text">Люкс</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                type="checkbox"
                className="aside-options-choice__checkbox"
              />
              <span className="aside-options-choice__text">Wi-Fi</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                type="checkbox"
                className="aside-options-choice__checkbox"
              />
              <span className="aside-options-choice__text">Экспресс</span>
            </label>
          </form>

          <form className="aside-price">
            <h4 className="aside-price__title">Стоимость</h4>

            <InputRange
              draggableTrack
              maxValue={7000}
              minValue={1920}
              formatLabel={value => `${value}`}
              step={100}
              value={this.state.valuePrice}
              onChange={value => this.setState({ valuePrice: value })}
            />
          </form>

          <div className="direction-to">
            <div className="direction-short-block">
              <h4 className="direction-to__title">Туда</h4>
              <div
                className={`direction-to__more ${
                  this.state.isHiddenBlockTo ? 'more' : 'less'
                }`}
                onClick={() =>
                  this.changeIconBlockTo(this.directionToBlock.current)
                }
              ></div>
            </div>
            <div
              className="direction-full-block hidden"
              ref={this.directionToBlock}
            >
              <h4 className="aside-time__title">Время отбытия</h4>

              <InputRange
                draggableTrack
                maxValue={24}
                minValue={0}
                formatLabel={value => `${value.toFixed(2)}`}
                step={1}
                value={this.state.valueTimeToDepature}
                onChange={value =>
                  this.setState({ valueTimeToDepature: value })
                }
              />

              <h4 className="aside-time__title aside-time__title_right">
                Время прибытия
              </h4>

              <InputRange
                draggableTrack
                maxValue={24}
                minValue={0}
                formatLabel={value => `${value.toFixed(2)}`}
                step={1}
                value={this.state.valueTimeToArrival}
                onChange={value => this.setState({ valueTimeToArrival: value })}
              />
            </div>
          </div>

          <div className="direction-from">
            <div className="direction-short-block">
              <h4 className="direction-from__title">Обратно</h4>
              <div
                className={`direction-from__more ${
                  this.state.isHiddenBlockFrom ? 'more' : 'less'
                }`}
                onClick={() =>
                  this.changeIconBlockFrom(this.directionFromBlock.current)
                }
              ></div>
            </div>
            <div
              className="direction-full-block hidden"
              ref={this.directionFromBlock}
            >
              <h4 className="aside-time__title">Время отбытия</h4>
              <InputRange
                draggableTrack
                maxValue={24}
                minValue={0}
                formatLabel={value => `${value.toFixed(2)}`}
                step={1}
                value={this.state.valueTimeFromDeparture}
                onChange={value =>
                  this.setState({ valueTimeFromDeparture: value })
                }
              />
              <h4 className="aside-time__title aside-time__title_right">
                Время прибытия
              </h4>
              <InputRange
                draggableTrack
                maxValue={24}
                minValue={0}
                formatLabel={value => `${value.toFixed(2)}`}
                step={1}
                value={this.state.valueTimeFromArrival}
                onChange={value =>
                  this.setState({ valueTimeFromArrival: value })
                }
              />
            </div>
          </div>
        </div>

        <div className="last-tickets">
          <h4 className="last-tickets__title">Последние билеты</h4>

          <div className="last-ticket">
            <div className="last-ticket__top">
              <div className="last-ticket__from">
                <p className="last-ticket__from-city">Санкт-Петербург</p>
                <p className="last-ticket__from-station">
                  Курский
                  <br />
                  вокзал
                </p>
              </div>
              <div className="last-ticket__to">
                <p className="last-ticket__to-city">Самара</p>
                <p className="last-ticket__to-station">
                  Московский
                  <br />
                  вокзал
                </p>
              </div>
            </div>
            <div className="last-ticket__bottom">
              <ul className="ticket-options">
                <li className="ticket-options__wifi"></li>
                <li className="ticket-options__speed"></li>
                <li className="ticket-options__comfort"></li>
              </ul>
              <p className="last-ticket__price">
                от <span className="last-ticket__price-number">2 500</span>{' '}
                <span className="last-ticket__price-currency">&#x20bd;</span>
              </p>
            </div>
          </div>

          <div className="last-ticket">
            <div className="last-ticket__top">
              <div className="last-ticket__from">
                <p className="last-ticket__from-city">Москва</p>
                <p className="last-ticket__from-station">
                  Курский
                  <br />
                  вокзал
                </p>
              </div>
              <div className="last-ticket__to">
                <p className="last-ticket__to-city">Казань</p>
                <p className="last-ticket__to-station">
                  Московский
                  <br />
                  вокзал
                </p>
              </div>
            </div>
            <div className="last-ticket__bottom">
              <ul className="ticket-options">
                <li className="ticket-options__wifi"></li>
                <li className="ticket-options__speed"></li>
                <li className="ticket-options__comfort"></li>
              </ul>
              <p className="last-ticket__price">
                от <span className="last-ticket__price-number">3 500</span>{' '}
                <span className="last-ticket__price-currency">&#x20bd;</span>
              </p>
            </div>
          </div>

          <div className="last-ticket">
            <div className="last-ticket__top">
              <div className="last-ticket__from">
                <p className="last-ticket__from-city">Казань</p>
                <p className="last-ticket__from-station">
                  Курский
                  <br />
                  вокзал
                </p>
              </div>
              <div className="last-ticket__to">
                <p className="last-ticket__to-city">Нижний Новгород</p>
                <p className="last-ticket__to-station">
                  Московский
                  <br />
                  вокзал
                </p>
              </div>
            </div>
            <div className="last-ticket__bottom">
              <ul className="ticket-options">
                <li className="ticket-options__wifi"></li>
                <li className="ticket-options__speed"></li>
                <li className="ticket-options__comfort"></li>
              </ul>
              <p className="last-ticket__price">
                от <span className="last-ticket__price-number">3 800</span>{' '}
                <span className="last-ticket__price-currency">&#x20bd;</span>
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideBar;
