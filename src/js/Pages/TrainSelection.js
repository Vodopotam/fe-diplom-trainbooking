import React, { Fragment } from 'react';
import { Ticket } from '../../js/Components/Ticket.js';
import { Loader } from '../../js/Components/Loader.js';
import Pagination from '../../js/Components/Pagination.js';

class TrainSelection extends React.Component {
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

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getTickets();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.getTickets();
    } else {
      return null;
    }
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

  render() {
    const { currentPage } = this.state;
    const { tickets, quantity, pages, loading } = this.props;
    return (
      /* } <div className="content">
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
              {...this.props}
              {...this.state}
              setFilters={this.setFilters}
            /> */

      <main className="main-block">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="results">
              <div className="results-found">
                найдено{' '}
                <span className="results-found__number">{quantity}</span>
              </div>

              <div className="results-sortby">
                <p className="results-sortby__text">сортировать по: </p>
                <select
                  className="sort-by__selection"
                  onChange={this.setSortBy}
                  defaultValue={this.state.sortBy}
                >
                  <option className="results-sortby__label" value="date">
                    времени
                  </option>
                  {}
                  <option className="results-sortby__label" value="duration">
                    длительности
                  </option>
                </select>
              </div>
              <div className="results-quantity">
                <p className="">показывать по:</p>
                <ul className="results-quantity-list">
                  <li
                    onClick={this.setLimit}
                    className={`results-quantity__text ${
                      this.state.limitAcive ? 'active' : ''
                    }`}
                    data-limit="5"
                  >
                    5
                  </li>
                  <li
                    onClick={this.setLimit}
                    className="results-quantity__text"
                    data-limit="10"
                  >
                    10
                  </li>
                  <li
                    onClick={this.setLimit}
                    className="results-quantity__text"
                    data-limit="20"
                  >
                    20
                  </li>
                </ul>
              </div>
            </div>

            <div className="tickets">
              {tickets.length > 0
                ? tickets.map((ticket, i) => {
                    return (
                      <Ticket
                        key={ticket.departure._id}
                        {...this.state}
                        {...this.props}
                        departure={ticket.departure}
                      />
                    );
                  })
                : null}
            </div>

            {pages ? (
              <Pagination
                pages={pages}
                currentPage={currentPage}
                setPage={this.setPage}
              />
            ) : null}
          </Fragment>
        )}
      </main>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default TrainSelection;
