import React from 'react';

import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';
import { NavigationInjectedProps, AnimatedValue } from 'react-navigation';
import { i18n } from '../../i18n';
import Select from '../../components/Select';

interface IProps {
  someProp?: string;
}

interface IState {
  country: string;
  phone: string;
  password: string;
  rotation: AnimatedValue;
  modalVisible: boolean;
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
      password: '',
      rotation: new Animated.Value(0),
      modalVisible: false
    };
  }
  componentDidMount() {
    // Animated.timing(this.state.rotation, {
    //   toValue: 0,
    //   duration: 500,
    // }).start();
  }
  countryChange = (country: string) => {
    this.setState({
      country,
      modalVisible: false
    });
    this.toggleRotation(0);
  }
  hideCountry = () => {
    this.setState({
      modalVisible: false
    });
    this.toggleRotation(0);
  }
  toggleRotation = (toValue: number) => {
    Animated.timing(this.state.rotation, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: true
    }).start();
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

  setModalVisible = (modalVisible: boolean) => {
    this.toggleRotation(1);
    this.setState({ modalVisible });
  }

  public render() {
    const { country, phone, password, modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoTxt}>Sin Game</Text>
        </View>
        <View style={styles.loginBox}>
          <View style={styles.loginItem}>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTxt}>{i18n.t('login.country')}</Text>
            </View>
            <TouchableOpacity style={styles.loginToggle} onPress={this.setModalVisible.bind(this, true)}>
              <View style={styles.loginExtra}>
                <Text style={styles.loginTxt}>{country}</Text>
              </View>
              <Animated.Image style={[styles.dropDownBtn, {
                transform: [
                  {
                    rotate: this.state.rotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '180deg'],
                    })
                  }
                ]
              }]} source={require('./drop-down.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.loginItem}>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTxt}>+86</Text>
            </View>
            <TextInput placeholder={i18n.t('login.phonePlaceholder')} value={phone} onChangeText={this.phoneChange} />
          </View>
          <View style={styles.loginItem}>
            <TextInput style={styles.loginExtra} value={password} onChangeText={this.passwordChange} secureTextEntry></TextInput>
          </View>
          <TouchableHighlight style={styles.loginBtn} onPress={this.login}>
            <Text style={styles.btnTxt}>{i18n.t('login.loginBtn')}</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.loginTip} onPress={this.forgot}>
            <Text style={styles.tipTxt}>{i18n.t('login.forgot')}</Text>
          </TouchableOpacity>
        </View>
        <Select visible={ modalVisible } options={['ch', 'en']} defaultVal={country} choose={this.countryChange} hide={this.hideCountry} />
      </View>
    );
  }
}