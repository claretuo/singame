import * as React from 'react';
import { NavigationInjectedProps, NavigationScreenProp } from 'react-navigation';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { i18n } from '../../i18n';
import styles from './styles';

export default class UsernameUpdate extends React.Component<NavigationInjectedProps, {}> {
  static navigationOptions = ({ navigation }: { navigation: any}) => {
    const { state } = navigation;
    return {
      headerTitle: i18n.t('updateUsername.title'),
      headerRight: (<TouchableOpacity style={styles.rightBtn} onPress={state.params ? state.params.save : null}>
        <Image style={styles.headerIcon} source={require('../../resources/confirm.png')} />
        </TouchableOpacity>)
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      save: this.save
    });
  }
  usernameChange = (username: string) => {
    console.log('username', username);
  }
  save = () => {
    console.log('will save username');
  }
  public render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder={i18n.t('updateUsername.placeholder')} onChangeText={this.usernameChange} />
        <View>
          <Text style={styles.txt}>
            您可以在 Sin Game上设置一个用户名。设置后，别人将能够在不知道您的电话号码的情况下，通过此用户名找到您并与您联系。
          </Text>
        </View>
        <View>
          <Text style={styles.txt}>
            您可以使用a-z，0-9和下划线。最小长度为5个字符。
          </Text>
        </View>
        <View>
          <Text style={styles.txt}>
            此链接会在Sin Game上打开一个与您的会话窗口：https://t.me/username
          </Text>
        </View>
      </View>
    );
  }
}