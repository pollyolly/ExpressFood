import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreen/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreen/SignInScreen';
// import HomeScreen from '../screens/HomeScreen';
// import RootClientTab from './RootClientTab';
// import RestaurantMapScreen from '../screens/RestaurantMapScreen';
// import DrawerNavigator from '../navigation/DrawerNavigator';
import SignUpScreen from '../screens/authScreen/SignUpScreen';



export default function AuthStack(){
    
    const Stack = createNativeStackNavigator();

    return(
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignInWelcomeScreen"
                    component={SignInWelcomeScreen}
                    options = {{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="SignInScreen"
                    component={SignInScreen}
                    options = {{
                        headerShown: false
                    }}
                />
                
                 <Stack.Screen 
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options = {{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}