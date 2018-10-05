import { createStackNavigator } from 'react-navigation';
import home from '../screens/home';
import game from '../screens/game';

const AppNavigator = createStackNavigator({
    Home: { screen: home },
    Game: { screen: game }
});

export default AppNavigator;
