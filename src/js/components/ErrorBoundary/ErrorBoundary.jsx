import React from 'react';
import './ErrorBoundary.scss';

import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const content = this.props.children;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return content;
  }
}

export default ErrorBoundary;
