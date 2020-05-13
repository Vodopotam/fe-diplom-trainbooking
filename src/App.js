import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import 'react-input-range/lib/css/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/style.css';
import './css/places.css';
import { HomePage } from './js/Pages/HomePage.js';
import TrainSelection from './js/Pages/TrainSelection';
import PlaceSelection from './js/Pages/PlaceSelection';
import Passengers from './js/Pages/Passengers';
import Payment from './js/Pages/Payment';
import OrderSubmition from './js/Pages/OrderSubmition';
import OrderDone from './js/Pages/OrderDone';
import Header from './js/Components/Header.js';
import Footer from './js/Components/Footer.js';
import { getData } from './js/data.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFrom: {
        name: '',
        id: '',
      },
      cityTo: {
        name: '',
        id: '',
      },
      tickets: [],
      quantity: '',
      pages: '',
      loading: false,
      trainInfo: (JSON.parse(sessionStorage.trainInfo) ? JSON.parse(sessionStorage.trainInfo) : {}),
    };
  }

  componentDidMount() {
    if (sessionStorage.trainInfo === undefined) {
      sessionStorage.trainInfo = JSON.stringify({});
    }
  }

  getTickets = async (sortBy = 'duration', limit = 5, offset = 0, filters) => {
    this.setState({ loading: true });
    await getData(
      `routes?from_city_id=${this.state.cityFrom.id}&to_city_id=${this.state.cityTo.id}&sort=${sortBy}&limit=${limit}&offset=${offset}&${filters}`
    ).then(result => {
      this.setState({
        tickets: result.items || [],
        quantity: result.total_count ? result.total_count : 0,
        loading: false,
      });
    });
    await this.setState({
      pages: Math.ceil(this.state.quantity / limit),
    });
  };

  render() {
    console.log(this.state);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header
            {...this.props}
            {...this.state}
            getTickets={this.getTickets}
          />
          <Switch>
            <Route path="/trainselection/">
              <TrainSelection
                {...this.props}
                {...this.state}
                getTickets={this.getTickets}
              />
            </Route>
            <Route path="/placeselection/">
              <PlaceSelection
                {...this.props}
                {...this.state}
                component={PlaceSelection}
              />
            </Route>
            <Route path="/passengers/" component={Passengers} />
            <Route path="/payment/" component={Payment} />
            <Route path="/order-submition/" component={OrderSubmition} />
            <Route path="/order-done/" component={OrderDone} />
            <Route path="/" component={HomePage} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
