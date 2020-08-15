import React from 'react';

import './ThemeSwitch.scss';

const ThemeSwitch = (props) => (
  <label className="switch">
    <input
      type="checkbox"
      className="switch__checkbox"
      checked={props.theme === 'dark'}
    />
    <span className="switch__slider" onClick={props.onClick} />
    <img src="../../../assets/img/moon.svg" alt="dark-theme-moon" className="switch__img" />
  </label>
);

export default ThemeSwitch;
