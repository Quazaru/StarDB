/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Spinner from '../Spinner/Spinner.jsx';
import './ItemList.scss';

class ItemList extends React.Component {
  renderList(data) {
    if (!data) {
      return;
    }
    const elements = data.map((el, index) => {
      const { name } = el;
      return (
        <li
          className={`item-list__item ${index === this.props.id ? 'active' : ''}`}
          key={name}
          onClick={() => this.props.onClick(index)}
        >
          {name}
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
    return (
      <div className="item-list">
        <button
          className="item-list__item item-list__random"
          onClick={() => this.props.onClick(Math.floor(Math.random() * 50 + 1))}
        >
          Random !
        </button>
        <ul className="item-list__ul">
          {this.renderList(this.props.data)}
        </ul>
      </div>
    );
  }
}

export default ItemList;
