import React from 'react';
import { Provider } from 'mobx-react/native';
import DeviceInfo from 'react-native-device-info';
import stores from './store';
import Root from './Router';

export default class App extends React.Component<{}, {}> {
  render() {
    console.log('device info', DeviceInfo.getDeviceCountry(), DeviceInfo.getDeviceId(), DeviceInfo.getDeviceLocale(), DeviceInfo.getDeviceName());
    return (
      <Provider { ...stores }>
        <Root />
      </Provider>
    );
  }
}
