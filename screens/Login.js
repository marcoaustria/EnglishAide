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
            <View style={styles.container}>
                <Text style={styles.loginText}>Login</Text>
                <Text>Are you a mentor or a student?</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={isMentor} title="Mentor" style={styles.buttonText} ></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={isStudent} title="Student"></Button>
                </View>
            </View>
        )
    }


}


const styles = StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center',
        marginTop:'40%'
    },
    loginText:{
        fontSize:70,
        textAlign: 'center'
    },
    buttonContainer:{
        width:100,
        marginTop:'10%',
        // paddingTop:'10%'

    }

    
})