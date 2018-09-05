import React from 'react';
import { Provider } from 'mobx-react/native';
import DeviceInfo from 'react-native-device-info';
import stores from './store';
import Root from './Router';
import { initP2PServer } from './p2p/index';

export default class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    initP2PServer(3030);
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
