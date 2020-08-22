/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends React.Component {
  renderNav(data, active) {
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
      if (el === 'Main Page') {
        return (
          <li
            className="navigation__item"
            onClick={() => this.props.onTabChange(el)}
            key={el}
          >
            <Link to="/main-page">
              {el}
            </Link>
          </li>
        );
      }
      return (
        <li
          className="navigation__item"
          onClick={() => this.props.onTabChange(el)}
          key={el}
        >
          <Link to="/info-page">
            {el}
          </Link>
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
      'Species',
    ];
    const { tab } = this.props;
    const navElements = this.renderNav(tabs, tab);
    return (
      <nav>
        <ul className="navigation">
          <li
            className={
              tabs[0].toLowerCase === tab
                ? 'navigation__item active'
                : 'navigation__item'
            }
            onClick={() => this.props.onTabChange('main page')}
          >
            <Link to="/">
              {tabs[0]}
            </Link>
          </li>
          <li
            className={
              tabs[1].toLowerCase === tab
                ? 'navigation__item active'
                : 'navigation__item'
            }
            onClick={() => this.props.onTabChange('people')}
          >
            <Link to={`/${tabs[1].toLowerCase()}/`}>
              {tabs[1]}
            </Link>
          </li>
          <li
            className={
              tabs[2].toLowerCase === tab
                ? 'navigation__item active'
                : 'navigation__item'
            }
            onClick={() => this.props.onTabChange('planets')}
          >
            <Link to={`/${tabs[2].toLowerCase()}/`}>
              {tabs[2]}
            </Link>
          </li>
          <li
            className={
              tabs[3].toLowerCase === tab
                ? 'navigation__item active'
                : 'navigation__item'
            }
            onClick={() => this.props.onTabChange('species')}
          >
            <Link to={`/${tabs[3].toLowerCase()}/`}>
              {tabs[3]}
            </Link>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Navigation;
