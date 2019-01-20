import React from 'react';
import ReactNative from "react-native";
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Login from './screens/Login';
import ChooseTutor from './screens/ChooseTutor';
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      isLoadingComplete: false,
      hasChosen: false,
      isMentor:false
    }
    this.hasChosenChange = this.hasChosenChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  
  hasChosenChange = (isMentor)=>{
    this.setState({
      hasChosen:true,
      isMentor:isMentor
    });
  }
  goBack = ()=>{
    this.setState({
      hasChosen:false
    })
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      if(!this.state.hasChosen){
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Login hasChosenChange={this.hasChosenChange } />
          </View>
        );
      }else{
        return(
          <ChooseTutor isMentor={this.state.isMentor} goBack={this.goBack}/>
        )
      }
    }
  }




  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


