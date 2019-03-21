import React from 'react';
import {View, ActivityIndicator, Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import navigation from '../../navigation/';

export class LoadingScreen extends React.PureComponent{
  
  componentWillReceiveProps(nextProps){
    if(nextProps.boardingRedux.boardingStatus == 1){
      Navigation.setRoot(navigation.login())
    } else{
      Navigation.setRoot(navigation.boarding())
    }
  }

  componentDidMount(){
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    if(Platform.OS == 'android'){
      if(this.props.boardingRedux.boardingStatus == 1){
        Navigation.setRoot(navigation.login())
      } else{
        Navigation.setRoot(navigation.boarding())
      }
    }
  }

  render(){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color={'purple'} size='large'/>
      </View>
    )
  }
}

const mapStateToProps = state => ({ boardingRedux: state.boarding })

const mapDispatchToProps = dispatch => ({ })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingScreen)