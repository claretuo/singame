"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
class Main extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.text }, "this is main page")));
    }
}
Main.navigationOptions = () => {
    return {
        tabBarLabel: '首页',
        header: null
    };
};
exports.default = Main;
