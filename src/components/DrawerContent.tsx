import React, { useContext } from 'react'
import {View,Text,Linking,Pressable,
    Alert,Switch,StyleSheet,TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, 
    DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Button, Icon } from '@rneui/themed';
import {colors, parameters} from '../global/styles';
import { slide4 } from '../images';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../contexts/authContext';


export default function DrawerContent(props) {
 
const { dispatchSignedIn } = useContext(SignInContext)

async function signOut(){
    try { 
        await auth().signOut().then(() => {
                console.log('Successfully Logged-Out');
            })
    } catch(error){
        Alert.alert (
            error.name,
            error.message
        )
    }
}

  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View>
                <View style={{flexDirection:'row', alignItems:'center',
                        backgroundColor:colors.buttons,paddingVertical:10}}>
                    <Avatar 
                        rounded
                        avatarStyle={styles.avatar}
                        size={70}
                        source = {slide4}
                    />
                    <View>
                        <Text style={{fontWeight:'bold',color:'#000',fontSize:18}}>John Mark</Text>
                        <Text style={{color:'#000',fontSize:14}}>john@expressfood.com</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-evenly'
                            ,backgroundColor:colors.buttons,paddingBottom:5}}>
                    <View style={{flexDirection:'row',marginTop:0}}>
                        <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',color:'#fff',fontSize:12}}>1</Text>
                            <Text style={{fontWeight:'bold',color:'#fff', fontSize:14}}>My Favorite</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',color:'#fff',fontSize:12}}>1</Text>
                                <Text style={{fontWeight:'bold',color:'#fff',fontSize:14}}>My Cart</Text>
                        </View>
                    </View>
                </View>

            </View>

        {/* props DrawerNavigator */}
        <DrawerItemList {...props} />

        {/* other DrawerItem, also in DrawerNavigator  */}
        <DrawerItem 
                  label='Driver Console'
                  icon={({ color, size }) => (
                      <Icon
                          name='directions-bike'
                          color={color}
                          size={size} />
                  )} onPress={()=> {}}/>

        <DrawerItem 
                  label='Payment'
                  icon={({ color, size }) => (
                      <Icon
                          name='payments'
                          color={color}
                          size={size} />
                  )} onPress={()=> {}}/>

        <DrawerItem 
                  label='Promotions'
                  icon={({ color, size }) => (
                      <Icon
                          name='loyalty'
                          color={color}
                          size={size} />
                  )} onPress={()=> {}}/>
        <DrawerItem 
                  label='Settings'
                  icon={({ color, size }) => (
                      <Icon
                          name='settings'
                          color={color}
                          size={size} />
                  )} onPress={()=> {}}/>
        <DrawerItem 
                  label='Help'
                  icon={({ color, size }) => (
                      <Icon
                          name='support'
                          color={color}
                          size={size} />
                  )} onPress={()=> {}}/>

        <View style={{borderTopWidth:1, borderTopColor:colors.grey5}}>
                    <Text style={styles.preferences}>Preferences</Text>
                    <View style={styles.switchText}>
                        <Text style={styles.darkthemeText}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch 
                                trackColor = {{ false: '#767577', true: '#81b0ff' }}
                                thumbColor = { '#f4f3f4' }
                            />
                        </View>
                    </View>
        </View>
        
        </DrawerContentScrollView>
            <DrawerItem 
                    label='Sign-Out'
                    icon={({ color, size }) => (
                        <Icon
                            name='logout'
                            color={color}
                            size={size} />
                    )} onPress={()=> {
                        signOut()
                        dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:false}});
                        }}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    avatar: {
        borderWidth:4,
        borderColor:colors.buttons
    },
    preferences: {
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText: {
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold'
    }
})