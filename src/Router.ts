import { NavigationContainer, TabNavigator, StackNavigator } from 'react-navigation';
import containers from './containers';

const { Main, SignIn, Profile, Game } = containers;
const Home: NavigationContainer = TabNavigator({
  Main: { screen: Main },
  Profile: { screen: Profile },
  Game: { screen: Game },
}, { initialRouteName: 'Main'});

const app: NavigationContainer = StackNavigator({
  Home: { screen: Home },
  SignIn: SignIn
}, { initialRouteName: 'Home' });

export default app;