import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import 'react-input-range/lib/css/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/style.css';
import './css/places.css';
import { HomePage } from './js/Pages/HomePage.js';
import Passengers from './js/Pages/Passengers';
import Payment from './js/Pages/Payment';
import OrderSubmition from './js/Pages/OrderSubmition';
import OrderDone from './js/Pages/OrderDone';
import Header from './js/Components/Header.js';
import Footer from './js/Components/Footer.js';
import SearchComponent from './js/Pages/SearchComponent.js';
import { getData } from './js/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainInfo: {},
      dateInfo: {},
      currentCoach: {},
      tickets: [],
      quantity: '',
      pages: '',
      passengersInfo: {},
      loading: false,
    };
  }

  getTickets = async (sortBy = 'duration', limit = 5, offset = 0, filters) => {
    let cityFrom = JSON.parse(sessionStorage.trainInfo).cityFrom.id || null,
      cityTo = JSON.parse(sessionStorage.trainInfo).cityTo.id || null;
    this.setState({ loading: true });
    await getData(
      `routes?from_city_id=${cityFrom}&to_city_id=${cityTo}&sort=${sortBy}&limit=${limit}&offset=${offset}&${filters}`
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

  setTrainInfo = params => {
    this.setState({
      trainInfo: params,
    });
    sessionStorage.trainInfo = JSON.stringify(params);
  };

  setDateInfo = dateInfo => {
    this.setState({
      dateInfo: dateInfo,
    });
    sessionStorage.dateInfo = JSON.stringify(dateInfo);
  };

  setCurrentCoach = coach => {
    this.setState({
      currentCoach: coach,
    });
    sessionStorage.currentCoach = JSON.stringify(coach);
  };

  setPassengersInfo = params => {
    this.setState({
      passengersInfo: params,
    });
    sessionStorage.passengersInfo = JSON.stringify(params);
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header
            {...this.props}
            {...this.state}
            getTickets={this.getTickets}
            setTrainInfo={this.setTrainInfo}
            setDateInfo={this.setDateInfo}
          />
          <Switch>
            <Route path="/search/">
              <SearchComponent
                {...this.props}
                {...this.state}
                getTickets={this.getTickets}
                setTrainInfo={this.setTrainInfo}
                setCurrentCoach={this.setCurrentCoach}
                setDateInfo={this.setDateInfo}
                setPassengersInfo={this.setPassengersInfo}
              />
            </Route>
            <Route path="/passengers/">
              <Passengers {...this.props} {...this.state} />
            </Route>
            <Route path="/payment/">
              <Payment {...this.props} {...this.state} />
            </Route>
            <Route path="/order-submition/" component={OrderSubmition} />
            <Route path="/order-done/">
              <OrderDone
                {...this.props}
                {...this.state}
                setTrainInfo={this.setTrainInfo}
              />
            </Route>
            <Route path="/" component={HomePage} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
