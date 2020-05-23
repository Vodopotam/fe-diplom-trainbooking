import React from 'react';
import { Link } from 'react-router-dom';
import SideBarWithData from '../../js/Components/SideBarWithData.js';
import Passenger from '../../js/Components/Passenger.js';

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passengersList: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  setPassengersList = passenger => {
    const passengers = this.state.passengersList.slice();
    passengers.push(passenger);
    this.setState({
      passengersList: passengers,
    });
  };

  setTransition = e => {
    if (
      this.state.passengersList.length <
      JSON.parse(sessionStorage.passengersInfo).passengers.total
    ) {
      e.preventDefault();
    }
    sessionStorage.passengersList = JSON.stringify(this.state.passengersList);
  };

  render() {
    const passengersInfo =
      JSON.parse(sessionStorage.passengersInfo) || this.props.passengersInfo;
    return (
      <div className="content">
        <div className="main-information">
          <ul className="order-navigation">
            <li className="order-navigation__list active">
              <span></span>
              <p className="order-navigation__text">Билеты</p>
            </li>
            <li className="order-navigation__list active">
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
            <SideBarWithData
              {...this.props}
              {...this.state}
              passengersInfo={passengersInfo}
            />

            <main className="main-block">
              <div className="main-block__wrapper">
                {new Array(passengersInfo.passengers.adults)
                  .fill('')
                  .map((passenger, i) => (
                    <Passenger
                      key={i}
                      isOpen={i > 0 ? false : true}
                      number={i + 1}
                      adult
                      setPassengersList={this.setPassengersList}
                      setValidatedPassengersList={
                        this.setValidatedPassengersList
                      }
                    />
                  ))}

                {new Array(passengersInfo.passengers.children)
                  .fill('')
                  .map((passenger, i) => (
                    <Passenger
                      key={i}
                      isOpen={false}
                      number={passengersInfo.passengers.adults + i + 1}
                      child
                      setPassengersList={this.setPassengersList}
                    />
                  ))}

                <Link
                  to="/payment/"
                  className={`goto-passengers-button ${
                    this.state.passengersList.length <
                    JSON.parse(sessionStorage.passengersInfo).passengers.total
                      ? ''
                      : 'active'
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

export default Passengers;
