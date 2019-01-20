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
export default class ProfilePage extends React.Component {
    

    render(){
             
        
        isFinalized = (e) =>{
            e.preventDefault();
            this.props.setProfileFinal();
        }

        return(
            <View style={styles.container}>
                <Text style={styles.profileName}>John Doe</Text>

                <Image
          style={{width:'100%', height: '100%', resizeMode:"center", marginTop:-100}}
          source={require('../assets/images/guy-icon.png')}
        />

                <Text style={styles.profileBody}>Languages: Spanish, Portuguese</Text>
                <Text style={styles.profileBody}>Specialties: Math, Geography</Text>
                <Text style={styles.profileBody}>Interests: Soccer, Guitar</Text>


                <View style={styles.buttonContainer}>
                    <Button onPress={isFinalized} title="Choose?" style={styles.buttonText} ></Button>
                </View>
                
            </View>
        )
    }


}


const styles = StyleSheet.create({
    buttonText:{
        paddingTop:-50
    },



    container:{
        padding:20,
        alignItems:'center',
        marginTop:'20%'
    },
    profileName:{
        fontSize:50,
        textAlign: 'center',
        color:'#0076be'
    },

    profileBody:{
        textAlign: 'center',
    marginTop:-30,
    fontSize: 20
    },
    buttonContainer:{
        width:100,
        marginTop:'5%',
        // paddingTop:'10%'

    }

    
})