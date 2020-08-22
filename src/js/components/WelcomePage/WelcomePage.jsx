import React from 'react';

import './WelcomePage.scss';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import DevelopmentProgress from '../DevelopmentProgress/DevelopmentProgress.jsx';

import devLogs from '../../../assets/data assets/devLogs';
import { MutualDataConsumer } from '../MutualData-context/MutualData-context.jsx';

const WelcomePage = (props) => {
  const { currentTab, onTabChange } = props;
  return (
    <MutualDataConsumer>
      {({ theme }) => (
        <div className={theme === 'dark' ? 'main-page main-page_dark' : 'main-page'}>
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
      )}
    </MutualDataConsumer>
  );
};

export default WelcomePage;
