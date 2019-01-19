import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { IoIosHome } from 'react-icons/fa';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


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

export default createMaterialTopTabNavigator(
  {
      HomeStack,
  LinksStack,
  SettingsStack,
  }
  , {
    tabBarOptions: {

      showIcon: true,

      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: "#0076be",
        marginTop: 100,
      
        // safeArea: {
        //   flex: 1,
        //   backgroundColor: '#ddd'
        // }
      }
    }
  }
  
  );


// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });
