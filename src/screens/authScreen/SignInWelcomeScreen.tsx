import React, {useState, useRef, useEffect, useContext} from "react";
import { View, Text, TextInput, StyleSheet, StatusBar, Image } from 'react-native';
import { Icon, Button, SocialIcon } from '@rneui/themed';   // https://fonts.google.com/icons?icon.query=arrow
                                                            // New React Native Element
import Swiper from 'react-native-swiper';
import {slide1, slide2, slide3} from '../../images';
import { useNavigation } from '@react-navigation/native';
import {colors, parameters} from '../../global/styles'
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../../contexts/authContext';

export default function SignInWelcomeScreen({navigation}){

    const { dispatchSignedIn } = useContext(SignInContext)
    
//Check if currently logged in
useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
        if(user){
            dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:true}});
        } else {
            dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:false}});
        }
    })
},[])

    return(
        <View style={{flex: 1, flexDirection:'column'}}>
            <View style={{flex: 3, justifyContent: 'flex-start', alignItems:'center', paddingTop:20}}>
                <Text style={{fontSize:26, fontWeight:'bold',color:colors.buttons}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26, fontWeight:'bold',color:colors.buttons}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex: 4, justifyContent: 'center'}}>
                <Swiper>
                    <View style={styles.slide1}>
                        <Image 
                            source={slide1}
                            style= {{height: "100%", width: "100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image 
                            source={slide2}
                            style= {{height: "100%", width: "100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            source={slide3}
                            style= {{height: "100%", width: "100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex: 4, marginTop: 60}}>
                <View style={{marginHorizontal: 20, marginVertical: 10, marginTop: 60}}>
                    <Button 
                        title="SIGN-IN"
                        buttonStyle= {styles.styledButton1}
                        titleStyle= {styles.buttonTitle}
                        onPress={()=>{
                            if (navigation !== undefined){
                                navigation.navigate('SignInScreen');
                            }
                        }}
                    />
                </View>
                <View style={{marginHorizontal: 20, marginVertical: 10}}>
                    <Button 
                        title="Create and account"
                        buttonStyle= {styles.styledButton2}
                        titleStyle= {{...styles.buttonTitle, color: '#ff8c52'}}
                        onPress = {()=>{
                            if(navigation !== undefined){
                                navigation.navigate('SignUpScreen');
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92bbd9'
    },
    styledButton1: {
        backgroundColor:"#ff8c52",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },
    styledButton2: {
        backgroundColor:"#ffffff",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },
    buttonTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: -3
    },
})