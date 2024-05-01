/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable @next/next/no-html-link-for-pages */
// import React from 'react';

// // This class component can only be written in class format,
// // purpose of this is to show a friendly message to users
// // if there is an error with the app e.g. api call fail
// // However, they do NOT catch all types of errors
// // More information here: https://reactjs.org/docs/error-boundaries.html

import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="c-Error-boundary">
          <h1>Something went wrong</h1>
          <p>Oops! Try again later</p>
          <a href="/">Go to Home</a>
        </div>
      );
    }

    return this.props.children;
  }
}
