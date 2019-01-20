import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { getReminderAsync } from 'expo/build/Calendar';
import Profiles from './Profiles'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>EnglishAide</Text>
        </View>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
       
        <View>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>

        </View>
          {/* <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
            <Text style={styles.getStartedText}>Get started by opening</Text>
            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>
            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>

      </View>
    );
  }


  test = () => {
    // WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
    console.log("test")
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({

  homeContainer:{
    paddingTop:20
  },
  homeText:{
    textAlign:'center',
    fontSize:20
  },

  contentContainer: {
    paddingTop: 30,
  },  
  
});