import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';
import { i18n } from '../../i18n';

export default class Wallet extends React.Component<NavigationInjectedProps, {}> {
  static navigationOptions = () => {
    return {
      headerTitle: i18n.t('wallet.title')
    };
  }
  public render() {
    return (
      <View>
        <Text>this is wallet page</Text>
      </View>
    );
  }
}