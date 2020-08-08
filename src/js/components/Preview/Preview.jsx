import React from 'react';
import './Preview.scss';
import SwapiService from '../../modules/SwapiService';
import renderInfo from '../../modules/renderInfo.jsx';
class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      currentData: false,
    };
  }

  updateData() {
    if (!this.state.currentData) {
      const { tabName } = this.props;
      const { id } = this.state;
      const service = new SwapiService();
      service.getElement(tabName, id)
        .then((res) => this.setState({ currentData: { ...res } }));
    }
  }

  render() {
    this.updateData();
    const { tabName } = this.props;
    const { infoList, img = '../../../assets/img/planet.svg' } = renderInfo(tabName, this.state.currentData);
    return (
      <div className="preview">
        <div className="preview__img">
          <img src={img} alt="planet-default" />
        </div>
        <div className="preview__body">
          {infoList}
        </div>
      </div>
    );
  }
}

export default Preview;
