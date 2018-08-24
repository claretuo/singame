import React from 'react';

import { View, Text } from 'react-native';
import styles from './styles';

export default class Main extends React.Component<{}, {}> {
  static navigationOptions = () => {
    return {
      tabBarLabel: '首页',
      header: null
    };
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        this is main page
        </Text>
      </View>
    );
  }
}