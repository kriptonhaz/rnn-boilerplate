import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import {loginRequest, loginStatus} from './action';

export class LoginScreen extends React.PureComponent{

  setStatus = () =>{
    this.props.loginStatus(10);
    console.log('loginStatus = '+JSON.stringify(this.props.loginRedux.isLogin));
  }

  render(){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text onPress={()=>this.setStatus()}>SAMPLE TEXT</Text>
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