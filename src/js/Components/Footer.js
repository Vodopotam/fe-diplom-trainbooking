import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubscribed: false,
    };
  }

  onSubmitSubscribe = event => {
    event.preventDefault();
    const reg = /^[\w\.]+@[\w\.]+$/;
    if (!this.email.value.match(reg)) return;
    this.setState({
      isSubscribed: true,
    });
  };

  render() {
    return (
      <footer className="footer">
        <div className="footer-top wrapper">
          <div className="footer-top-contacts">
            <h3 className="footer-top-title">Свяжитесь с нами</h3>
            <ul className="footer-top-contacts-list">
              <li className="footer-top-phone">
                <a href="tel:+78000000000">8 (800) 000 00 00</a>
              </li>
              <li className="footer-top-email">
                <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
              </li>
              <li className="footer-top-skype">
                <a href="skype:tu.train.tickets?call">tu.train.tickets</a>
              </li>
              <li className="footer-top-address">
                г.Москва
                <br />
                ул.Московская 27-35
                <br />
                555 555
              </li>
            </ul>
          </div>
          <div className="footer-top-social">
            <h3 className="footer-top-title">Подписка</h3>
            <p className="footer-top-text">Будьте в курсе событий</p>

            {!this.state.isSubscribed ? (
              <form
                className="footer-top-social-form"
                action="#"
                onSubmit={this.onSubmitSubscribe}
              >
                <input
                  className="footer-top-social-email"
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  required
                  ref={elem => (this.email = elem)}
                />
                <input
                  className="footer-top-social-submit"
                  type="submit"
                  name="submit"
                />
              </form>
            ) : (
              <p className="footer-top-title">Подписка оформлена!</p>
            )}

            <div className="footer-top-social-links">
              <h3 className="footer-top-title">Подписывайтесь на нас</h3>
              <ul className="footer-top-links">
                <li>
                  <a className="youtube" href="#"></a>
                </li>
                <li>
                  <a className="linkedIn" href="#"></a>
                </li>
                <li>
                  <a className="google" href="#"></a>
                </li>
                <li>
                  <a className="facebook" href="#"></a>
                </li>
                <li>
                  <a className="twitter" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom wrapper" id="contacts">
          <a className="logo" href="index.html">
            Лого
          </a>
          <div
            className="totop"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          ></div>
          <div className="date">2018 WEB</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
