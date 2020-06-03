import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import TrainSelection from './TrainSelection';
import PlaceSelection from './PlaceSelection.js';
import SideBar from '../Components/SideBar.js';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'duration',
      limit: 5,
      offset: 0,
      currentPage: 1,
      filters: '',
    };
  }

  setSortBy = async event => {
    await this.setState({
      sortBy: event.target.value,
      currentPage: 1,
    });
    this.props.getTickets(
      this.state.sortBy,
      this.state.limit,
      this.state.offset,
      this.state.filters
    );
  };

  setLimit = async event => {
    await this.setState({
      limit: event.target.dataset.limit,
      currentPage: 1,
    });
    this.props.getTickets(
      this.state.sortBy,
      this.state.limit,
      this.state.offset,
      this.state.filters
    );
  };

  setPage = async page => {
    window.scrollTo(0, 0);
    await this.setState({
      offset: this.state.limit * (page - 1),
      currentPage: page,
    });
    this.props.getTickets(
      this.state.sortBy,
      this.state.limit,
      this.state.offset,
      this.state.filters
    );
  };

  setFilters = filters => {
    this.setState({
      filters: filters,
      currentPage: 1,
      offset: 0,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="main-information">
            <ul className="order-navigation">
              <li className="order-navigation__list active">
                <span></span>
                <p className="order-navigation__text">Билеты</p>
              </li>
              <li className="order-navigation__list">
                <span></span>
                <p className="order-navigation__text">Пассажиры</p>
              </li>
              <li className="order-navigation__list">
                <span></span>
                <p className="order-navigation__text">Оплата</p>
              </li>
              <li className="order-navigation__list">
                <span></span>
                <p className="order-navigation__text">Проверка</p>
              </li>
            </ul>
            <div className="wrapper">
              <SideBar
                {...this.state}
                {...this.props}
                setFilters={this.setFilters}
              />

              <Switch>
                <Route path="/search/trainselection">
                  <TrainSelection
                    {...this.props}
                    {...this.state}
                    getTickets={this.props.getTickets}
                    setTrainInfo={this.props.setTrainInfo}
                    setCurrentCoach={this.props.setCurrentCoach}
                    setDateInfo={this.props.setDateInfo}
                  />
                </Route>
                <Route path="/search/placeselection/">
                  <PlaceSelection
                    {...this.props}
                    {...this.state}
                    setPassengersInfo={this.props.setPassengersInfo}
                    setDateInfo={this.setDateInfo}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchComponent;
