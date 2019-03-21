import React from 'react';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { REHYDRATE, persistStore } from 'redux-persist'

import {registerScreen} from './src/navigation/config';
import navigation from './src/navigation';
import configureStore from './src/redux/configureStore';
import {boardingStatus} from './src/screens/boarding/actions';
import { persistStore as persistStoreRaw } from 'redux-persist';

const store = configureStore()
registerScreen();
Navigation.events().registerAppLaunchedListener(() => {
  // Navigation.setRoot(isBoarding === 0 ? navigation.loading() : navigation.login())
  Navigation.setRoot(navigation.loading())
});
// export default class App extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     store.subscribe(this.onStoreUpdate.bind(this));
//     // store.dispatch(boardingStatus(0))
//     Platform.OS == 'android' ? store.dispatch(boardingStatus(0)) : null;
//     console.log('constructor appjs');
//   }
 
//   onStoreUpdate() {
//     let isBoarding = store.getState().boarding.boardingStatus
//     let isLogin = store.getState().login.isLogin
//     console.log('constructor update');
//     if (REHYDRATE === 'persist/REHYDRATE') {
//       this.startApp(isBoarding, isLogin)
//     }
//   }
 
//   startApp(isBoarding, isLogin) {
//     Navigation.events().registerAppLaunchedListener(() => {
//       // Navigation.setRoot(isBoarding === 0 ? navigation.loading() : navigation.login())
//       Navigation.setRoot(navigation.loading())
//     });
//   }
// }