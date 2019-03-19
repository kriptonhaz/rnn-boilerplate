import React from 'react'
import { Navigation } from 'react-native-navigation';

import LoginScreen from '../screens/login/LoginScreens';
import Provider from '../redux/Provider';
import reduxStore from '../redux/configureStore';

export function registerScreen(){
  Navigation.registerComponent('Login', () => (props) => (
    <Provider store={reduxStore}>
      <LoginScreen {...props} />
    </Provider>
  ), () => LoginScreen);
}