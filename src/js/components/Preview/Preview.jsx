import React from 'react';
import './Preview.scss';
import SwapiService from '../../modules/SwapiService';
import renderInfo from '../../modules/renderInfo.jsx';
import Spinner from '../Spinner/Spinner.jsx';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: this.props.tabName,
      id: this.props.id,
      currentData: false,
      isLoading: true,
    };
  }

  updateData(service) {
    const { tabName, id } = this.props;
    this.setState(() => ({ tabName, id }));
    service.getElement(tabName, id)
      .then((res) => this.setState({ currentData: { ...res }, isLoading: false }));
  }

  render() {
    if (this.props.tabName !== this.state.tabName || this.props.id !== this.state.id) {
      this.setState({ isLoading: true });
      const service = new SwapiService();
      this.updateData(service);
    }
    const { tabName } = this.props;
    const { isLoading } = this.state;
    const { infoList, img = '../../../assets/img/planet.svg' } = renderInfo(tabName, this.state.currentData);
    return (
      <div className="preview">
        {isLoading && tabName !== 'main page' ? <Spinner />
          : (
            <div className="preview">
              <div className="preview__img">
                <img src={img} alt="planet-default" />
              </div>
              <div className="preview__body">
                {infoList}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Preview;
