/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import SwapiService from '../../modules/SwapiService';
import Spinner from '../Spinner/Spinner.jsx';
import './ItemList.scss';

const service = new SwapiService();

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  renderList(data) {
    if (!data) {
      return;
    }
    const elements = data.map((el, index) => {
      const { name } = el;
      return (
        <li
          className={`item-list__item ${index + 1 === this.props.id ? 'active' : ''}`}
          key={name}
          onClick={() => this.props.onClick(index + 1)}
        >
          {name}
        </li>
      );
    });
    return elements;
  }

  render() {
    const { data, isLoading } = this.state;
    const { update } = this.props;
    const { tabName } = this.props;
    if (tabName !== 'main page' && update) {
      service.getElement(tabName)
        .then((res) => {
          console.log(res);
          if (data !== res) {
            this.setState({ data: res, isLoading: false });
          }
        });
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
      <ul className="item-list">
        <li
          className="item-list__item "
          onClick={() => this.props.onClick(Math.floor(Math.random() * 50 + 1))}
        >
          Random !
        </li>
        {this.renderList(data)}
      </ul>
    );
  }
}

export default ItemList;
