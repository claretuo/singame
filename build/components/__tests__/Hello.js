"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const Hello_1 = require("../Hello");
it('renders correctly with defaults', () => {
    const button = react_test_renderer_1.default.create(react_1.default.createElement(Hello_1.Hello, { name: "World", enthusiasmLevel: 1 })).toJSON();
    expect(button).toMatchSnapshot();
});
