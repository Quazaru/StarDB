import React from 'react';

import './App.scss';
import Header from '../Header/Header.jsx';
import Preview from '../Preview/Preview.jsx';
import ItemList from '../ItemList/ItemList.jsx';
// import ItemList from  '../ItemList/ItemList.jsx';
// import PersonDetail from  '../PersonDetail/PersonDetail.jsx';
// import PlanetDetails from  '../PlanetDetails/PlanetDetails.jsx';
// import RandomPlanet from  '../RandomPlanet/RandomPlanet.jsx';
// import StarshipDetails from  '../StarshipDetails/StarshipDetails.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'planets',
      currentId: 1,
    };
  }

  changeTab(tab) {
    this.setState(({ currentTab }) => {
      cosnt newTab = tab.toLowerCase();
    });
  }

  render() {
    const { currentTab, currentId } = this.state;
    return (
      <div className="container">
        <Header currentTab={currentTab} onTabChange={(tab) => this.changeTab(tab)} />
        <Preview tagName={currentTab} id={currentId} />
        <ItemList />
      </div>
    );
  }
}
