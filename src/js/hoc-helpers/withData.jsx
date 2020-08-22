/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Spinner from '../components/Spinner/Spinner.jsx';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.jsx';
import { MutualDataConsumer } from '../components/MutualData-context/MutualData-context.jsx';

const withDataLoadingFn = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <MutualDataConsumer>
        {({ theme, isLoading }) => {
          const { data } = this.props;
          if (!data || isLoading) {
            return (
              <Spinner />
            );
          }
          return (
            <ErrorBoundary>
              <Component {...this.props} data={data} />
            </ErrorBoundary>
          );
        }}
      </MutualDataConsumer>
    );
  }
};

export default withDataLoadingFn;
