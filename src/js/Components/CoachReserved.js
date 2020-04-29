import React from 'react';

class CoachReserved extends React.Component {
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
              <li className="coaches-available__number">10</li>
              <li className="coaches-available__number active">12</li>
              <li className="coaches-available__number">15</li>
            </ul>
          </div>
          <p className="coaches-available__text">
            Нумерация вагонов начинается с головы поезда
          </p>
        </div>
        <div className="coach-description">
          <p className="coach-description__number">
            12<span className="coach-description__number-text">вагон</span>
          </p>
          <div className="coach-description__places">
            <p className="coach-description__places-total">
              Места
              <span className="coach-description__places-total-number">21</span>
            </p>
            <p className="coach-description__places-top">
              Верхние
              <span className="coach-description__places-top-number">10</span>
            </p>
            <p className="coach-description__places-bottom">
              Нижние
              <span className="coach-description__places-bottom-number">
                11
              </span>
            </p>
          </div>
          <div className="coach-description__price">
            <p className="coach-description__price-text">Стоимость</p>
            <p className="coach-description__price-top">
              2 020 <span className="coaches__price-currency">&#x20bd;</span>
            </p>
            <p className="coach-description__price-bottom">
              3 030 <span className="coaches__price-currency">&#x20bd;</span>
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
              <li className="coach-description__feature food"></li>
            </ul>
          </div>
        </div>

        <div className="coach-image">
          <p className="coach-image__text">
            13 человек выбирают места в этом поезде
          </p>
          <div className="train-image">
            <img
              className="train-image"
              src={require('../../img/placeSelection/train12.png')}
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
              <div className="place place17">17</div>
              <div className="place place18">18</div>
              <div className="place place19">19</div>
              <div className="place place20">20</div>
              <div className="place place21 disabled">21</div>
              <div className="place place22 disabled">22</div>
              <div className="place place23 disabled">23</div>
              <div className="place place24 disabled">24</div>
              <div className="place place25 disabled">25</div>
              <div className="place place26 disabled">26</div>
              <div className="place place27">27</div>
              <div className="place place28 disabled">28</div>
              <div className="place place29">29</div>
              <div className="place place30">30</div>
              <div className="place place31">31</div>
              <div className="place place32">32</div>

              <div className="place place33">33</div>
              <div className="place place34 disabled">34</div>
              <div className="place place35 disabled">35</div>
              <div className="place place36 disabled">36</div>
              <div className="place place37">37</div>
              <div className="place place38 disabled">38</div>
              <div className="place place39">39</div>
              <div className="place place40 disabled">40</div>
              <div className="place place41">41</div>
              <div className="place place42 disabled">42</div>
              <div className="place place43 disabled">43</div>
              <div className="place place44 disabled">44</div>
              <div className="place place45">45</div>
              <div className="place place46">46</div>
              <div className="place place47">47</div>
              <div className="place place48 disabled">48</div>
            </div>
          </div>
        </div>

        <div className="total-cost">
          8 080 <span className="coaches__price-currency">&#x20bd;</span>
        </div>
      </div>
    );
  }
}

export default CoachReserved;
