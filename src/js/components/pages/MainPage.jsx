import React from 'react';
import ThemeSwitch from '../ThemeSwith/ThemeSwitch.jsx';
import { MutualDataProvider } from '../MutualData-context/MutualData-context.jsx';
import WelcomePage from '../WelcomePage/WelcomePage.jsx';

const MainPage = (props) => {
  const {
    currentTab, theme, changeTheme, changeTab,
  } = props;
  return (
    <MutualDataProvider value={{ theme }}>
      <div className="container">
        <ThemeSwitch theme={theme} onClick={() => changeTheme()} />
        <WelcomePage currentTab={currentTab} onTabChange={(tab) => changeTab(tab)} />
      </div>
    </MutualDataProvider>
  );
};

export default MainPage;
