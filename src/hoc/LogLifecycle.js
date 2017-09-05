import React, { Component } from 'react';

const getDisplayName = Component => {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

export default function logLifecycle(BaseComponent) {
  const displayName = getDisplayName(BaseComponent);

  class LogLifecycle extends Component {
    componentDidMount() {
      console.log(`An instance of component "${displayName}" was mounted.`);
    }

    componentWillUnmount() {
      console.log(`An instance of component "${displayName}" will unmount.`);
    }

    componentDidUpdate() {
      console.log(`An instance of component "${displayName}" did update.`);
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  LogLifecycle.displayName = `LogLifecycle(${displayName})`;

  return LogLifecycle;
}