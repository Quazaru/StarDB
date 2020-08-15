/* eslint-disable import/extensions */
import React from 'react';
import './Preview.scss';
import renderInfo from '../../modules/renderInfo.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import templates from '../../../assets/data assets/itemListTemplate';
import { MutualDataConsumer } from '../MutualData-context/MutualData-context.jsx';

const Preview = (props) => {
  const { tabName, isLoading, data } = props;
  const { infoList, img = '../../../assets/img/planet.svg' } = renderInfo(templates[tabName], data, tabName);
  if (isLoading && tabName !== 'main page') {
    return (
      <MutualDataConsumer>
        {({ theme }) => {
          if (theme === 'dark') {
            return <Spinner />;
          }
          return (
            <div className="preview">
              <Spinner />
            </div>
          );
        }}
      </MutualDataConsumer>

    );
  }
  return (
    <MutualDataConsumer>
      {({ theme }) => (
        <div className={theme === 'dark' ? 'preview preview_dark' : 'preview'}>
          <div className="preview__img">
            <img src={img} alt="planet-default" />
          </div>
          <div className="preview__body">
            {infoList}
          </div>
        </div>
      )}
    </MutualDataConsumer>
  );
};

export default Preview;
