import React from 'react';
import { ExpoLinksView } from '@expo/samples';


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
import { BorderlessButton } from 'react-native-gesture-handler';

// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
   
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <View style={styles.homeContainer}>
//           <Text style={styles.homeText}>EnglishAide</Text>
//         </View> */}
//         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
       
//         {/* <View>
//           <Profiles/>
//           <Profiles/>
//           <Profiles/>
//           <Profiles/>

//         </View> */}
//           {/* {/* <View style={styles.welcomeContainer}>
//             <Image
//               source={
//                 __DEV__
//                   ? require('../assets/images/robot-dev.png')
//                   : require('../assets/images/robot-prod.png')
//               }
//               style={styles.welcomeImage}
//             />
//           </View>

//           <View style={styles.getStartedContainer}>
//             {this._maybeRenderDevelopmentModeWarning()}

//             <Text style={styles.getStartedText}>Get started by opening</Text> */}

//             <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//               <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
//             </View>

//             {/* <Text style={styles.getStartedText}>
//               Change this text and your app will automatically reload.
//             </Text>
//           </View>

//           // <View style={styles.helpContainer}>
//           //   <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
//           //     <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
//           //   </TouchableOpacity>
//           // </View> */} 
//         </ScrollView>

//       </View>
//     );
//   }


//   test = () => {
//     // WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//     console.log("test")
//   };

//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
// }

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'EnglishAide',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    
  },
  
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
//});
