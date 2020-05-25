import React from 'react';

class SideBarWithData extends React.Component {
  constructor(props) {
    super(props);
    this.directionToBlock = React.createRef();
    this.directionFromBlock = React.createRef();
    this.passengersBlock = React.createRef();
    this.state = {
      isHiddenBlockTo: false,
      isHiddenBlockFrom: false,
      isHiddenBlockPassengers: false,
    };
  }

  changeIconBlockTo(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockTo: !this.state.isHiddenBlockTo,
    });
  }

  changeIconBlockPassengers(item) {
    item.classList.toggle('hidden');
    this.setState({
      isHiddenBlockPassengers: !this.state.isHiddenBlockPassengers,
    });
  }

  render() {
    const passengersInfo = JSON.parse(sessionStorage.passengersInfo),
      trainInfo = JSON.parse(sessionStorage.trainInfo),
      currentCoach = JSON.parse(sessionStorage.currentCoach);
    if (!currentCoach || !passengersInfo || !trainInfo) return null;
    return (
      <aside className="aside-block">
        <div className="trip-options">
          <h4 className="passengers-header">Детали поездки</h4>
          <div className="direction-to direction-to_passengers">
            <div className="direction-short-block">
              <h4 className="direction-to__title direction-to__title_passengers">
                Туда
              </h4>
              <p className="direction-to__date">{trainInfo.dateFrom}</p>
              <div
                className={`direction-to__more ${
                  this.state.isHiddenBlockTo ? 'more' : 'less'
                }`}
                onClick={() =>
                  this.changeIconBlockTo(this.directionToBlock.current)
                }
              ></div>
            </div>
            <div className="direction-full-block" ref={this.directionToBlock}>
              <div className="train-number">
                <p className="train-number__text">&#8470; Поезда</p>
                <p className="train-number__number">
                  {currentCoach.train.name.split('-')[1]}
                </p>
              </div>
              <div className="train-route">
                <p className="train-route__text">Название</p>
                <p className="train-route__cities">
                  {currentCoach.train.name.split('-')[0]}
                </p>
              </div>

              <div className="train-info-time">
                <div className="time-info__departure time-info__departure_passengers">
                  <p className="time-info__departure-time">
                    {new Date(
                      currentCoach.from.datetime * 1000
                    ).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    <br />
                    <span className="direction-to__date direction-to__date_full">
                      {trainInfo.dateFrom}
                    </span>
                  </p>
                  <div className="time-info__duration">9 : 42</div>
                  <p className="time-info__arrival-time">
                    {new Date(
                      currentCoach.to.datetime * 1000
                    ).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    <br />
                    <span className="direction-to__date direction-to__date_full">
                      {trainInfo.dateTo}
                    </span>
                  </p>
                </div>
                <div className="train-info-route">
                  <p className="time-info__departure-city">
                    {currentCoach.from.city.name}
                    <br />
                    <span className="time-info__departure-station">
                      {currentCoach.from.railway_station_name}
                      <br />
                      вокзал
                    </span>
                  </p>
                  <p className="time-info__arrival-city">
                    {currentCoach.to.city.name}
                    <br />
                    <span className="time-info__arrival-station">
                      {currentCoach.to.railway_station_name}
                      <br />
                      вокзал
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="passengers-info">
            <div className="direction-short-block">
              <h4 className="direction-from__title direction-from__title_passengers">
                Пассажиры
              </h4>
              <div
                className={`direction-from__more ${
                  this.state.isHiddenBlockPassengers ? 'more' : 'less'
                }`}
                onClick={() =>
                  this.changeIconBlockPassengers(this.passengersBlock.current)
                }
              ></div>
            </div>

            <div className="direction-full-block" ref={this.passengersBlock}>
              <div className="passengers-adults">
                <p className="passengers-text">
                  {passengersInfo.passengers.adults} Взрослых
                </p>
                <div className="passengers-price">
                  {(passengersInfo.price / passengersInfo.passengers.total) *
                    passengersInfo.passengers.adults}{' '}
                  &#x20bd;
                </div>
              </div>
              <div className="passengers-children">
                <p className="passengers-text">
                  {passengersInfo.passengers.children} Ребенок
                </p>
                <div className="passengers-price">
                  {(passengersInfo.price / passengersInfo.passengers.total) *
                    passengersInfo.passengers.children}{' '}
                  &#x20bd;
                </div>
              </div>
            </div>
          </div>

          <div className="total-price">
            <p className="total-price__text">Итог</p>
            <div className="total-price__price">
              {passengersInfo.price} &#x20bd;
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideBarWithData;
