import React from 'react';

import './Navigation.scss';

const Navigation = (props) => (
  <nav>
    <ul className="navigation">
      <li className="navigation__item active">
        <a href="#">
          Main Page
        </a>
      </li>
      <li className="navigation__item">
        <a href="#">
          People
        </a>
      </li>
      <li className="navigation__item">
        <a href="#">
          Planets
        </a>
      </li>
      <li className="navigation__item">
        <a href="#">
          Starships
        </a>
      </li>
      <li className="navigation__item">
        <a href="#">
          Vehicles
        </a>
      </li>
      <li className="navigation__item">
      <a href="#">
          Species
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
