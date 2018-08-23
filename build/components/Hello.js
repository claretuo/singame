"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var native_1 = require("mobx-react/native");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.onIncrement = function () { return _this.setState({ enthusiasmLevel: _this.state.enthusiasmLevel + 1 }); };
        _this.onDecrement = function () { return _this.setState({ enthusiasmLevel: _this.state.enthusiasmLevel - 1 }); };
        _this.onIncrement1 = function () {
            console.log('on increment ');
            if (_this.props.test && _this.props.test.increase) {
                _this.props.test.increase();
            }
        };
        _this.onDecrement1 = function () {
            console.log('on increment ');
            if (_this.props.test && _this.props.test.decrease) {
                _this.props.test.decrease();
            }
        };
        _this.getExclamationMarks = function (numChars) { return Array(numChars + 1).join('!'); };
        console.log(props);
        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        _this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        };
        return _this;
    }
    Hello.prototype.render = function () {
        var list = ['a', 'b', 'c'];
        console.log(this.props);
        return (react_1.default.createElement(react_native_1.View, { style: styles.root },
            react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
                "Hello ",
                this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)),
            react_1.default.createElement(react_native_1.View, { style: styles.buttons },
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "-", onPress: this.onDecrement, accessibilityLabel: "decrement", color: "red" })),
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "+", onPress: this.onIncrement, accessibilityLabel: "increment", color: "blue" }))),
            react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
                "Hello ",
                this.props.test && this.props.test.sum),
            react_1.default.createElement(react_native_1.View, { style: styles.buttons },
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "-", onPress: this.onDecrement1, accessibilityLabel: "decrement", color: "red" })),
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "+", onPress: this.onIncrement1, accessibilityLabel: "increment", color: "blue" })))));
    };
    Hello = __decorate([
        native_1.inject('test'),
        native_1.observer
    ], Hello);
    return Hello;
}(react_1.default.Component));
exports.Hello = Hello;
// styles
var styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold'
    }
});
