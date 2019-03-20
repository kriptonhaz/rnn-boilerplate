import {Navigation} from 'react-native-navigation'
import {registerScreen} from './src/navigation/config';
import navigation from './src/navigation';

registerScreen();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(navigation.boarding())
});