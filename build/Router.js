"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const containers_1 = __importDefault(require("./containers"));
const { Main, SignIn, Profile, Game, Activity, Contact, Wallet, UserInfo, UsernameUpdate, UserBrief } = containers_1.default;
const Mine = react_navigation_1.StackNavigator({
    Profile: { screen: Profile },
    Wallet: { screen: Wallet },
    UserInfo: { screen: UserInfo },
    UsernameUpdate: { screen: UsernameUpdate },
    UserBrief: { screen: UserBrief },
}, {
    initialRouteName: 'Profile',
    navigationOptions: ({ navigation }) => {
        const { state } = navigation;
        if (state.routeName === 'Profile') {
            return {
                header: null
            };
        }
        return {};
    }
});
const Home = react_navigation_1.TabNavigator({
    Main: { screen: Main },
    Game: { screen: Game },
    Activity: { screen: Activity },
    Contact: { screen: Contact },
    Mine: { screen: Mine }
}, { initialRouteName: 'Mine' });
const app = react_navigation_1.StackNavigator({
    Home: { screen: Home },
    SignIn: SignIn
}, { initialRouteName: 'Home', navigationOptions: { header: null } });
exports.default = app;
