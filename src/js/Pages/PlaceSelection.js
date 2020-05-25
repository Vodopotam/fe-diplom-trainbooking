import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../js/Components/SideBar.js';
import Coach from '../../js/Components/Coach.js';
import { PlacesQuantity } from '../../js/Components/PlacesQuantity.js';
import { getData } from '../data.js';

class PlaceSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      childrenWithPlace: 0,
      childrenWithoutPlace: 0,
      coachesInfo: [],
      coaches: [],
      currentCoach: '',
      currentCoachType: '',
      tabs: ['first', 'second', 'third', 'fourth'],
      selectedIndex: 0,
      selectedSeats: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getSeats();
  }

  getSeats = async () => {
    const id =
      this.props.currentCoach._id ||
      JSON.parse(sessionStorage.currentCoach)._id;
    await getData(`routes/${id}/seats`).then(result => {
      this.setState({
        coachesInfo: result,
        coaches: result.filter(
          el => el.coach.class_type === result[0].coach.class_type
        ),
        currentCoach: result[0],
        currentCoachType: result[0].coach.class_type,
      });
    });
    this.setCoachTabIndex();
  };

  setCoachTabIndex = () => {
    this.setState({
      selectedIndex: this.state.tabs.indexOf(this.state.currentCoachType),
    });
  };

  setCoachType = async e => {
    if (this.state.currentCoachType !== e.currentTarget.dataset.type) {
      await this.setState({
        currentCoachType: e.currentTarget.dataset.type,
      });
      await this.setState({
        coaches: this.state.coachesInfo.filter(
          el => el.coach.class_type === this.state.currentCoachType
        ),
      });

      this.setState({
        currentCoach: this.state.coaches[0],
      });
      this.setCoachTabIndex();
    }
  };

  handlePassengersValue = e => {
    const { target } = e;
    const value = target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  setSelectedSeats = seat => {
    const chosenSeat = this.state.selectedSeats.slice();
    chosenSeat.push(seat);
    this.setState({
      selectedSeats: chosenSeat,
    });
    sessionStorage.seats = JSON.stringify(this.state.selectedSeats);
  };

  deleteSelectedSeats = seat => {
    const chosenSeat = this.state.selectedSeats.slice();
    const deletedSeat = chosenSeat.indexOf(seat);
    chosenSeat.splice(deletedSeat, 1);
    this.setState({
      selectedSeats: chosenSeat,
    });
  };

  setTotalPrice = (price, totalPrice) => {
    this.setState({
      totalPrice: totalPrice + price,
    });
  };

  setTransition = e => {
    const passengers =
      Number(this.state.adults) +
      Number(this.state.childrenWithPlace) +
      Number(this.state.childrenWithoutPlace);
    if (
      this.state.selectedSeats.length === 0 &&
      this.state.selectedSeats.length !== passengers
    ) {
      e.preventDefault();
    }

    const passengersInfo = {
      passengers: {
        adults: Number(this.state.adults),
        children:
          Number(this.state.childrenWithPlace) +
          Number(this.state.childrenWithoutPlace),
        total:
          Number(this.state.adults) +
          Number(this.state.childrenWithPlace) +
          Number(this.state.childrenWithoutPlace),
      },
      price: this.state.totalPrice,
    };
    this.props.setPassengersInfo(passengersInfo);
  };

  render() {
    if (!this.props.currentCoach._id || !this.state.coachesInfo) return null;
    const { currentCoach } = this.props,
      { selectedSeats } = this.state,
      passengers =
        Number(this.state.adults) +
        Number(this.state.childrenWithPlace) +
        Number(this.state.childrenWithoutPlace),
      durationHours = Math.floor(currentCoach.duration / 60 / 60),
      durationMinutes =
        Math.floor(currentCoach.duration / 60) - durationHours * 60;
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
            <SideBar {...this.props} {...this.state} />

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
                        {currentCoach.train.name}
                      </div>
                      <div className="train-info__direction">
                        <span className="train-info__direction-left">
                          {currentCoach.from.city.name} &#8594;
                        </span>
                        <br /> {currentCoach.to.city.name}
                      </div>
                    </div>

                    <div className="time-info__departure">
                      <div className="time-info__departure-time">
                        {new Date(
                          currentCoach.from.datetime * 1000
                        ).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                      <div className="time-info__departure-city">
                        {currentCoach.from.city.name}
                      </div>
                      <div className="time-info__departure-station">
                        {currentCoach.from.railway_station_name} вокзал
                      </div>
                    </div>
                    <div className="time-info__duration time-info__duration_placeselection"></div>
                    <div className="time-info__arrival">
                      <div className="time-info__arrival-time">
                        {new Date(
                          currentCoach.to.datetime * 1000
                        ).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                      <div className="time-info__arrival-city">
                        {currentCoach.to.city.name}
                      </div>
                      <div className="time-info__arrival-station">
                        {currentCoach.to.railway_station_name} вокзал
                      </div>
                    </div>
                    <div className="time-info-duration-placeselection">
                      {`${durationHours} ч : ${durationMinutes} мин`}
                    </div>
                  </div>

                  <PlacesQuantity
                    {...this.state}
                    {...this.props}
                    handlePassengersValue={this.handlePassengersValue}
                    setCoachTabIndex={this.setCoachTabIndex}
                  />

                  <h4 className="placeselection-train-info__header">
                    Тип вагона
                  </h4>
                  <Coach
                    {...this.props}
                    {...this.state}
                    setCoachType={this.setCoachType}
                    setSelectedSeats={this.setSelectedSeats}
                    deleteSelectedSeats={this.deleteSelectedSeats}
                    setTotalPrice={this.setTotalPrice}
                    passengers={passengers}
                  />
                </div>

                <Link
                  to="/passengers/"
                  className={`goto-passengers-button ${
                    this.state.selectedSeats.length === passengers
                      ? 'active'
                      : ''
                  }`}
                  onClick={this.setTransition}
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
