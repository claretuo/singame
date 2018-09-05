"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("mobx-react/native");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Select_1 = __importDefault(require("../../components/Select"));
const i18n_1 = require("../../i18n");
const styles_1 = __importDefault(require("./styles"));
let timer;
let SignIn = class SignIn extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.countryChange = (countryId) => {
            this.props.signIn.setCountry(countryId);
            this.setState({
                modalVisible: false
            });
            this.toggleRotation(0);
        };
        this.hideCountry = () => {
            this.setState({
                modalVisible: false
            });
            this.toggleRotation(0);
        };
        this.toggleRotation = (toValue) => {
            react_native_1.Animated.timing(this.state.rotation, {
                toValue: toValue,
                duration: 500,
                useNativeDriver: true
            }).start();
        };
        this.phoneChange = (phone) => {
            this.props.signIn.setPhone(phone);
        };
        this.getVerifyCode = () => {
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
        };
        this.verifyCodeChange = (verifyCode) => {
            this.props.signIn.setVerifyCode(verifyCode);
        };
        this.login = () => {
            console.log('login btn pressed', this.props.navigation);
            this.props.signIn.login();
            this.props.navigation.replace('Home');
        };
        this.forgot = () => {
            console.log('forgot btn pressed');
            this.props.signIn.forgot();
        };
        this.setModalVisible = (modalVisible) => {
            this.toggleRotation(1);
            this.setState({ modalVisible });
        };
        this.state = {
            rotation: new react_native_1.Animated.Value(0),
            modalVisible: false,
            getCodeEnable: true,
            codeTime: 60
        };
    }
    componentDidMount() {
        this.props.signIn.getCountries();
    }
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    render() {
        const { countryId, phone, verifyCode, countryList, loading } = this.props.signIn;
        const { modalVisible, getCodeEnable, codeTime } = this.state;
        const selectedCountry = countryId ?
            countryList.find(country => country.id === countryId).name
            : '';
        if (loading) {
            console.log('loading');
        }
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.logo },
                react_1.default.createElement(react_native_1.Text, { style: styles_1.default.logoTxt }, "Sin Game")),
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginBox },
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginTitle },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, i18n_1.i18n.t('login.country'))),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.loginToggle, onPress: this.setModalVisible.bind(this, true) },
                        react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginExtra },
                            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, selectedCountry)),
                        react_1.default.createElement(react_native_1.Animated.Image, { style: [styles_1.default.dropDownBtn, {
                                    transform: [
                                        {
                                            rotate: this.state.rotation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '180deg'],
                                            })
                                        }
                                    ]
                                }], source: require('../../resources/drop-down.png') }))),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginTitle },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, "+86")),
                    react_1.default.createElement(react_native_1.TextInput, { style: [styles_1.default.loginExtra, styles_1.default.text], placeholder: i18n_1.i18n.t('login.phonePlaceholder'), maxLength: 15, value: phone, onChangeText: this.phoneChange })),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { disabled: !getCodeEnable, style: [styles_1.default.getCode, (!getCodeEnable ? styles_1.default.disabled : null)
                        ], onPress: this.getVerifyCode },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.codeTxt }, getCodeEnable ? i18n_1.i18n.t('login.getCode') : `${i18n_1.i18n.t('login.getCoding')}(${codeTime})`)),
                    react_1.default.createElement(react_native_1.TextInput, { style: [styles_1.default.loginExtra, styles_1.default.text], maxLength: 6, value: verifyCode, onChangeText: this.verifyCodeChange })),
                react_1.default.createElement(react_native_1.TouchableHighlight, { style: styles_1.default.loginBtn, onPress: this.login },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.btnTxt }, i18n_1.i18n.t('login.loginBtn'))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.loginTip, onPress: this.forgot },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.tipTxt }, i18n_1.i18n.t('login.forgot')))),
            react_1.default.createElement(Select_1.default, { visible: modalVisible, options: countryList, defaultVal: countryId, choose: this.countryChange, hide: this.hideCountry })));
    }
};
SignIn.navigationOptions = () => {
    return {
        header: null
    };
};
SignIn = __decorate([
    native_1.inject('signIn'),
    native_1.observer
], SignIn);
exports.default = SignIn;
