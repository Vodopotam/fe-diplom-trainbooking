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
            quantity: ''
        };
    }

    getTickets = async () => {
    const addData = await getData(
            `routes?from_city_id=${this.state.cityFrom.id}&to_city_id=${this.state.cityTo.id}`
        ).then(result => {
          console.log(result)
            this.setState({
                tickets: result.items || [],
                quantity: result.total_count ? result.total_count : 0,
            });
        });
        console.log(this.state.tickets)
    }

    render() {
        console.log(localStorage);
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header
            {...this.props}
            {...this.state}
            getTickets={this.getTickets}
            // findCityTo={this.findCityTo}
            // findCityFrom={this.findCityFrom}
          />
          <Switch>
            <Route path="/trainselection/">
              <TrainSelection {...this.props} {...this.state} />
            </Route>
            <Route path="/placeselection/" component={PlaceSelection} />
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