import React, {Component} from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet
    
} from 'react-native'
class Profiles extends Component{
    render(){
        return(
            <View style={styles.profileContainer}>
                <Image
                source={
                    __DEV__
                    ? require('../assets/images/robot-dev.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.profileIcon}
                />
                <Text style={styles.profiles} onPress={this.test}>Username</Text>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({

    profileContainer:{  
        padding:10,
        flexDirection:'row',
        borderWidth:1
      },
      profiles:{
        borderStyle: 'solid',
        borderColor: '#ffb900',
        color:'#ffb900',
        fontSize:26
      },
      profileIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
      },
    })
export default Profiles