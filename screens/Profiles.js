import React, {Component} from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet
    
} from 'react-native'
var count =0;

class Profiles extends Component{

    constructor(props){
        super(props)
        this.state={
            count:props.count,
            userSearch:props.userSearch
        }
        console.log(this.state.userSearch)
        // this.test = this.test.bind(this)
    }
    render(){
        test = () => {
            console.log("test")
        }
        
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
                <Text style={styles.profiles} onPress={this.test}>{this.state.userSearch} {this.state.count}</Text>
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