/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import withDataLoadingFn from '../../hoc-helpers/withData.jsx';
import { MutualDataConsumer } from '../MutualData-context/MutualData-context.jsx';

import './ItemList.scss';

class ItemList extends React.Component {
  renderList(data) {
    if (!data) {
      return;
    }
    const { currentTab } = this.props;
    const elements = data.map((el, index) => {
      const { name } = el;
      let subInfo = '';
      if (currentTab === 'planets') {
        const { terrain } = el;
        subInfo = `( ${terrain} )`;
      }
      if (currentTab === 'people') {
        const { years } = el;
        subInfo = `( ${years} )`;
      }
      if (currentTab === 'species') {
        const { classification } = el;
        subInfo = `( ${classification} )`;
      }
      return (
        <li
          className={`item-list__item ${index === this.props.id ? 'active' : ''}`}
          key={name}
          onClick={() => this.props.onClick(index)}
        >
          {name}
          {' '}
          <span className="item-list__sub-info">{subInfo}</span>
        </li>
      );
    });
    return elements;
  }

  render() {
    const RandomizeButton = (
      <button
        type="button"
        className="item-list__item item-list__random"
        onClick={() => this.props.onClick(Math.floor(Math.random() * 50 + 1))}
      >
        Random !
      </button>
    );
    const elementList = this.renderList(this.props.data); // prepared buttons

    return (
      <MutualDataConsumer>
        {({ theme }) => (
          <div className={theme === 'dark' ? 'item-list item-list_dark' : 'item-list'}>
            {RandomizeButton}
            <ul className="item-list__ul">
              {elementList}
            </ul>
          </div>
        )}
      </MutualDataConsumer>
    );
  }
}

export default withDataLoadingFn(ItemList);
