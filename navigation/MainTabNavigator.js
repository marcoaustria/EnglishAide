import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

var {height, width} = Dimensions.get('window');

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// Home Icon
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

// Message Icon
const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
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
      name={Platform.OS === 'ios' ? 'ios-profile' : 'md-profile'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},
{
  tabBarOptions: {
  
    activeTintColor: "#ffff" ,
    inactiveTintColor: "#0076be",

 
 
    showIcon: true,
  
  labelStyle: {
    fontSize: 12,
    
  },
  tabStyle: {
    width: (1/3)*width,
    
    
  },
  style: {
    backgroundColor: "#4db4d7",
  
  }
  
  }

});
