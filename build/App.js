"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = require("mobx-react/native");
const react_native_device_info_1 = __importDefault(require("react-native-device-info"));
const store_1 = __importDefault(require("./store"));
const Router_1 = __importDefault(require("./Router"));
class App extends react_1.default.Component {
    render() {
        console.log('device info', react_native_device_info_1.default.getDeviceCountry(), react_native_device_info_1.default.getDeviceId(), react_native_device_info_1.default.getDeviceLocale(), react_native_device_info_1.default.getDeviceName());
        return (react_1.default.createElement(native_1.Provider, Object.assign({}, store_1.default),
            react_1.default.createElement(Router_1.default, null)));
    }
}
exports.default = App;
