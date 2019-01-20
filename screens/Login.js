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
            <View style={styles.logoImage}>
            <Image
            style={{width:'100%', height: '100%', resizeMode:"center"}}
            source={require('../assets/images/guy-icon.png')}
            />
            </View>,

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
        )
    }


}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:'50%'
    },
    loginText:{
        marginTop:0,
        fontSize:70,
        textAlign: 'center',
        color: '#0076be'
    },
    loginBody:{
        marginTop:150,
        fontSize: 25
    },

    mentorButtonContainer:{
        width:100,
        marginTop:'10%',
        // paddingTop:'10%'

    },

    studentButtonContainer:{
        width:100,
        marginTop:'10%',
        // paddingTop:'10%'

    },
    

    logoImage: {
        paddingTop:10
    }
    
})