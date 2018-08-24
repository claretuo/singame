"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const containers_1 = __importDefault(require("./containers"));
const { Main, SignIn, Profile, Game } = containers_1.default;
const app = react_navigation_1.TabNavigator({
    Main: { screen: Main },
    SignIn: { screen: SignIn },
    Profile: { screen: Profile },
    Game: { screen: Game },
}, { initialRouteName: 'Main' });
exports.default = app;