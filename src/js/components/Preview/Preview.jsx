/* eslint-disable import/extensions */
import React from 'react';
import './Preview.scss';
import renderInfo from '../../modules/renderInfo.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import templates from '../../../assets/data assets/itemListTemplate';

const Preview = (props) => {
  const { tabName, isLoading, data } = props;
  const { infoList, img = '../../../assets/img/planet.svg' } = renderInfo(templates[tabName], data, tabName);
  if (isLoading && tabName !== 'main page') {
    return (
      <div className="preview">
        <Spinner />
      </div>
    );
  }
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
};

export default Preview;
