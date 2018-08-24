"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalContants_1 = require("./utils/GlobalContants");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("mobx-react/native");
const store_1 = __importDefault(require("./store"));
const Hello_1 = require("./components/Hello");
class App extends react_1.default.Component {
    render() {
        console.log('the global screen info ', GlobalContants_1.gScreen, react_native_1.Platform);
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(native_1.Provider, Object.assign({}, store_1.default),
                react_1.default.createElement(Hello_1.Hello, { name: "hello", enthusiasmLevel: 1 }))));
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
