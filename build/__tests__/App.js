"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_1 = __importDefault(require("../App"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
it('renders without crashing', () => {
    const rendered = react_test_renderer_1.default.create(react_1.default.createElement(App_1.default, null)).toJSON();
    expect(rendered).toBeTruthy();
});
