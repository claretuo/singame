import React from 'react';
import { Provider } from 'mobx-react/native';
import DeviceInfo from 'react-native-device-info';
import stores from './store';
import Root from './Router';
import { initP2PServer } from './p2p/index';
import { Server } from 'ws';

interface IAppState {
  wss?: Server;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    const wss: Server = initP2PServer(3030);
    this.setState({
      wss,
    });
  }
  componentWillUnmount() {
    const { wss } = this.state;
    if (wss) {
      wss.close();
      this.setState({
        wss: undefined
      });
    }
  }
  render() {
    console.log('device info', DeviceInfo.getDeviceCountry(), DeviceInfo.getDeviceId(), DeviceInfo.getDeviceLocale(), DeviceInfo.getDeviceName());
    return (
      <Provider { ...stores }>
        <Root />
      </Provider>
    );
  }
}
