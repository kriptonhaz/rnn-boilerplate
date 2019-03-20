import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class ForgotPasswordScreen extends React.PureComponent{

  goBack = () =>{
    Navigation.popToRoot(this.props.componentId);
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity 
        onPress={()=>this.goBack()}
        style={{
          width: 100,
          height: 50, 
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'purple'
        }}>
          <Text>GO BACK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}