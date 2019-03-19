import {Navigation} from 'react-native-navigation'
import {registerScreen} from './src/navigation/config';
import navigation from './src/navigation';
import {Provider} from 'react-redux';

registerScreen();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(navigation.main())
});