import React from 'react';
import CoachSitting from './CoachSitting.js';
import CoachReserved from './CoachReserved.js';
import CoachCompartment from './CoachCompartment.js';
import CoachLuxe from './CoachLuxe.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Coach extends React.Component {
  render() {
    const {
      selectedIndex,
      coaches,
      setCoachType,
      setCoachTabIndex,
    } = this.props;
    return (
      <Tabs selectedIndex={selectedIndex} onSelect={setCoachTabIndex}>
        <TabList className="coach-types">
          <Tab
            className="coach-type coach-type__luxe"
            data-type="first"
            onClick={setCoachType}
          >
            Люкс
          </Tab>
          <Tab
            className="coach-type coach-type__compartment"
            data-type="second"
            onClick={setCoachType}
          >
            Купе
          </Tab>
          <Tab
            className="coach-type coach-type__reserved"
            data-type="third"
            onClick={setCoachType}
          >
            Плацкарт
          </Tab>
          <Tab
            className="coach-type coach-type__sitting"
            data-type="fourth"
            onClick={setCoachType}
          >
            Сидячий
          </Tab>
        </TabList>

        {coaches.length > 0 ? (
          <div className="coaches-available">
            <div className="coaches-available__numbers">
              <p className="coaches-available__numbers-text">Вагоны</p>
              <ul className="coaches-available__numbers-selection">
                {coaches.map((item, i) => {
                  let number = item.coach.name.split('-')[1];
                  return (
                    <li key={i} className="coaches-available__number">
                      {number}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="coaches-available__text">
              Нумерация вагонов начинается с головы поезда
            </p>
          </div>
        ) : null}

        <TabPanel>
          {coaches.length > 0 ? (
            coaches.map(item => (
              <CoachLuxe
                key={item.coach._id}
                {...this.props}
                {...this.state}
                current={item}
              />
            ))
          ) : (
            <p className="coach-unavailable">
              К сожалению, свободных мест нет. Выберите другой вагон
            </p>
          )}
        </TabPanel>

        <TabPanel>
          {coaches.length > 0 ? (
            coaches.map(item => (
              <CoachCompartment
                key={item.coach._id}
                {...this.props}
                {...this.state}
                current={item}
              />
            ))
          ) : (
            <p className="coach-unavailable">
              К сожалению, свободных мест нет. Выберите другой вагон
            </p>
          )}
        </TabPanel>

        <TabPanel>
          {coaches.length > 0 ? (
            coaches.map(item => (
              <CoachReserved
                key={item.coach._id}
                {...this.props}
                {...this.state}
                current={item}
              />
            ))
          ) : (
            <p className="coach-unavailable">
              К сожалению, свободных мест нет. Выберите другой вагон
            </p>
          )}
        </TabPanel>

        <TabPanel>
          {coaches.length > 0 ? (
            coaches.map(item => (
              <CoachSitting
                key={item.coach._id}
                {...this.props}
                {...this.state}
                current={item}
              />
            ))
          ) : (
            <p className="coach-unavailable">
              К сожалению, свободных мест нет. Выберите другой вагон
            </p>
          )}
        </TabPanel>
      </Tabs>
    );
  }
}

export default Coach;
