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
        setTimeout(() => {
          onClick(window.location.pathname.match(/[a-z]*/gm)[1]);
        }, 500);
      }}
      className="go-back-btn"
    >
      Go Back
      {'<<'}
    </button>
  );
};

export default withRouter(GoBackBtn);
