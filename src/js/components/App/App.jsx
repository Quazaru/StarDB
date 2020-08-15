import React from 'react';
import './App.scss';
import Header from '../Header/Header.jsx';
import Preview from '../Preview/Preview.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import MainPage from '../MainPage/MainPage.jsx';
import ThemeSwitch from '../ThemeSwith/ThemeSwitch.jsx';

import SwapiService from '../../modules/SwapiService';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';

// context Providers
import { MutualDataProvider, MutualDataConsumer } from '../MutualData-context/MutualData-context.jsx';

// import ItemList from  '../ItemList/ItemList.jsx';
// import PersonDetail from  '../PersonDetail/PersonDetail.jsx';
// import PlanetDetails from  '../PlanetDetails/PlanetDetails.jsx';
// import RandomPlanet from  '../RandomPlanet/RandomPlanet.jsx';
// import StarshipDetails from  '../StarshipDetails/StarshipDetails.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'main page',
      currentId: 0,
      currentData: null,
      isLoading: true,
      theme: 'light',
    };
  }

  getData(tab) {
    this.setState({ isLoading: true });
    const service = new SwapiService();
    service.getTransformedElement(tab)
      .then((res) => {
        this.setState({ currentData: res, isLoading: false });
      })
      .catch(() => {
        this.setState({ currentData: null, isLoading: false });
      });
  }

  changeTab(tab) {
    this.getData(tab.toLowerCase());
    this.setState(({ currentTab, currentId }) => {
      const newTab = tab.toLowerCase();
      return { currentTab: newTab, currentId: 0, update: true };
    });
  }

  changeTheme() {
    this.setState(({ theme }) => {
      if (theme === 'light') {
        return ({ theme: 'dark' });
      }
      return { theme: 'light' };
    });
  }

  changeId(id) {
    this.setState({ currentId: id });
  }

  render() {
    const {
      currentTab, currentId, currentData, isLoading, theme,
    } = this.state;
    if (currentTab === 'main page') {
      return (
        <MutualDataProvider value={{ theme }}>
          <div className="container">
            <ThemeSwitch theme={theme} onClick={() => this.changeTheme()} />
            <MainPage currentTab={currentTab} onTabChange={(tab) => this.changeTab(tab)} />
          </div>
        </MutualDataProvider>
      );
    }
    return (
      <div className="container">
        <ErrorBoundary>
          <MutualDataProvider value={{ theme, isLoading }}>
            <ThemeSwitch theme={theme} onClick={() => this.changeTheme()} />
            <div className="container">
              <Header currentTab={currentTab} onTabChange={(tab) => this.changeTab(tab)} />
              <Preview
                tabName={currentTab}
                data={currentData ? currentData[currentId] : null}
                isLoading={isLoading}
              />

              <ItemList
                id={currentId}
                onClick={(id) => this.changeId(id)}
                data={currentData}
                currentTab={currentTab}
                isLoading={isLoading}
              />
            </div>
          </MutualDataProvider>
        </ErrorBoundary>
      </div>
    );
  }
}
