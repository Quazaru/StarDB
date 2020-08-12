import React from 'react';
import './ErrorIndicator.scss';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img
      src="../../../assets/img/attention.svg"
      alt="attention-img"
      className="error-indicator__img"
    />

    Something broke.
    {' '}
    <br />
    Try to reload page.
  </div>
);

export default ErrorIndicator;
