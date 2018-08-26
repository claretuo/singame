import React from 'react';

import { View, Text, Picker, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './styles';
import { NavigationInjectedProps } from 'react-navigation';

interface IProps {
  someProp?: string;
}

interface IState {
  country: string;
  phone: string;
  password: string;
}

export default class SignIn extends React.Component<IProps & NavigationInjectedProps, IState> {
  static navigationOptions = () => {
    return {
      header: null
    };
  }
  constructor(props: any) {
    super(props);
    this.state = {
      country: 'ch',
      phone: '',
      password: ''
    };
  }
  countryChange = (country: string) => {
    this.setState({ country });
  }
  phoneChange = (phone: string) => {
    this.setState({ phone });
  }
  passwordChange = (password: string) => {
    this.setState({ password });
  }
  login = () => {
    console.log('login btn pressed', this.props.navigation);
    this.props.navigation.replace('Home');
  }
  forgot = () => {
    console.log('forgot btn pressed');
  }

  public render() {
    const { country, phone, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoTxt}>Sin Game</Text>
        </View>
        <View style={styles.loginBox}>
          <View style={styles.loginItem}>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTxt}>国家</Text>
            </View>
            <Picker style={[styles.loginExtra, { display: 'none' }]} selectedValue={country} onValueChange={this.countryChange}>
              <Picker.Item label="中国" value="ch" />
              <Picker.Item label="英国" value="en" />
            </Picker>
          </View>
          <View style={styles.loginItem}>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTxt}>+86</Text>
            </View>
            <TextInput placeholder="输入内容" value={phone} onChangeText={this.phoneChange} />
          </View>
          <View style={styles.loginItem}>
            <TextInput style={styles.loginExtra} value={password} onChangeText={this.passwordChange} secureTextEntry></TextInput>
          </View>
          <TouchableHighlight style={styles.loginBtn} onPress={this.login}>
            <Text style={styles.btnTxt}>登录</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.loginTip} onPress={this.forgot}>
            <Text style={styles.tipTxt}>忘记了密码？</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}