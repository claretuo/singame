import { NavigationContainer, TabNavigator, StackNavigator } from 'react-navigation';
import containers from './containers';

const { Main, SignIn, Profile, Game, Activity, Contact } = containers;
const Home: NavigationContainer = TabNavigator({
  Main: { screen: Main },
  Game: { screen: Game },
  Activity: { screen: Activity },
  Contact: { screen: Contact },
  Profile: { screen: Profile },
}, { initialRouteName: 'Main'});

const app: NavigationContainer = StackNavigator({
  Home: { screen: Home },
  SignIn: SignIn
}, { initialRouteName: 'Home' });

export default app;