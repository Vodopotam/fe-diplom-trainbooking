import React from 'react';
import InputRange from 'react-input-range';
import LastTickets from './LastTickets.js';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.directionToBlock = React.createRef();
    this.directionFromBlock = React.createRef();
    this.state = {
      isHiddenBlockTo: true,
      isHiddenBlockFrom: true,
      isFirstClass: false,
      isSecondClass: false,
      isThirdClass: false,
      isFourthClass: false,
      isWifi: false,
      isExpress: false,
      filters: {},
      valuePrice: { min: 500, max: 5000 },
      valueTimeToDepature: { min: 0, max: 11 },
      valueTimeToArrival: { min: 0, max: 24 },
      valueTimeFromDeparture: { min: 0, max: 24 },
      valueTimeFromArrival: { min: 0, max: 24 },
    };
  }

  setFilters = () => {
    const filters = `price_from=${this.state.valuePrice.min}&price_to=${
      this.state.valuePrice.max
    }&${this.state.isFirstClass ? '&have_first_class=true' : ''}${
      this.state.isSecondClass ? '&have_second_class=true' : ''
    }${this.state.isThirdClass ? '&have_third_class=true' : ''}${
      this.state.isFourthClass ? '&have_fourth_class=true' : ''
    }${this.state.isWifi ? '&have_wifi=true' : ''}${
      this.state.isExpress ? '&is_express=true' : ''
    }`;
    this.props.setFilters(filters);
    this.props.getTickets(
      this.props.sortBy,
      this.props.limit,
      this.props.offset,
      filters
    );
  };

  handleFilters = async e => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    console.log(this.state);
    await this.setState({
      [name]: value,
    });
    this.setFilters();
  };

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
    console.log(this.props);
    return (
      <aside className="aside-block">
        <div className="trip-options">
          <form className="aside-date-form" action="#">
            <label className="aside-date-form__text">
              Дата поездки
              <br />
              <input
                defaultValue={this.props.trainInfo.dateTo}
                className="aside-date-form__input"
                type="date"
                name="date"
              />
            </label>
            <label className="aside-date-form__text">
              Дата возвращения
              <br />
              <input
                defaultValue={this.props.trainInfo.dateFrom}
                className="aside-date-form__input"
                type="date"
                name="date"
              />
            </label>
          </form>

          <form className="aside-options-choice" action="#">
            <label className="aside-options-choice__label">
              <input
                name="isFirstClass"
                type="checkbox"
                className="aside-options-choice__checkbox"
                checked={this.state.isFirstClass}
                onChange={this.handleFilters}
              />
              <span className="aside-options-choice__text">Люкс</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                name="isSecondClass"
                type="checkbox"
                className="aside-options-choice__checkbox"
                checked={this.state.isSecondClass}
                onChange={this.handleFilters}
              />
              <span className="aside-options-choice__text">Купе</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                name="isThirdClass"
                type="checkbox"
                className="aside-options-choice__checkbox"
                checked={this.state.isThirdClass}
                onChange={this.handleFilters}
              />
              <span className="aside-options-choice__text">Плацкарт</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                name="isFourthClass"
                type="checkbox"
                className="aside-options-choice__checkbox"
                checked={this.state.isFourthClass}
                onChange={this.handleFilters}
              />
              <span className="aside-options-choice__text">Сидячий</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                name="isWifi"
                type="checkbox"
                className="aside-options-choice__checkbox"
                checked={this.state.isWifi}
                onChange={this.handleFilters}
              />
              <span className="aside-options-choice__text">Wi-Fi</span>
            </label>

            <label className="aside-options-choice__label">
              <input
                name="isExpress"
                type="checkbox"
                className="aside-options-choice__checkbox"
                checked={this.state.isExpress}
                onChange={this.handleFilters}
              />
              <span className="aside-options-choice__text">Экспресс</span>
            </label>
          </form>

          <form className="aside-price">
            <h4 className="aside-price__title">Стоимость</h4>

            <InputRange
              draggableTrack
              maxValue={5000}
              minValue={500}
              formatLabel={value => `${value}`}
              step={100}
              value={this.state.valuePrice}
              onChange={value => this.setState({ valuePrice: value })}
              onChangeComplete={this.setFilters}
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

        <LastTickets />
      </aside>
    );
  }
}

export default SideBar;
