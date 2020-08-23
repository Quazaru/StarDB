import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import Preview from '../Preview/Preview.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import ThemeSwitch from '../ThemeSwith/ThemeSwitch.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import Spinner from '../Spinner/Spinner.jsx';

import SwapiService from '../../modules/SwapiService';
import { MutualDataProvider } from '../MutualData-context/MutualData-context.jsx';

class InfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: this.props.currentData,
    };
  }

  getData(tab) {
    if (tab === 'main page' || tab === this.props.currentTab) {
      return;
    }
    const service = new SwapiService();
    service.getTransformedElement(tab)
      .then((res) => {
        const data = JSON.stringify(res);
        localStorage.setItem('currentData', data);
        localStorage.setItem('isLoading', null);
        this.setState({ currentData: res, isLoading: false });
      })
      .catch(() => {
        this.setState({ currentData: null, isLoading: false });
      });
  }

  render() {
    const {
      theme, currentTab, currentId,
      changeTheme, changeTab, changeId, isLoading, currentData,
    } = this.props;
    if (!currentData) {
      return (
        <Spinner />
      );
    }
    return (
      <div className="container">
        <ErrorBoundary>
          <MutualDataProvider value={{ theme, isLoading }}>
            <ThemeSwitch theme={theme} onClick={() => changeTheme()} />
            <div className="container">
              <Header currentTab={currentTab} onTabChange={(tab) => changeTab(tab)} />
              <Preview
                tabName={currentTab}
                data={currentData ? currentData[currentId] : null}
                isLoading={isLoading}
              />
              <ItemList
                id={currentId}
                onClick={(id) => changeId(id)}
                data={currentData}
                currentTab={currentTab}
              />
            </div>
          </MutualDataProvider>
        </ErrorBoundary>
      </div>
    );
  }
};
InfoPage.defaultProps = {
  currentId: 0,
  theme: 'light',
  currentData: localStorage.getItem('currentData') ? localStorage.getItem('currentData') : null,
};

InfoPage.propTypes = {
  theme: PropTypes.string,
  currentTab: PropTypes.string.isRequired,
  currentId: PropTypes.number,
  currentData: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  changeId: PropTypes.func.isRequired,
};

export default InfoPage;
