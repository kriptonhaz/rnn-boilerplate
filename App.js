import React from 'react';
import {Navigation} from 'react-native-navigation'
import _ from 'lodash';

import {registerScreen} from './src/navigation/config';
import navigation from './src/navigation';
import configureStore from './src/redux/configureStore';
import {boardingStatus} from './src/screens/boarding/actions';

const store = configureStore();
registerScreen();

export default class App extends React.PureComponent{
  constructor(props){
    super(props);
    let isBoarding = store.getState().boarding.boardingStatus;
    let isLogin = store.getState().login.isLogin;
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(boardingStatus(0))
  }

  async componentDidMount(){
    
  }

  onStoreUpdate(){
    console.log('store getState = ', store.getState());
    let persist = store.getState()._persist.rehydrated;
    console.log('store persist = '+JSON.stringify(persist))
    let boarding = store.getState().boarding;
    let isBoarding = store.getState().boarding.boardingStatus;
    let isLogin = store.getState().login.isLogin;
    if(!persist){
      console.log('isBoarding = '+JSON.stringify(isBoarding));
      console.log('isLogin = '+JSON.stringify(isLogin));
      this.startApp(isBoarding, isLogin);
    }
    // if(this.currentAppInfo != boarding && persist){
    //   this.currentAppInfo = boarding;
    //   this.startApp(isBoarding, isLogin);
    // }

    // if(_.result(this.currentBoarding, "boardingStatus") !== isBoarding){
    //   this.currentBoarding = boarding;
    //   this.startApp(isBoarding, isLogin);
    // }
    // if(this.currentBoarding != undefined){
    //   if(this.currentBoarding != boarding){
    //     this.currentBoarding = boarding;
    //     this.startApp(isBoarding, isLogin)
    //   } else{
    //     this.startApp(isBoarding, isLogin)
    //   }
    // }
  }

  startApp(isBoarding, isLogin){
    if(isBoarding === 0){
      console.log('Masuk If', isBoarding)      
      Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot(navigation.boarding())
      });
    } else{
      Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot(navigation.login())
      });
    }
  }
}