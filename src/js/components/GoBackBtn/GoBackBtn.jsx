import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './GoBackBtn.scss';

const GoBackBtn = (props) => {
  const { history, onClick, match } = props;
  return (
    <button
      type="button"
      onClick={() => {
        history.goBack();
        console.log(history);
        console.log('MATH', match);
        console.log(history.location.pathname);
        console.log(window.location.pathname)
      }}
      className="go-back-btn"
    >
      Go Back
      {'<<'}
    </button>
  );
};

export default withRouter(GoBackBtn);
