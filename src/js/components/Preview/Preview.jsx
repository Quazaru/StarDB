import React from 'react';
import './Preview.scss';
import SwapiService from '../../modules/SwapiService';
import renderInfo from '../../modules/renderInfo.jsx';


class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: this.props.tabName,
      id: this.props.id,
      currentData: false,
    };
  }

  updateData(service) {
    const { tabName, id } = this.props;
    this.setState(() => ({tabName: tabName, id: id}));
    service.getElement(tabName, id)
      .then((res) => this.setState({ currentData: { ...res } }));
  }

  render() {
    if (this.props.tabName !== this.state.tabName || this.props.id !== this.state.id) {
      const service = new SwapiService();
      this.updateData(service);
    }
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