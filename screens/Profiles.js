import React, {Component} from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    Button
    
} from 'react-native'
var count =0;

class Profiles extends Component{

    constructor(props){
        super(props)
        this.state={
            count:props.count,
            userSearch:props.userSearch
            userLast:props.userLast
            
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
                <Text style={styles.profiles} onPress={this.test}>{this.state.userSearch} {this.state.userLast}</Text>

                <Button style={styles.button} title='>' onPress={profileChosen}></Button>

            </View>
        )
    }
    
}


const styles = StyleSheet.create({

   

    profileContainer:{  
        paddingTop:20,
        paddingBottom: 20,
        flexDirection:'row',
        marginTop: 5,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: '#CFCFCF'
      },
      profiles:{ 
        width:200,
        fontSize:25,
        paddingLeft:30,
        paddingTop: 40

      },
      profileIcon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },
    })
export default Profiles
