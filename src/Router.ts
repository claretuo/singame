import { NavigationContainer, TabNavigator } from 'react-navigation';
import containers from './containers';

const { Main, SignIn, Profile, Game } = containers;
const app: NavigationContainer = TabNavigator({
  Main: { screen: Main },
  SignIn: { screen: SignIn },
  Profile: { screen: Profile },
  Game: { screen: Game },
}, { initialRouteName: 'Main'});

export default app;