import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { getReminderAsync } from 'expo/build/Calendar';
import Profiles from './Profiles'
import mentorData from '../data/Mentors.json'
import studentData from '../data/Students.json'
import { database } from 'firebase';

export default class ChooseTutor extends React.Component {
    
    constructor (props){
        super(props)
        // e.preventDefault()
        this.state={
            isMentor:props.isMentor,
            user:null
            
        }
        this.state.user = this.state.isMentor ? "Mentor" : "Student";
        this.state.userSearch = this.state.isMentor ? "Student" : "Mentor";
    }

    render(){
        var count = 0;
        goBack = (e)=>{
            e.preventDefault();
            this.props.goBack();
        }

        profileChosen = (e)=>{
            e.preventDefault();
            this.props.profileChosen();
        }
        
         var chooseList = [];
        if(this.state.isMentor){
            for(i = 0; i < mentorData.length; i++){
                chooseList.push(
                    <View>
                        <Profiles userSearch={mentorData[i].fname} userLast={mentorData[i].lname}/>
                    </View>
                )
            };
        }else {
            for(i = 0; i < mentorData.length; i++){
                chooseList.push(
                    <View>
                        <Profiles userSearch={studentData[i].fname} userLast={studentData[i].lname}/>
                    </View>
                )
            };
        }
        return(
            <View style={styles.container}>
                <Button title='back' onPress={goBack}></Button>
                <View style={styles.homeContainer}>
                    <Text style={styles.homeText}>EnglishAide</Text>
                </View>
                <Text>{this.state.user}</Text>
                <Text>Please choose from the list</Text>

                <ScrollView style={styles.display} contentContainerStyle={styles.contentContainer}>
                
                <View>
                    <Profiles count={count++} userSearch={this.state.userSearch}>

                    {chooseList}
                </View>
                </ScrollView>
            </View>

            
        )
    }



}

const styles = StyleSheet.create({
    container:{
        // padding:20,
        height:'100%',
        alignItems:'center',
        marginTop:'10%',
        backgroundColor: '#DDF7FF'
    },
    homeContainer:{
        paddingTop:20 
    },
    homeText:{
        textAlign:'center',
        fontSize:50,
        color: '#48bf91'
    },

    contentContainer: {
        paddingTop: 30,
    },
    display:{
        width:'90%',
        margin:0
    }  

    

    
})
