"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const containers_1 = __importDefault(require("./containers"));
const { Main, SignIn, Profile, Game, Activity, Contact } = containers_1.default;
const Home = react_navigation_1.TabNavigator({
    Main: { screen: Main },
    Game: { screen: Game },
    Activity: { screen: Activity },
    Contact: { screen: Contact },
    Profile: { screen: Profile },
}, { initialRouteName: 'Main' });
const app = react_navigation_1.StackNavigator({
    Home: { screen: Home },
    SignIn: SignIn
}, { initialRouteName: 'Home' });
exports.default = app;
