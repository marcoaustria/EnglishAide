import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
// import{createMaterialBottomTabNavigator} from 'react-native-paper';

import Icon from "react-native-vector-icons/Ionicons";


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

var {height, width} = Dimensions.get('window');

// import {
//   SafeAreaView, View, Text, StyleSheet
// } from 'react-native';

// class Main extends React.Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <App />
//       </SafeAreaView>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#ddd'
//   }
// })




{/* <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
  <View style={{flex: 1}}>
    <Text>Hello World!</Text>
  </View>
</SafeAreaView> */}


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }

      
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
     <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};



const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

// export default createMaterialTopTabNavigator(
//   {
//       HomeStack,
//   LinksStack,
//   SettingsStack,
//   }
//   , {
//     tabBarOptions: {

//       showIcon: true,

//       labelStyle: {
//         fontSize: 12,
//       },
//       tabStyle: {
//         width: 100,
//       },
//       style: {
//         backgroundColor: "#0076be",
//         marginTop: 100,
      
        
//       }
//     }
//   }
  
//   );

export default createBottomTabNavigator(
  {
  HomeStack,
  LinksStack,
  SettingsStack,
},

{tabBarOptions: {
  
  // activeTintColor: "#48bf91" ,

  showIcon: true,

labelStyle: {
  fontSize: 12,
},
tabStyle: {
  width: (1/3)*width,
  
},
style: {
  backgroundColor: "#0076be",

}

}
});

// export default createMaterialBottomTabNavigator({
//   Home: { screen: HomeStack },
//   Messages: { screen: LinksStack },
//   Settings: { screen: SettingsStack },
// }, {
//   initialRouteName: 'Album',
//   activeColor: '#f0edf6',
//   inactiveColor: '#3e2465',
//   barStyle: { backgroundColor: '#694fad' },
// });
