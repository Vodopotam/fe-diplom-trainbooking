import React from 'react';

class CoachSitting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    console.log(e.currentTarget);
    if (
      this.props.selectedSeats.indexOf(e.currentTarget.dataset.number) !== -1
    ) {
      e.currentTarget.style.border = 'none';
      this.props.deleteSelectedSeats(e.currentTarget.dataset.number);
      this.props.setTotalPrice(
        -this.props.current.coach.bottom_price,
        this.props.totalPrice
      );
    } else if (
      this.props.selectedSeats.indexOf(e.currentTarget.dataset.number) === -1 &&
      this.props.selectedSeats.length < this.props.passengers
    ) {
      this.props.setTotalPrice(
        this.props.current.coach.bottom_price,
        this.props.totalPrice
      );
      this.props.setSelectedSeats(e.currentTarget.dataset.number);
      e.currentTarget.style.border = '2px solid #FFA800';
    }
  };

  render() {
    const { current, coaches, setTotalPrice, totalPrice } = this.props;
    return (
      <div className="coach">
        <div className="coach-description">
          <p className="coach-description__number">
            {current.coach.name.split('-')[1]}
            <span className="coach-description__number-text">вагон</span>
          </p>
          <div className="coach-description__places">
            <p className="coach-description__places-total">
              Места
              <span className="coach-description__places-total-number">
                {' '}
                {current.coach.available_seats}
              </span>
            </p>
          </div>
          <div className="coach-description__price">
            <p className="coach-description__price-text">Стоимость</p>
            <p className="coach-description__price-top">
              {current.coach.bottom_price}{' '}
              <span className="coaches__price-currency">&#x20bd;</span>
            </p>
          </div>
          <div className="coach-description__features">
            <p className="coach-description__features-text">
              Обслуживание{' '}
              <span className="coach-description__features-text-selected">
                ФПК
              </span>
            </p>
            <ul className="coach-description__features-selection">
              <li
                className={`coach-description__feature conditioner ${
                  current.coach.have_air_conditioning ? 'active' : ''
                }`}
              ></li>
              <li
                className={`coach-description__feature wifi ${
                  current.coach.have_wifi ? 'active' : ''
                }`}
              ></li>
              <li
                className={`coach-description__feature clothes ${
                  current.coach.is_linens_included ? 'active' : ''
                }`}
              ></li>
            </ul>
          </div>
        </div>

        <div className="coach-image">
          <p className="coach-image__text">
            11 человек выбирают места в этом поезде
          </p>
          <div className="train-image">
            <img
              className="train-image"
              src={require('../../img/placeSelection/train22.png')}
              alt="train"
            />

            <div className="train-image__places">
              {current.seats.map(seat => (
                <div
                  key={seat.index}
                  className={`place place_sitting place${seat.index}_sitting ${
                    seat.available ? '' : 'disabled'
                  }`}
                  data-number={seat.index}
                  onClick={seat.available ? this.handleClick : null}
                >
                  {seat.index}
                </div>
              ))}
            </div>
            {this.props.passengers === this.props.selectedSeats.length ? (
              <p className="coach-warning">
                Выбрано максимальное количество мест
              </p>
            ) : null}
          </div>
        </div>

        <div className="total-cost">
          {this.props.totalPrice}
          <span className="coaches__price-currency">&#x20bd;</span>
        </div>
      </div>
    );
  }
}

export default CoachSitting;
