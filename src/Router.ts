import { NavigationContainer, TabNavigator, StackNavigator } from 'react-navigation';
import containers from './containers';

const { Main, SignIn, Profile, Game, Activity, Contact, Wallet, UserInfo, UsernameUpdate, UserBrief } = containers;
const Mine: NavigationContainer = StackNavigator({
  Profile: { screen: Profile },
  Wallet: { screen: Wallet },
  UserInfo: { screen: UserInfo },
  UsernameUpdate: { screen: UsernameUpdate },
  UserBrief: { screen: UserBrief },
}, {
    initialRouteName: 'Profile',
    navigationOptions: ({navigation}) => {
      const { state } = navigation;
      if (state.routeName === 'Profile') {
        return {
          header: null
        };
      }
      return {};
    } });
const Home: NavigationContainer = TabNavigator({
  Main: { screen: Main },
  Game: { screen: Game },
  Activity: { screen: Activity },
  Contact: { screen: Contact },
  Mine: { screen: Mine }
}, { initialRouteName: 'Mine'});

const app: NavigationContainer = StackNavigator({
  Home: { screen: Home },
  SignIn: SignIn
}, { initialRouteName: 'Home', navigationOptions: { header: null }});

export default app;