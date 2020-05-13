import React from 'react';

export const Loader = () => (
  <div className="main-information loader">
    <div className="wrapper">
      <p className="loader-text">Идет поиск</p>
      <img
        src={require('../../img/loader.gif')}
        className="loader-img"
        alt="loader"
      />
    </div>
  </div>
);
