"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = __importDefault(require("./styles"));
const react_native_1 = require("react-native");
const GlobalContants_1 = require("../../utils/GlobalContants");
const react_native_2 = require("react-native");
class Select extends react_1.default.Component {
    constructor(props) {
        super(props);
        // 显示动画
        this.in = () => {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(this.state.offset, {
                    easing: react_native_1.Easing.linear,
                    duration: 500,
                    toValue: 1,
                })
            ]).start();
        };
        // 隐藏动画
        this.out = () => {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(this.state.offset, {
                    easing: react_native_1.Easing.linear,
                    duration: 500,
                    toValue: 0,
                })
            ]).start();
        };
        // 取消
        this.cancel = () => {
            this.out();
            this.props.hide();
        };
        // 选择
        this.ok = () => {
            this.out();
            this.props.choose(this.state.choice);
        };
        this.state = {
            offset: new react_native_1.Animated.Value(0),
            choice: this.props.defaultVal,
            timer: undefined,
        };
    }
    componentDidMount() {
        this.in();
    }
    componentWillUnMount() {
        if (this.state.timer) {
            clearTimeout(this.state.timer);
        }
    }
    render() {
        if (!this.props.visible) {
            return (null);
        }
        else {
            return (react_1.default.createElement(react_native_1.Animated.View, { style: [styles_1.default.tip, {
                        transform: [{
                                translateY: this.state.offset.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [GlobalContants_1.gScreen.height, 0]
                                }),
                            }]
                    }] },
                react_1.default.createElement(react_native_1.View, { style: styles_1.default.tipTitleView },
                    react_1.default.createElement(react_native_2.TouchableOpacity, { style: styles_1.default.btn, onPress: this.cancel },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.cancelText }, "\u53D6\u6D88")),
                    react_1.default.createElement(react_native_2.TouchableOpacity, { style: styles_1.default.btn, onPress: this.ok },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.okText }, "\u786E\u5B9A"))),
                react_1.default.createElement(react_native_1.Picker, { style: styles_1.default.picker, mode: "dialog", selectedValue: this.state.choice, onValueChange: choice => this.setState({ choice: choice }) }, this.props.options.map((aOption) => react_1.default.createElement(react_native_1.Picker.Item, { color: "#555", label: aOption, value: aOption, key: aOption })))));
        }
    }
}
exports.default = Select;
