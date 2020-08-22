import React, { useMemo } from 'react';
import './App.scss';
// Router
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Preview from '../Preview/Preview.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import ThemeSwitch from '../ThemeSwith/ThemeSwitch.jsx';
import MainPage from '../pages/MainPage.jsx';
import InfoPage from '../pages/InfoPage.jsx';
import GoBackBtn from '../GoBackBtn/GoBackBtn.jsx';

import SwapiService from '../../modules/SwapiService';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';

// context Providers
import { MutualDataProvider, MutualDataConsumer } from '../MutualData-context/MutualData-context.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: window.location.pathname.match(/[a-z]*/gm)[1] ? window.location.pathname.match(/[a-z]*/gm)[1] : 'main page',
      currentId: 1,
      currentData: null,
      isLoading: true,
      onUpdating: false,
      theme: 'light',
    };
  }

  getData(tab) {
    this.setState({ isLoading: true });
    const service = new SwapiService();
    service.getTransformedElement(tab)
      .then((res) => {
        this.setState({ currentData: res, isLoading: false });
        const data = JSON.stringify(res);
        localStorage.setItem('currentData', data);
        localStorage.setItem('isLoading', null);
      })
      .catch(() => {
        this.setState({ currentData: null, isLoading: false });
      });
  }

  changeTab(tab) {
    this.getData(tab.toLowerCase());
    this.setState(({ currentTab, currentId }) => {
      const newTab = tab.toLowerCase();
      localStorage.setItem('currentTab', newTab);
      return { currentTab: newTab, currentId: 0, update: true };
    });
  }

  changeTheme() {
    this.setState(({ theme }) => {
      if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        return ({ theme: 'dark' });
      }
      localStorage.setItem('theme', 'light');
      return { theme: 'light' };
    });
  }

  changeId(id) {
    localStorage.setItem('currentId', id);
    this.setState({ currentId: id });
  }

  render() {
    const {
      currentTab, currentId, currentData, isLoading, theme, onUpdating,
    } = this.state;
    if (!currentData && currentTab !== '' && !onUpdating) {
      this.changeTab(window.location.pathname.match(/[a-z]*/gm)[1]);
      this.setState({onUpdating: true});
    }
    return (
      <MutualDataProvider value={{ theme: 'light' }}>
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                theme={theme}
                currentTab={currentTab}
                currentData={currentData}
                isLoading={isLoading}
                changeTheme={() => this.changeTheme()}
                changeTab={(tab) => this.changeTab(tab)}
              />
            )}
          />
          <Route
            exact
            path="/:tab"
            render={({ match }) => {
              const { LocationTab } = match.params;
              return (
                <>
                  <GoBackBtn />
                  <InfoPage
                    onGettingData={() => this.getData()}
                    theme={theme}
                    currentTab={currentTab}
                    currentId={currentId}
                    currentData={currentData}
                    isLoading={isLoading}
                    changeTheme={() => this.changeTheme()}
                    changeTab={(LocationTab) => this.changeTab(LocationTab)}
                    changeId={(id) => this.changeId(id)}
                  />
                </>
              );
            }}
          />
          <Route
            exact
            path="/:tab/:id"
            render={({ match }) => {
              const { tab: LocationTab, id: LocationId } = match.params;
              return (
                <>
                  <GoBackBtn onClick={(tab) => this.changeTab(tab)} />
                  <Preview
                    tabName={LocationTab}
                    data={currentData ? currentData[LocationId] : null}
                    isLoading={isLoading}
                  />
                </>
              );
            }}
          />
        </BrowserRouter>
      </MutualDataProvider>

    );
  }
}
