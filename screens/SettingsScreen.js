import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'EnglishAide',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      < View style={{alignItems:'center'}}>
        <Image
          style={{width:'100%', height: '100%', resizeMode:"center", marginTop:150}}
          source={require('../assets/images/profile-edit.png')}
        />
      </View>

        

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ddf7ff',
  },
});
