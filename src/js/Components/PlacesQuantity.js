import React, { Fragment } from 'react';

export const PlacesQuantity = props => {
  const {
    adults,
    childrenWithPlace,
    childrenWithoutPlace,
    handlePassengersValue,
  } = props;
  return (
    <Fragment>
      <h4 className="placeselection-train-info__header">Количество билетов</h4>

      <ul className="placeselection-tickets">
        <li className="placeselection-tickets__adults">
          <div className="placeselection-tickets__total">
            <label className="placeselection-tickets__total-label">
              Взрослых
            </label>
            <input
              name="adults"
              type="number"
              min="1"
              max="5"
              value={adults}
              onChange={handlePassengersValue}
            />
          </div>
          <p className="placeselection-tickets__text">
            {5 - adults > 0
              ? `Можно добавить еще ${5 - adults} пассажира`
              : 'Выбрано максимальное количество билетов'}
          </p>
        </li>
        <li className="placeselection-tickets__children active">
          <div className="placeselection-tickets__total">
            <label className="placeselection-tickets__total-label">
              Детских
            </label>
            <input
              name="childrenWithPlace"
              type="number"
              min="0"
              max="4"
              value={childrenWithPlace}
              onChange={handlePassengersValue}
            />
          </div>
          <p className="placeselection-tickets__text">
            {4 - childrenWithPlace > 0
              ? `Можно добавить еще ${4 -
                  childrenWithPlace} детей до 10 лет.Свое место в
}
вагоне, как у взрослых, но дешевле в среднем на 50-65%`
              : 'Выбрано максимальное количество билетов'}
          </p>
        </li>
        <li className="placeselection-tickets__children-without-place empty">
          <div className="placeselection-tickets__total">
            <label className="placeselection-tickets__total-label">
              Детских &laquo;без места&raquo;
            </label>
            <input
              name="childrenWithoutPlace"
              type="number"
              min="0"
              max={adults}
              value={
                adults > childrenWithoutPlace ? childrenWithoutPlace : adults
              }
              onChange={handlePassengersValue}
            />
          </div>
          <p className="placeselection-tickets__text">
            {adults - childrenWithoutPlace > 0
              ? `Можно добавить еще ${adults - childrenWithoutPlace} ребенка`
              : 'Выбрано максимальное количество билетов.'}
          </p>
        </li>
      </ul>
    </Fragment>
  );
};
