"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const i18n_1 = require("../../i18n");
const Select_1 = __importDefault(require("../../components/Select"));
class SignIn extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.countryChange = (country) => {
            this.setState({
                country,
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
            this.setState({ phone });
        };
        this.passwordChange = (password) => {
            this.setState({ password });
        };
        this.login = () => {
            console.log('login btn pressed', this.props.navigation);
            this.props.navigation.replace('Home');
        };
        this.forgot = () => {
            console.log('forgot btn pressed');
        };
        this.setModalVisible = (modalVisible) => {
            this.toggleRotation(1);
            this.setState({ modalVisible });
        };
        this.state = {
            country: 'ch',
            phone: '',
            password: '',
            rotation: new react_native_1.Animated.Value(0),
            modalVisible: false
        };
    }
    componentDidMount() {
        // Animated.timing(this.state.rotation, {
        //   toValue: 0,
        //   duration: 500,
        // }).start();
    }
    render() {
        const { country, phone, password, modalVisible } = this.state;
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.logo },
                react_1.default.createElement(react_native_1.Text, { style: styles_1.default.logoTxt }, "Sin Game")),
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginBox },
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginTitle },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, i18n_1.i18n.t('login.country'))),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.loginToggle, onPress: this.setModalVisible.bind(this, true) },
                        react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginExtra },
                            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, country)),
                        react_1.default.createElement(react_native_1.Animated.Image, { style: [styles_1.default.dropDownBtn, {
                                    transform: [
                                        {
                                            rotate: this.state.rotation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '180deg'],
                                            })
                                        }
                                    ]
                                }], source: require('./drop-down.png') }))),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginTitle },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, "+86")),
                    react_1.default.createElement(react_native_1.TextInput, { placeholder: i18n_1.i18n.t('login.phonePlaceholder'), value: phone, onChangeText: this.phoneChange })),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.TextInput, { style: styles_1.default.loginExtra, value: password, onChangeText: this.passwordChange, secureTextEntry: true })),
                react_1.default.createElement(react_native_1.TouchableHighlight, { style: styles_1.default.loginBtn, onPress: this.login },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.btnTxt }, i18n_1.i18n.t('login.loginBtn'))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.loginTip, onPress: this.forgot },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.tipTxt }, i18n_1.i18n.t('login.forgot')))),
            react_1.default.createElement(Select_1.default, { visible: modalVisible, options: ['ch', 'en'], defaultVal: country, choose: this.countryChange, hide: this.hideCountry })));
    }
}
SignIn.navigationOptions = () => {
    return {
        header: null
    };
};
exports.default = SignIn;
