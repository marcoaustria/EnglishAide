import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { getReminderAsync } from 'expo/build/Calendar';
import ChooseTutor from './ChooseTutor';
import { State } from 'react-native-gesture-handler';
import App from '../App';
export default class Login extends React.Component {

    render(){
        isMentor = (e) => {
            e.preventDefault();
            this.props.hasChosenChange(true);
        }
        isStudent = (e) => {
            e.preventDefault();
            this.props.hasChosenChange(false);
        }        
        
        return(

            // <Image
            // source={
                // _DEV_
                // ? require('../assets/images/robot-dev.png')
                // : require('../assets/images/robot-prod.png')
            // }
            // style={styles.profileIcon}  
            // />
            <View>
            <View style={styles.logoImage}>
                <Image
                    style={{width:300, height:75}}
                    source={require('../assets/images/logoname.png')}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.loginText}>Login</Text>
                <Text style = {styles.loginBody}>Are you a mentor or a student?</Text>
                <View style={styles.mentorButtonContainer}>
                    <Button onPress={isMentor} title="Mentor"></Button>
                </View>
                <View style={styles.studentButtonContainer}>
                    <Button onPress={isStudent} title="Student" ></Button>
                </View>
            </View>
            </View>
        )
    }


}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    loginText:{
        marginTop:30,
        fontSize:70,
        textAlign: 'center',
        color: '#0076be'
    },
    loginBody:{
        marginTop:80,
        fontSize: 25
    },

    mentorButtonContainer:{
        width:100,
        marginTop:10,
        // paddingTop:'10%'

    },

    studentButtonContainer:{
        width:100,
        marginTop:'10%',
        // paddingTop:'10%'

    },
    

    logoImage: {
        paddingTop:75,
        alignItems:'center',
        width:'100%'
    }
    
})