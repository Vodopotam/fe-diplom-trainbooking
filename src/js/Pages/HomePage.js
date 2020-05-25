import React from 'react';
import Slider from 'react-slick';

export const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="content">
      <main>
        <AboutUs />
        <Features />
        <Reviews />
      </main>
    </div>
  );
};

const AboutUs = () => (
  <div className="about-us wrapper" id="about-us">
    <h2 className="about-us__title">О нас</h2>
    <p className="about-us__text">
      Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем,
      как с каждым днем все больше людей заказывают жд билеты через интернет.
    </p>
    <p className="about-us__text">
      Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но
      стоит ли это делать?
      <br />
      Мы расскажем о преимуществах заказа через интернет.
    </p>
    <p className="about-us__text">
      <strong>
        Покупать жд билеты дешево можно за 90 суток до отправления поезда.{' '}
        <br />
        Благодаря динамическому ценообразованию цена на билеты в это время самая
        низкая.
      </strong>
    </p>
  </div>
);

const Features = () => (
  <div className="features" id="features">
    <div className="wrapper">
      <div className="features-top">
        <h2 className="features-title">Как это работает</h2>
        <div className="features-top-button">
          <a className="features-top-button__link" href="index.html#features">
            Узнать больше
          </a>
        </div>
      </div>
      <ul className="features-list">
        <li className="features-list__item">Удобный заказ на сайте</li>
        <li className="features-list__item">Нет необходимости ехать в офис</li>
        <li className="features-list__item">Огромный выбор направлений</li>
      </ul>
    </div>
  </div>
);

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="reviews wrapper" id="reviews">
        <h2>Отзывы</h2>

        <Slider {...settings}>
          <div className="slider__slides">
            <ul className="slider__slide reviews-slider">
              <li className="reviews-slider__item reviews-slider__item_kate">
                <p className="reviews-slider-name">Екатерина Вальнова</p>
                <cite className="reviews-slider-cite">
                  &quot;Доброжелательные подсказки на всех этапах помогут
                  правильно заполнить поля и без затруднений купить авиа или ж/д
                  билет, даже если вы заказываете онлайн билет впервые.&quot;
                </cite>
              </li>
              <li className="reviews-slider__item reviews-slider__item_evgeniy">
                <p className="reviews-slider-name">Евгений Стрыкало</p>
                <cite className="reviews-slider-cite">
                  &quot;СМС-сопровождение до посадки Сразу после оплаты ж/д
                  билетов и за 3 часа до отправления мы пришлем вам
                  СМС-напоминание о поездке.&quot;
                </cite>
              </li>
            </ul>
          </div>
          <div className="slider__slides">
            <ul className="slider__slide reviews-slider">
              <li className="reviews-slider__item reviews-slider__item_evgeniy">
                <p className="reviews-slider-name">Евгений Стрыкало</p>
                <cite className="reviews-slider-cite">
                  &quot;СМС-сопровождение до посадки Сразу после оплаты ж/д
                  билетов и за 3 часа до отправления мы пришлем вам
                  СМС-напоминание о поездке.&quot;
                </cite>
              </li>
              <li className="reviews-slider__item reviews-slider__item_kate">
                <p className="reviews-slider-name">Екатерина Вальнова</p>
                <cite className="reviews-slider-cite">
                  &quot;Доброжелательные подсказки на всех этапах помогут
                  правильно заполнить поля и без затруднений купить авиа или ж/д
                  билет, даже если вы заказываете онлайн билет впервые.&quot;
                </cite>
              </li>
            </ul>
          </div>
          <div className="slider__slides">
            <ul className="slider__slide reviews-slider">
              <li className="reviews-slider__item reviews-slider__item_kate">
                <p className="reviews-slider-name">Екатерина Вальнова</p>
                <cite className="reviews-slider-cite">
                  &quot;Доброжелательные подсказки на всех этапах помогут
                  правильно заполнить поля и без затруднений купить авиа или ж/д
                  билет, даже если вы заказываете онлайн билет впервые.&quot;
                </cite>
              </li>
              <li className="reviews-slider__item reviews-slider__item_evgeniy">
                <p className="reviews-slider-name">Евгений Стрыкало</p>
                <cite className="reviews-slider-cite">
                  &quot;СМС-сопровождение до посадки Сразу после оплаты ж/д
                  билетов и за 3 часа до отправления мы пришлем вам
                  СМС-напоминание о поездке.&quot;
                </cite>
              </li>
            </ul>
          </div>
          <div className="slider__slides">
            <ul className="slider__slide reviews-slider">
              <li className="reviews-slider__item reviews-slider__item_evgeniy">
                <p className="reviews-slider-name">Евгений Стрыкало</p>
                <cite className="reviews-slider-cite">
                  &quot;СМС-сопровождение до посадки Сразу после оплаты ж/д
                  билетов и за 3 часа до отправления мы пришлем вам
                  СМС-напоминание о поездке.&quot;
                </cite>
              </li>
              <li className="reviews-slider__item reviews-slider__item_kate">
                <p className="reviews-slider-name">Екатерина Вальнова</p>
                <cite className="reviews-slider-cite">
                  &quot;Доброжелательные подсказки на всех этапах помогут
                  правильно заполнить поля и без затруднений купить авиа или ж/д
                  билет, даже если вы заказываете онлайн билет впервые.&quot;
                </cite>
              </li>
            </ul>
          </div>
          <div className="slider__slides">
            <ul className="slider__slide reviews-slider">
              <li className="reviews-slider__item reviews-slider__item_kate">
                <p className="reviews-slider-name">Екатерина Вальнова</p>
                <cite className="reviews-slider-cite">
                  &quot;Доброжелательные подсказки на всех этапах помогут
                  правильно заполнить поля и без затруднений купить авиа или ж/д
                  билет, даже если вы заказываете онлайн билет впервые.&quot;
                </cite>
              </li>
              <li className="reviews-slider__item reviews-slider__item_evgeniy">
                <p className="reviews-slider-name">Евгений Стрыкало</p>
                <cite className="reviews-slider-cite">
                  &quot;СМС-сопровождение до посадки Сразу после оплаты ж/д
                  билетов и за 3 часа до отправления мы пришлем вам
                  СМС-напоминание о поездке.&quot;
                </cite>
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    );
  }
}
