import React from 'react';
import { Link } from 'react-router-dom';

export const Ticket = props => {
  const { departure } = props;
  const durationHours = Math.floor(departure.duration / 60 / 60);
  const durationMinutes =
    Math.floor(departure.duration / 60) - durationHours * 60;
  return (
    <div className="ticket">
      <div className="train-info">
        <div className="train-info__number">{departure.train.name}</div>
        <div className="train-info__direction">
          <span className="train-info__direction-left">
            {departure.from.city.name} &#8594;
          </span>
          <br />
          {departure.to.city.name}
        </div>
      </div>

      <div className="time-info">
        <div className="time-info__direction-to">
          <div className="time-info__departure">
            <div className="time-info__departure-time">
              {new Date(departure.from.datetime * 1000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="time-info__departure-city">
              {departure.from.city.name}
            </div>
            <div className="time-info__departure-station">{`${departure.from.railway_station_name} вокзал`}</div>
          </div>
          <div className="time-info__duration">{`${durationHours} : ${durationMinutes}`}</div>
          <div className="time-info__arrival">
            <div className="time-info__arrival-time">
              {new Date(departure.to.datetime * 1000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="time-info__arrival-city">
              {departure.to.city.name}
            </div>
            <div className="time-info__arrival-station">{`${departure.to.railway_station_name} вокзал`}</div>
          </div>
        </div>
      </div>
      <div className="coach-choice">
        <ul className="coaches">
          {departure.have_fourth_class ? (
            <li className="coaches__sitting coaches_type">
              <p className="coaches__name">Сидячий</p>
              <div className="coaches__quantity">
                {departure.available_seats_info.fourth}
              </div>
              <div className="coaches__price">
                от{' '}
                <span className="coaches__price-number">
                  {departure.price_info.fourth.bottom_price}
                </span>{' '}
                <span className="coaches__price-currency">&#x20bd;</span>
              </div>
            </li>
          ) : null}

          {departure.have_third_class ? (
            <li className="coaches__reserved coaches_type">
              <p className="coaches__name">Плацкарт</p>
              <div className="coaches__quantity">
                {departure.available_seats_info.third}
              </div>
              <div className="coaches__price">
                от{' '}
                <span className="coaches__price-number">
                  {departure.price_info.third.bottom_price}
                </span>{' '}
                <span className="coaches__price-currency">&#x20bd;</span>
              </div>
            </li>
          ) : null}

          {departure.have_second_class ? (
            <li className="coaches__compartment coaches_type">
              <p className="coaches__name">Купе</p>
              <ul className="coaches__name-subnames">
                <li className="coaches__name-subname">
                  <div className="coaches__name">верхние</div>
                  <div className="coaches__quantity">
                    {/*departure.available_seats_info.second*/}
                  </div>
                  <div className="coaches__price-number">
                    {departure.price_info.second.top_price}
                    <span className="coaches__price-currency"> &#x20bd;</span>
                  </div>
                </li>
                <li className="coaches__name-subname">
                  <div className="coaches__name">нижние</div>
                  <div className="coaches__quantity"></div>
                  <div className="coaches__price-number">
                    {departure.price_info.second.bottom_price}
                    <span className="coaches__price-currency"> &#x20bd;</span>
                  </div>
                </li>
              </ul>
              <div className="coaches__quantity">
                {departure.available_seats_info.second}
              </div>
              <div className="coaches__price">
                от{' '}
                <span className="coaches__price-number">
                  {departure.price_info.second.bottom_price}
                </span>{' '}
                <span className="coaches__price-currency">&#x20bd;</span>
              </div>
            </li>
          ) : null}

          {departure.have_first_class ? (
            <li className="coaches__luxe coaches_type">
              <p className="coaches__name">Люкс</p>
              <div className="coaches__quantity">
                {departure.available_seats_info.first}
              </div>
              <div className="coaches__price">
                от{' '}
                <span className="coaches__price-number">
                  {departure.price_info.first.price}
                </span>{' '}
                <span className="coaches__price-currency">&#x20bd;</span>
              </div>
            </li>
          ) : null}
        </ul>

        <ul className="ticket-options">
          <li
            className={`ticket-options__wifi ${
              departure.have_wifi ? 'active' : ''
            }`}
          ></li>
          <li
            className={`ticket-options__speed ${
              departure.is_express ? 'active' : ''
            }`}
          ></li>
          <li
            className={`ticket-options__comfort ${
              departure.have_air_conditioning ? 'active' : ''
            }`}
          ></li>
        </ul>
        {window.location.pathname === "/search/trainselection/" ? (
          <Link
            to="/search/placeselection/"
            className="place-selection-button"
            onClick={() => props.setCurrentCoach(departure)}
          >
            Выбрать места
          </Link>
        ) : (
          <Link to="/search/trainselection/" className="submition-button">
            Изменить
          </Link>
        )}
      </div>
    </div>
  );
};
