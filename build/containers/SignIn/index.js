"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
class SignIn extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.countryChange = (country) => {
            this.setState({ country });
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
        this.state = {
            country: 'ch',
            phone: '',
            password: ''
        };
    }
    render() {
        const { country, phone, password } = this.state;
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.logo },
                react_1.default.createElement(react_native_1.Text, { style: styles_1.default.logoTxt }, "Sin Game")),
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginBox },
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginTitle },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, "\u56FD\u5BB6")),
                    react_1.default.createElement(react_native_1.Picker, { style: [styles_1.default.loginExtra, { display: 'none' }], selectedValue: country, onValueChange: this.countryChange },
                        react_1.default.createElement(react_native_1.Picker.Item, { label: "\u4E2D\u56FD", value: "ch" }),
                        react_1.default.createElement(react_native_1.Picker.Item, { label: "\u82F1\u56FD", value: "en" }))),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginTitle },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.loginTxt }, "+86")),
                    react_1.default.createElement(react_native_1.TextInput, { placeholder: "\u8F93\u5165\u5185\u5BB9", value: phone, onChangeText: this.phoneChange })),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.loginItem },
                    react_1.default.createElement(react_native_1.TextInput, { style: styles_1.default.loginExtra, value: password, onChangeText: this.passwordChange, secureTextEntry: true })),
                react_1.default.createElement(react_native_1.TouchableHighlight, { style: styles_1.default.loginBtn, onPress: this.login },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.btnTxt }, "\u767B\u5F55")),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.loginTip, onPress: this.forgot },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.tipTxt }, "\u5FD8\u8BB0\u4E86\u5BC6\u7801\uFF1F")))));
    }
}
SignIn.navigationOptions = () => {
    return {
        header: null
    };
};
exports.default = SignIn;
