"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const netInfoDecorator = (WrappedComponent) => class extends react_1.default.Component {
    constructor(props) {
        super(props);
        this._handleNetworkConnectivityChange = (isConnected) => {
            this.setState({ isConnected });
        };
        this.state = {
            isConnected: true,
        };
    }
    componentDidMount() {
        react_native_1.NetInfo.isConnected.addEventListener('change', this._handleNetworkConnectivityChange);
    }
    render() {
        return (react_1.default.createElement(WrappedComponent, Object.assign({}, this.props, this.state)));
    }
};
exports.default = netInfoDecorator;
