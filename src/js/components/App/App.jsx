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
      currentTab: 'main page',
      currentId: 1,
      update: false,
    };
  }

  changeTab(tab) {
    this.setState(({ currentTab, currentId }) => {
      const newTab = tab.toLowerCase();
      return { currentTab: newTab, currentId: 1, update: true };
    });
  }

  changeId(id) {
    this.setState({ currentId: id });
  }

  updateHandler() {
    this.setState(({ update }) => {
      const newUpdate = !update;
      return { update: newUpdate };
    });
  }

  render() {
    const { currentTab, currentId, update } = this.state;
    return (
      <div className="container">
        <Header currentTab={currentTab} onTabChange={(tab) => this.changeTab(tab)} />
        <Preview tabName={currentTab} id={currentId} />
        {currentTab !== 'main page'
          ? (
            <ItemList
              tabName={currentTab}
              id={currentId}
              onClick={(id) => this.changeId(id)}
              update={update}
              onUpdate={() => this.updateHandler()}
            />
          )
          : null }
      </div>
    );
  }
}
