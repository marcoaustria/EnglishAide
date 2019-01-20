import React, { Component }  from 'react';
import { ExpoLinksView } from '@expo/samples';


import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { getReminderAsync } from 'expo/build/Calendar';
import Profiles from './Profiles'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'EnglishAide',
  };

  render() {
    return (

      <ScrollView style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Image
          style={{width:300, height: 250, resizeMode:"center", marginTop:-10}}
          source={require('../assets/images/english-aide-icon.png')}
        />
      </View>

      
     
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
       
       <Text style={styles.topicText}>
          Topic of the Day
          </Text>
      <Text style={styles.topicBody}>What is your favorite movie and why?</Text>
      
      <Text style={styles.teacherText}>
           Teacher Suggestions
          </Text>
      <Text style={styles.teacherBody}>Miss Frizzle says: {"\n"}{"\n"}"Susie can focus on her listening this week, maybe send her some voice notes and have her try to write them down!"</Text>



      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  // imageStyle: {
  //   width: '150%',
  //   height: '50%',
  //   resizeMode: 'center'

  // },


  topicText:{
    textAlign: 'left',
    fontSize: 40,
    paddingTop:20,
    marginTop: -20,
    paddingLeft: 30,
    fontWeight: 'bold',
    color: '#0076be'
  }
,
  topicBody:{
    textAlign: 'left',
    paddingTop:10,
    paddingLeft: 30,
    fontSize: 20
  }
,

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ddf7ff'
  },


  teacherText: {
    textAlign: 'left',
    fontSize: 40,
    paddingTop:30,
    paddingLeft: 30,
    fontWeight: 'bold',
    color: '#48bf91'
  },

  teacherBody: {
    textAlign: 'left',
    paddingTop: 10,
    fontSize: 20,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom:60
  }




});


// const styles = StyleSheet.create({

//   homeContainer:{
//     paddingTop: Platform.OS === 'ios'
//     ? 43 : 20

  
//   },
//   homeText:{
//     textAlign:'center',
//     fontSize:20,
//     fontWeight: 'bold',
//     fontFamily: 'Times New Roman' 

//   },

//   contentContainer: {
//     marginTop: Platform.OS === 'ios'
//     ? -20 : 0,
  
//     paddingTop: 30,
//   },  















  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center',
  // },

  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
 
  // getStartedContainer: {
  //   alignItems: 'center',
  //   marginHorizontal: 50,
  // },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // getStartedText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },

  // contentContainer: {
  //   paddingTop: 30,
  // },  
  
// });
