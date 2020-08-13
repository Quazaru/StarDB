import React from 'react';

import './MainPage.scss';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import DevelopmentProgress from '../DevelopmentProgress/DevelopmentProgress.jsx';

import devLogs from '../../../assets/data assets/devLogs';

console.log(devLogs);

const MainPage = (props) => {
  const { currentTab, onTabChange } = props;
  return (
    <div className="main-page">
      <h1 className="main-page__header">
        Welcome to the
        <Logo />
      </h1>
      <p className="main-page__description">
        Here you can look at planets, species and caracters from Star Wars universe!
      </p>
      <div className="main-page__navigation">
        <p className="main-page__instruction">
          Click on the tabs below this text to show information.
        </p>
        <Navigation currentTab={currentTab} onTabChange={(tab) => onTabChange(tab)} />
      </div>
      <div className="main-page__progress">
        <DevelopmentProgress data={JSON.stringify(devLogs)} />
      </div>
    </div>
  );
};

export default MainPage;
