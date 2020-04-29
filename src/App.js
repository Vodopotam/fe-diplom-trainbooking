import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import 'react-input-range/lib/css/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/style.css';
import './css/places.css';
import HomePage from './js/Pages/HomePage';
import TrainSelection from './js/Pages/TrainSelection';
import PlaceSelection from './js/Pages/PlaceSelection';
import Passengers from './js/Pages/Passengers';
import Payment from './js/Pages/Payment';
import OrderSubmition from './js/Pages/OrderSubmition';
import OrderDone from './js/Pages/OrderDone';
import Footer from './js/Components/Footer.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route path="/trainselection/" component={TrainSelection} />
          <Route path="/placeselection/" component={PlaceSelection} />
          <Route path="/passengers/" component={Passengers} />
          <Route path="/payment/" component={Payment} />
          <Route path="/order-submition/" component={OrderSubmition} />
          <Route path="/order-done/" component={OrderDone} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
