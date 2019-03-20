import React from 'react'
import { Navigation } from 'react-native-navigation';

import BoardingScreen from '../screens/boarding/BoardingScreens';
import LoginScreen from '../screens/login/LoginScreens';
import ForgotPasswordScreen from '../screens/forgotPassword/forgotPasswordScreens';
import Provider from '../redux/Provider';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export function registerScreen(){
  Navigation.registerComponent('Boarding', () => WrappedComponent(BoardingScreen));
  Navigation.registerComponent('Login', () => WrappedComponent(LoginScreen));
  Navigation.registerComponent('ForgotPassword', () => WrappedComponent(ForgotPasswordScreen));
}