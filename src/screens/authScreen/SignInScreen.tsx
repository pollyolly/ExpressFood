import React, {useState, useRef, useContext} from "react";
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity, Alert} from 'react-native';
import { colors, parameters} from "../../global/styles";
import { Icon, Button } from '@rneui/themed';   // https://fonts.google.com/icons?icon.query=arrow
                                                // New React Native Element
import { Header } from "../../components/Header";
// import { SignInScreenProps } from "../../types";
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../../contexts/authContext';


export default function SignInScreen({ navigation }){

    const { dispatchSignedIn } = useContext(SignInContext)
    
    const [textInput2Focused, setTextInput2Focused] = useState(false);
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);


    async function signIn(data){
        try {
            const { email, password } = data;  
            if(email != '' && password != ''){
                //Firebase Authentication   
                const user =  await auth().signInWithEmailAndPassword(email, password) 
                if(user) { 
                    dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:true}}); //Signed in
                    Alert.alert(
                        'Login',
                        'Successfully Login!'
                    )
                    navigation.navigate('DrawerNavigator');
                }
            }
        }
        catch(error)  {
            Alert.alert (
                error.name,
                error.message
            )
        }  
    }

    return(
        <View style = {styles.container}>

                <StatusBar 
                    barStyle = 'light-content'
                    backgroundColor={colors.statusbar}/> 
                <Header title="MY ACCOUNT" navigation={navigation}/>

                <View style={{ marginLeft:20, marginTop: 10 }}>
                    <Text style ={styles.title}>Sign-In</Text>
                </View>
                <View style = {{alignItems:"center", marginVertical: 10}}>
                    <Text style={styles.text1}> Please eneter the email and pass</Text>
                    <Text style={styles.text1}> registered with your account</Text>
                </View>
                
            <Formik
                initialValues = {{email:'',password:''}}
                onSubmit={(value) => {
                    signIn(value)
                }}
                >
                { (props) =>
                <View>
                    <View style={{...styles.TextInput2, marginVertical: 10}}>
                        <Animatable.View>
                            <Icon name="email"
                                    iconStyle={{color:colors.grey3, marginLeft: 10}}
                                />
                        </Animatable.View>
                        <TextInput 
                            style={{width:"90%",color:colors.grey2}}
                            placeholder="Email"
                            placeholderTextColor='#86939e'
                            onChangeText = {props.handleChange('email')}
                            value = {props.values.email}
                        />
                    </View>
                    <View style={styles.TextInput2}>
                        <Animatable.View>
                            <Icon name="lock"
                                iconStyle={{color:colors.grey3, marginLeft: 10}}
                            />
                        </Animatable.View>
                        <TextInput    
                            style={{width:"80%",color:colors.grey2}}
                            placeholder="Password"
                            placeholderTextColor='#86939e'
                            onChangeText={props.handleChange('password')}
                            value = {props.values.password}
                            
                        />
                        <Animatable.View>
                            <Icon name="visibility-off"
                                iconStyle={{color:colors.grey3, marginRight:10}}
                            />
                        </Animatable.View>
                    </View>
                    <View style={{marginHorizontal: 20, marginVertical: 20}}>
                        <Button 
                            title="SIGN-IN"
                            buttonStyle= {styles.styledButton}
                            titleStyle= {styles.buttonTitle}
                            onPress = {props.handleSubmit}
                                
                                // if (navigation !== undefined){
                                //     navigation.navigate('DrawerNavigator')
                                // }
                        />
                    </View>
                </View>
                }
            </Formik>


                <View style={{alignItems:"center", marginTop: 10}}>
                    <Text style={{...styles.text1,textDecorationLine:"underline"}}>Forgot Password?</Text>
                </View>
                <View  style={{alignItems:"center",marginTop:10,marginBottom:20}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>or</Text>
                </View>
              
                <View style={{marginHorizontal: 20, marginVertical: 10}}>
                        <Button 
                            // style={styles.SocialIcon}
                            buttonStyle= {styles.styledButton2}
                            titleStyle= {styles.buttonTitle}
                            onPress={()=>{}}
                        >
                            <Icon name="facebook" color="white" style={{marginHorizontal: 10}}/>
                            Sign in with Facebook
                        </Button>
                </View>
                <View style={{marginHorizontal: 20, marginVertical: 10}}>
                
                    <Button 
                        title="Sign in with Google"
                        buttonStyle= {styles.styledButton3}
                        titleStyle= {styles.buttonTitle}
                        onPress={()=>{}}
                    >
                        <Icon name="login" color="white" style={{marginHorizontal: 10}}/>
                        Sign in with Google
                    </Button>
                </View>
                <View style={{marginTop:10, marginLeft:20}}>
                    <Text style={{...styles.text1,textDecorationLine:"underline"}}>New on ExpressFood?</Text>
                </View>
                <View style={{alignItems:"flex-end",marginHorizontal:20}}>
                    <Button
                        title = "Create an Account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                        onPress = {()=>{
                            if(navigation !== undefined){
                                navigation.navigate('SignUpScreen');
                            }
                        }}
                    />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color:"#ff8c52",
        fontSize :20,
        fontWeight:"bold"
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    TextInput1: {
        borderWidth: 1, 
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius:12,
        marginBottom: 20
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent: "center",
        alignItems: "center"
    },
    styledButton: {
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
    styledButton2:{
        backgroundColor:"#316FF6",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#316FF6",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },
    styledButton3:{
        backgroundColor:"#d93025",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#d93025",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },
    styledButton4: {
        fontSize:12,
        color:"#ff8c52",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        padding: 10
    },
    buttonTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: -3
    },
    SocialIcon: {
        borderRadius: 12,
        height:50
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
      },

      createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }
    
});