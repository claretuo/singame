"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const react_native_swiper_1 = __importDefault(require("react-native-swiper"));
const i18n_1 = require("../../i18n");
class Main extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onRefresh = () => {
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
        };
        this.state = {
            refreshing: false
        };
    }
    render() {
        return (react_1.default.createElement(react_native_1.ScrollView, { refreshControl: react_1.default.createElement(react_native_1.RefreshControl, { refreshing: this.state.refreshing, onRefresh: this.onRefresh }) },
            react_1.default.createElement(react_native_swiper_1.default, { style: styles_1.default.wrapper, showsButtons: true, pagingEnabled: true },
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.slide1 },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.text }, "Hello Swiper")),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.slide2 },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.text }, "Beautiful")),
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.slide3 },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.text }, "And simple")))));
    }
}
Main.navigationOptions = () => {
    return {
        tabBarLabel: i18n_1.i18n.t('router.main'),
        header: null
    };
};
exports.default = Main;
