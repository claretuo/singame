"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = require("mobx-react/native");
const store_1 = __importDefault(require("./store"));
const Router_1 = __importDefault(require("./Router"));
class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(native_1.Provider, Object.assign({}, store_1.default),
            react_1.default.createElement(Router_1.default, null)));
    }
}
exports.default = App;
