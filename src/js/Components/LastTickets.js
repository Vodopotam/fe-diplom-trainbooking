import React from 'react';
import { getData } from '../data.js';

class LastTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTickets: [],
    };
  }

  componentDidMount() {
    getData(`routes/last`).then(result => {
      this.setState({
        lastTickets: result,
      });
    });
  }

  render() {
    const { lastTickets } = this.state;
    if (!lastTickets) return;
    return (
      <div className="last-tickets">
        <h4 className="last-tickets__title">Последние билеты</h4>

        {lastTickets.map((lastTicket, index) => {
          return index <= 2 ? (
            <LastTicket
              key={index}
              lastTicket={lastTicket.departure}
              {...this.props}
              {...this.state}
            />
          ) : null;
        })}
      </div>
    );
  }
}

export const LastTicket = props => {
  const { lastTicket } = props;
  return (
    <div className="last-ticket">
      <div className="last-ticket__top">
        <div className="last-ticket__from">
          <p className="last-ticket__from-city">{lastTicket.from.city.name}</p>
          <p className="last-ticket__from-station">
            {lastTicket.from.railway_station_name}
            <br />
            вокзал
          </p>
        </div>
        <div className="last-ticket__to">
          <p className="last-ticket__to-city">{lastTicket.to.city.name}</p>
          <p className="last-ticket__to-station">
            {lastTicket.to.railway_station_name}
            <br />
            вокзал
          </p>
        </div>
      </div>
      <div className="last-ticket__bottom">
        <ul className="ticket-options">
          <li
            className={`ticket-options__wifi ${
              lastTicket.have_wifi ? 'active' : ''
            }`}
          ></li>
          <li
            className={`ticket-options__speed ${
              lastTicket.is_express ? 'active' : ''
            }`}
          ></li>
          <li
            className={`ticket-options__comfort ${
              lastTicket.have_air_conditioning ? 'active' : ''
            }`}
          ></li>
        </ul>
        <p className="last-ticket__price">
          от{' '}
          <span className="last-ticket__price-number">
            {lastTicket.min_price}
          </span>{' '}
          <span className="last-ticket__price-currency">&#x20bd;</span>
        </p>
      </div>
    </div>
  );
};

export default LastTickets;
