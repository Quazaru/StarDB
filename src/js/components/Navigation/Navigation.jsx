/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import './Navigation.scss';

class Navigation extends React.Component {
  renderNav(data, active) {
    console.log(active);
    const elements = data.map((el) => {
      if (active === el.toLowerCase()) {
        return (
          <li className="navigation__item active" key={el}>
            <a href="#">
              {el}
            </a>
          </li>
        );
      }
      return (
        <li
          className="navigation__item"
          onClick={() => this.props.onTabChange(el)}
          key={el}
        >
          <a href="#">
            {el}
          </a>
        </li>
      );
    });
    return elements;
  }

  render() {
    const tabs = [
      'Main Page',
      'People',
      'Planets',
      'Starships',
      'Vehicles',
      'Species',
    ];
    const navElements = this.renderNav(tabs, this.props.currentTab);
    return (
      <nav>
        <ul className="navigation">
          {navElements}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
