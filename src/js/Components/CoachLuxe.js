import React from 'react';

class CoachLuxe extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
      isDisabled: false,
    };
  }

  setStatus() {
  	this.setState({
  		isDisabled: !this.state.isDisabled
  	})
  }

  render() {
    return (
      <div className="coach">
        <div className="coaches-available">
          <div className="coaches-available__numbers">
            <p className="coaches-available__numbers-text">Вагоны</p>
            <ul className="coaches-available__numbers-selection">
              <li className="coaches-available__number active">02</li>
              <li className="coaches-available__number">05</li>
            </ul>
          </div>
          <p className="coaches-available__text">
            Нумерация вагонов начинается с головы поезда
          </p>
        </div>

        <div className="coach-description">
          <p className="coach-description__number">
            02<span className="coach-description__number-text">вагон</span>
          </p>
          <div className="coach-description__places">
            <p className="coach-description__places-total">
              Места
              <span className="coach-description__places-total-number">8</span>
            </p>
          </div>
          <div className="coach-description__price">
            <p className="coach-description__price-text">Стоимость</p>
            <p className="coach-description__price-top">
              4 920 <span className="coaches__price-currency">&#x20bd;</span>
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
              <li className="coach-description__feature conditioner-paid"></li>
              <li className="coach-description__feature wifi-paid"></li>
              <li className="coach-description__feature clothes-paid"></li>
              <li className="coach-description__feature food-paid active"></li>
            </ul>
          </div>
        </div>

        <div className="coach-image">
          <p className="coach-image__text">
            19 человек выбирают места в этом поезде
          </p>
          <div className="train-image">
            <img
              className="train-image"
              src={require('../../img/placeSelection/train02.png')}
              alt="train"
            />
            <div className="train-image__places">
              <div className="place place_luxe place1_luxe">1</div>
              <div className="place place_luxe place2_luxe">2</div>
              <div className="place place_luxe place3_luxe disabled">3</div>
              <div className="place place_luxe place4_luxe disabled">4</div>
              <div className="place place_luxe place5_luxe disabled">5</div>
              <div className="place place_luxe place6_luxe">6</div>
              <div className="place place_luxe place7_luxe">7</div>
              <div className="place place_luxe place8_luxe">8</div>
              <div className="place place_luxe place9_luxe disabled">9</div>
              <div className="place place_luxe place10_luxe">10</div>
              <div className="place place_luxe place11_luxe disabled">11</div>
              <div className="place place_luxe place12_luxe disabled">12</div>
              <div className="place place_luxe place13_luxe disabled">13</div>
              <div className="place place_luxe place14_luxe">14</div>
              <div className="place place_luxe place15_luxe disabled">15</div>
              <div className="place place_luxe place16_luxe">16</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachLuxe;
