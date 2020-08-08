import React from 'react';

import './Header.scss';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';

const Header = (props) => {
  const tags = [
    'Planets',
  ];

  const elements = tags.map((el) => {

  });
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
