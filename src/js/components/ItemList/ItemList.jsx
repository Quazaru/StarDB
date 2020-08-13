/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Spinner from '../Spinner/Spinner.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
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
    const { isLoading, update, tabName } = this.props;
    if (tabName !== 'main page' && update) {
      this.props.onUpdate();
    }
    if (isLoading) {
      return (
        <ul className="item-list">
          <Spinner />
        </ul>
      );
    }

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
      <ErrorBoundary>
        <div className="item-list">
          {RandomizeButton}
          <ul className="item-list__ul">
            {elementList}
          </ul>
        </div>
      </ErrorBoundary>
    );
  }
}

export default ItemList;
