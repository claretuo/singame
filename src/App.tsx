import React from 'react';
import { Provider } from 'mobx-react/native';
import stores from './store';
import Root from './Router';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider { ...stores }>
        <Root />
      </Provider>
    );
  }
}
