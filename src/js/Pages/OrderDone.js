import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class OrderDone extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="content">
        <header className="header order-done">
          <Link className="logo" id="logo-top" to="/">
            Лого
          </Link>
          <nav className="header-navigation">
            <div className="wrapper">
              <ul className="navigation-list">
              <li className="navigation-list__item">
                <Link to="/#about-us" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>О нас</Link>
              </li>
              <li className="navigation-list__item">
                <Link to="/#features" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>Как это работает</Link>
              </li>
              <li className="navigation-list__item">
                <Link to="/#reviews" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>Отзывы</Link>
              </li>
              <li className="navigation-list__item">
                <Link to="#contacts" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}>Контакты</Link>
              </li>
            </ul>
            </div>
          </nav>
        </header>

        <div className="main-information order-done">
          <div className="wrapper">
            <h1 className="order-done-header">Благодарим Вас за заказ!</h1>
            <div className="order-done-block">
              <div className="order-number-and-price">
                <p className="order-number">№ Заказа 285АА</p>
                <p className="order-price__text">
                  сумма{' '}
                  <span className="order-price__price">7 760 &#x20bd;</span>
                </p>
              </div>
              <div className="order-done-features">
                <ul className="order-done-features-list">
                  <li className="order-done-features-list__item">
                    билеты будут отправлены на ваш e-mail
                  </li>
                  <li className="order-done-features-list__item">
                    <b>распечатайте</b> и сохраняйте билеты до даты поездки
                  </li>
                  <li className="order-done-features-list__item">
                    <b>предьявите</b> распечатанные билеты при посадке
                  </li>
                </ul>
              </div>
              <div className="order-done-letter">
                <h2 className="order-done-letter__title">Ирина Эдуардовна!</h2>
                <p className="order-done-letter__text">
                  Ваш заказ успешно оформлен.
                  <br /> В ближайшее время с вами свяжется наш оператор для
                  подтверждения.
                </p>
                <p className="order-done-letter__text">
                  <b>
                    Благодарим Вас за оказанное доверие и желаем приятного
                    путешествия!
                  </b>
                </p>
              </div>
              <div className="order-service">
                <div className="order-service__wrapper">
                  <div className="order-service-value">
                    <p className="order-service__text">Оценить сервис</p>
                    <form className="order-service__stars stars">
	                    <input type="radio" className="star order-service__star" id="star1" name="stars" />
	  					<label htmlFor="star1"></label>
	  					<input type="radio" className="star order-service__star" id="star2" name="stars" />
						<label htmlFor="star2"></label>
						<input type="radio" className="star order-service__star" id="star3" name="stars" />
						<label htmlFor="star3"></label>
						<input type="radio" className="star order-service__star" id="star4" name="stars" />
						<label htmlFor="star4"></label>
						<input type="radio" className="star order-service__star" id="star5" name="stars" />
						<label htmlFor="star5"></label>
                     {/*} <li className="order-service__star"></li>
                      <li className="order-service__star"></li>
                      <li className="order-service__star"></li>
                      <li className="order-service__star"></li>
                      <li className="order-service__star"></li>*/}
                    </form>
                  </div>
                  <Link to="/" className="goto-main">
                    Вернуться на главню
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default OrderDone;