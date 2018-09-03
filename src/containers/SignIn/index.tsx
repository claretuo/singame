import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { Animated, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { AnimatedValue, NavigationInjectedProps } from 'react-navigation';
import Select from '../../components/Select';
import { i18n } from '../../i18n';
import { Country, SignInProps } from '../../store/signIn/index';
import styles from './styles';

interface IProps {
  signIn: SignInProps;
}

interface IState {
  rotation: AnimatedValue;
  modalVisible: boolean;
  getCodeEnable: boolean;
  codeTime: number;
}

let timer: NodeJS.Timer;

@inject('signIn')
@observer
export default class SignIn extends React.Component<IProps & NavigationInjectedProps, IState> {
  static navigationOptions = () => {
    return {
      header: null
    };
  }
  constructor(props: any) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0),
      modalVisible: false,
      getCodeEnable: true,
      codeTime: 60
    };
  }
  componentDidMount() {
    this.props.signIn.getCountries();
  }
  countryChange = (countryId: number) => {
    this.props.signIn.setCountry(countryId);
    this.setState({
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
    this.props.signIn.setPhone(phone);
  }
  getVerifyCode = () => {
    if (timer) {
      return false;
    }
    const self = this;
    this.setState({
      getCodeEnable: false,
    });
    timer = setInterval(() => {
      if (self.state.codeTime <= 0) {
        clearInterval(timer);
        self.setState({
          codeTime: 60,
          getCodeEnable: true
        });
      }
      self.setState({
        codeTime: self.state.codeTime - 1
      });
    }, 1000);
  }
  verifyCodeChange = (verifyCode: string) => {
    this.props.signIn.setVerifyCode(verifyCode);
  }
  login = () => {
    console.log('login btn pressed', this.props.navigation);
    this.props.signIn.login();
    this.props.navigation.replace('Home');
  }
  forgot = () => {
    console.log('forgot btn pressed');
    this.props.signIn.forgot();
  }

  setModalVisible = (modalVisible: boolean) => {
    this.toggleRotation(1);
    this.setState({ modalVisible });
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  public render() {
    const { countryId, phone, verifyCode, countryList, loading } = this.props.signIn;
    const {  modalVisible, getCodeEnable, codeTime } = this.state;
    const selectedCountry = countryId ?
      (countryList.find(country => country.id === countryId) as Country).name
      : '';
    if (loading) {
      console.log('loading');
    }
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
                <Text style={styles.loginTxt}>{selectedCountry}</Text>
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
              }]} source={require('../../resources/drop-down.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.loginItem}>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTxt}>+86</Text>
            </View>
            <TextInput
              style={[styles.loginExtra, styles.text]}
              placeholder={i18n.t('login.phonePlaceholder')}
              maxLength={15}
              value={phone}
              onChangeText={this.phoneChange} />
          </View>
          <View style={styles.loginItem}>
            <TouchableOpacity
              disabled={!getCodeEnable}
              style={
                [styles.getCode, (!getCodeEnable ? styles.disabled : null)
                ]}
              onPress={this.getVerifyCode}>
              <Text style={styles.codeTxt}>{getCodeEnable ? i18n.t('login.getCode') : `${i18n.t('login.getCoding')}(${codeTime})`}</Text>
            </TouchableOpacity>
            <TextInput style={[styles.loginExtra, styles.text]} maxLength={6} value={verifyCode} onChangeText={this.verifyCodeChange}></TextInput>
          </View>
          <TouchableHighlight style={styles.loginBtn} onPress={this.login}>
            <Text style={styles.btnTxt}>{i18n.t('login.loginBtn')}</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.loginTip} onPress={this.forgot}>
            <Text style={styles.tipTxt}>{i18n.t('login.forgot')}</Text>
          </TouchableOpacity>
        </View>
        <Select visible={modalVisible} options={countryList} defaultVal={countryId} choose={this.countryChange} hide={this.hideCountry} />
      </View>
    );
  }
}