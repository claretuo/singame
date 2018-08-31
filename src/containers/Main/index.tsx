import React from 'react';

import { View, Text, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { i18n } from '../../i18n';
interface IState {
  refreshing: boolean;
}
export default class Main extends React.Component<{}, IState> {
  static navigationOptions = () => {
    return {
      tabBarLabel: i18n.t('router.main'),
      header: null
    };
  }
  constructor(props: any) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  onRefresh = () => {
    console.log('refresh ');
    const self = this;
    this.setState({
      refreshing: true
    });
    setTimeout(() => {
      self.setState({
        refreshing: false
      });
    }, 1000);
  }
  public render() {
    return (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          }
        >
          <Swiper style={styles.wrapper} showsButtons={true} pagingEnabled={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </ScrollView>
    );
  }
}