import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {loginRequest, loginStatus} from './action';
import {Navigation} from 'react-native-navigation';
import navigation from '../../navigation/';

export class LoginScreen extends React.PureComponent{

  setStatus = () =>{
    this.props.loginStatus(10);
    console.log('loginStatus = '+JSON.stringify(this.props.loginRedux.isLogin));
  }

  goForgot = () =>{
    Navigation.push(this.props.componentId, navigation.views.forgotPassword());
  }

  render(){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'red'}}>
        <Text onPress={()=>this.setStatus()}>SAMPLE TEXT</Text>
        <TouchableOpacity 
        onPress={()=>this.goForgot()}
        style={{
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink'
        }}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({ loginRedux: state.login })

const mapDispatchToProps = dispatch => ({ 
  loginRequest: () => dispatch(loginRequest()),
  loginStatus: (val)=> dispatch(loginStatus(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)