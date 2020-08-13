import React from 'react';

import './DevelopmentProgress.scss';

class DevelopmentProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { data } = this.props;
    const parsedData = JSON.parse(data);
    const logList = parsedData.map((el) => (
      <li className="dev-progress__item" key={el.version}>
        <p className="dev-progress__sub-title">
          {el.title}
          <span className="dev-progress__version">
            {el.version}
          </span>
        </p>
        <div className="dev-progress__description">
          {el.description}
        </div>
        <span className="dev-progress__date">
          {el.date}
        </span>
      </li>
    ));

    return (
      <div className="dev-progress">
        <p className="dev-progress__title">
          Our Development progress:
        </p>
        <ul className="dev-progress__list">
          {logList}
        </ul>
      </div>
    );
  }
}

export default DevelopmentProgress;
