import React from 'react';

import './Header.scss';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';

const Header = (props) => {
  return (
    <header>
      <Logo />
      <Navigation onTabChange={props.onTabChange} currentTab={props.currentTab}/>
    </header>
  );
};

export default Header;
