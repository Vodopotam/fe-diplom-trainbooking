import React from 'react';

class CoachSitting extends React.Component {
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
              <li className="coaches-available__number">20</li>
              <li className="coaches-available__number">21</li>
              <li className="coaches-available__number active">22</li>
              <li className="coaches-available__number">25</li>
            </ul>
          </div>
          <p className="coaches-available__text">
            Нумерация вагонов начинается с головы поезда
          </p>
        </div>

        <div className="coach-description">
          <p className="coach-description__number">
            22<span className="coach-description__number-text">вагон</span>
          </p>
          <div className="coach-description__places">
            <p className="coach-description__places-total">
              Места
              <span className="coach-description__places-total-number">35</span>
            </p>
          </div>
          <div className="coach-description__price">
            <p className="coach-description__price-text">Стоимость</p>
            <p className="coach-description__price-top">
              1 920 <span className="coaches__price-currency">&#x20bd;</span>
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
              <li className="coach-description__feature wifi active"></li>
              <li className="coach-description__feature food"></li>
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
              <div className="place place_sitting place1_sitting">1</div>
              <div className="place place_sitting place2_sitting">2</div>
              <div className="place place_sitting place3_sitting">3</div>
              <div className="place place_sitting place4_sitting">4</div>
              <div className="place place_sitting place5_sitting disabled">
                5
              </div>
              <div className="place place_sitting place6_sitting disabled">
                6
              </div>
              <div className="place place_sitting place7_sitting disabled">
                7
              </div>
              <div className="place place_sitting place8_sitting disabled">
                8
              </div>
              <div className="place place_sitting place9_sitting">9</div>
              <div className="place place_sitting place10_sitting disabled">
                10
              </div>
              <div className="place place_sitting place11_sitting selected">
                11
              </div>
              <div className="place place_sitting place12_sitting selected">
                12
              </div>
              <div className="place place_sitting place13_sitting">13</div>
              <div className="place place_sitting place14_sitting selected">
                14
              </div>
              <div className="place place_sitting place15_sitting">15</div>
              <div className="place place_sitting place16_sitting disabled">
                16
              </div>
              <div className="place place_sitting place17_sitting disabled">
                17
              </div>
              <div className="place place_sitting place18_sitting disabled">
                18
              </div>
              <div className="place place_sitting place19_sitting">19</div>
              <div className="place place_sitting place20_sitting">20</div>
              <div className="place place_sitting place21_sitting disabled">
                21
              </div>
              <div className="place place_sitting place22_sitting disabled">
                22
              </div>
              <div className="place place_sitting place23_sitting disabled">
                23
              </div>
              <div className="place place_sitting place24_sitting disabled">
                24
              </div>
              <div className="place place_sitting place25_sitting disabled">
                25
              </div>
              <div className="place place_sitting place26_sitting disabled">
                26
              </div>
              <div className="place place_sitting place27_sitting">27</div>
              <div className="place place_sitting place28_sitting">28</div>
              <div className="place place_sitting place29_sitting disabled">
                29
              </div>
              <div className="place place_sitting place30_sitting disabled">
                30
              </div>
              <div className="place place_sitting place31_sitting">31</div>
              <div className="place place_sitting place32_sitting">32</div>

              <div className="place place_sitting place33_sitting">33</div>
              <div className="place place_sitting place34_sitting">34</div>
              <div className="place place_sitting place35_sitting">35</div>
              <div className="place place_sitting place36_sitting disabled">
                36
              </div>
              <div className="place place_sitting place37_sitting disabled">
                37
              </div>
              <div className="place place_sitting place38_sitting disabled">
                38
              </div>
              <div className="place place_sitting place39_sitting disabled">
                39
              </div>
              <div className="place place_sitting place40_sitting disabled">
                40
              </div>
              <div className="place place_sitting place41_sitting disabled">
                41
              </div>
              <div className="place place_sitting place42_sitting">42</div>
              <div className="place place_sitting place43_sitting">43</div>
              <div className="place place_sitting place44_sitting">44</div>
              <div className="place place_sitting place45_sitting">45</div>
              <div className="place place_sitting place46_sitting">46</div>
              <div className="place place_sitting place47_sitting">47</div>
              <div className="place place_sitting place48_sitting disabled">
                48
              </div>
              <div className="place place_sitting place49_sitting">49</div>
              <div className="place place_sitting place50_sitting">50</div>
              <div className="place place_sitting place51_sitting">51</div>
              <div className="place place_sitting place52_sitting">52</div>
              <div className="place place_sitting place53_sitting disabled">
                53
              </div>
              <div className="place place_sitting place54_sitting">54</div>
              <div className="place place_sitting place55_sitting">55</div>
              <div className="place place_sitting place56_sitting disabled">
                56
              </div>
              <div className="place place_sitting place57_sitting disabled">
                57
              </div>
              <div className="place place_sitting place58_sitting">58</div>
              <div className="place place_sitting place59_sitting">59</div>
              <div className="place place_sitting place60_sitting disabled">
                60
              </div>
              <div className="place place_sitting place61_sitting disabled">
                61
              </div>
              <div className="place place_sitting place62_sitting">62</div>
            </div>
          </div>
        </div>

        <div className="total-cost">
          5 760 <span className="coaches__price-currency">&#x20bd;</span>
        </div>
      </div>
    );
  }
}

export default CoachSitting;
