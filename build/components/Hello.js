"use strict";
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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("mobx-react/native");
let Hello = class Hello extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
        this.onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
        this.onIncrement1 = () => {
            console.log('on increment ');
            if (this.props.test && this.props.test.increase) {
                this.props.test.increase();
            }
        };
        this.onDecrement1 = () => {
            console.log('on increment ');
            if (this.props.test && this.props.test.decrease) {
                this.props.test.decrease();
            }
        };
        this.getExclamationMarks = (numChars) => Array(numChars + 1).join('!');
        console.log(props);
        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        };
    }
    render() {
        const list = ['a', 'b', 'c'];
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
    }
};
Hello = __decorate([
    native_1.inject('test'),
    native_1.observer
], Hello);
exports.Hello = Hello;
// styles
const styles = react_native_1.StyleSheet.create({
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
