import React, { Component } from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(err) {
    //process the error
    return { hasErrored: true };
  }

  componentDidCatch(err, info) {
    console.log('Msg err: ', err);
  }

  render() {
    const { hasErrored } = this.state;
    if (hasErrored) {
      return (
        <div className="error-boundary__wrap">
          <div className="error-boundary__img" />
          <h2 className="error-boundary__title">
            Извините, эта страница сломана
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
