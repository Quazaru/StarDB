import React from 'react';
import SwapiService from '../../modules/SwapiService';
import './ItemList.scss';

const service = new SwapiService();

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
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
          className="item-list__item "
          key={name}
          onClick={() => this.props.onClick(index + 1)}
        >
          {name}
        </li>
      );
    });
    return elements;
  };

  render() {
    const { data } = this.state;
    const { tabName } = this.props;
    if (tabName !== 'main page') {
      service.getElement(tabName)
        .then((res) => {
          this.setState({ data: res });
        });
    }
    return (
      <ul className="item-list">
        {this.renderList(data)}
      </ul>
    );
  }
}

export default ItemList;
