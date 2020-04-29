import React from 'react';

class CoachCompartment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="coach">
        <div className="coaches-available">
          <div className="coaches-available__numbers">
            <p className="coaches-available__numbers-text">Вагоны</p>
            <ul className="coaches-available__numbers-selection">
              <li className="coaches-available__number active">07</li>
              <li className="coaches-available__number">09</li>
            </ul>
          </div>
          <p className="coaches-available__text">
            Нумерация вагонов начинается с головы поезда
          </p>
        </div>

        <div className="coach-description">
          <p className="coach-description__number">
            07 <span className="coach-description__number-text">вагон</span>
          </p>
          <div className="coach-description__places">
            <p className="coach-description__places-total">
              Места
              <span className="coach-description__places-total-number">11</span>
            </p>
            <p className="coach-description__places-top">
              Верхние
              <span className="coach-description__places-top-number">3</span>
            </p>
            <p className="coach-description__places-bottom">
              Нижние
              <span className="coach-description__places-bottom-number">8</span>
            </p>
          </div>
          <div className="coach-description__price">
            <p className="coach-description__price-text">Стоимость</p>
            <p className="coach-description__price-top">
              2 920 <span className="coaches__price-currency">&#x20bd;</span>
            </p>
            <p className="coach-description__price-bottom">
              3 530 <span className="coaches__price-currency">&#x20bd;</span>
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
              <li className="coach-description__feature conditioner"></li>
              <li className="coach-description__feature wifi"></li>
              <li className="coach-description__feature clothes active"></li>
              <li className="coach-description__feature food active"></li>
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
              src={require('../../img/placeSelection/train.png')}
              alt="train"
            />
            <div className="train-image__places">
              <div className="place place1">1</div>
              <div className="place place2 disabled">2</div>
              <div className="place place3">3</div>
              <div className="place place4 disabled">4</div>
              <div className="place place5 disabled">5</div>
              <div className="place place6 disabled">6</div>
              <div className="place place7 disabled">7</div>
              <div className="place place8 disabled">8</div>
              <div className="place place9 disabled">9</div>
              <div className="place place10 disabled">10</div>
              <div className="place place11">11</div>
              <div className="place place12 disabled">12</div>
              <div className="place place13">13</div>
              <div className="place place14 disabled">14</div>
              <div className="place place15">15</div>
              <div className="place place16 disabled">16</div>
              <div className="place place17 disabled">17</div>
              <div className="place place18">18</div>
              <div className="place place19">19</div>
              <div className="place place20 disabled">20</div>
              <div className="place place21 disabled">21</div>
              <div className="place place22 disabled">22</div>
              <div className="place place23 disabled">23</div>
              <div className="place place24 disabled">24</div>
              <div className="place place25 disabled">25</div>
              <div className="place place26 disabled">26</div>
              <div className="place place27">27</div>
              <div className="place place28 disabled">28</div>
              <div className="place place29 disabled">29</div>
              <div className="place place30">30</div>
              <div className="place place31">31</div>
              <div className="place place32">32</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachCompartment;
