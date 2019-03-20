import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import navigation from '../../navigation/';
import {boardingStatus} from './actions';

export class BoardingScreen extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  boardingStatus = () =>{
    this.props.boardingStatus(1);
  }

  navigateRoot = () =>{
    console.log('boardingRedux = '+JSON.stringify(this.props.boardingRedux));
    Navigation.setRoot(navigation.login())
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
        <Text>BOARDING SCREEN</Text>
        <TouchableOpacity 
          onPress={()=>this.boardingStatus()}
          style={{width: 100, height: 50, borderRadius: 10, backgroundColor: '#4876ba', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>SET BOARDING 1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>this.navigateRoot()}
          style={{width: 100, height: 50, borderRadius: 10, backgroundColor: '#8c3d8c', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>TEST ROOT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({ boardingRedux: state.boarding })

const mapDispatchToProps = dispatch => ({ 
  boardingStatus: (val) => dispatch(boardingStatus(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardingScreen)