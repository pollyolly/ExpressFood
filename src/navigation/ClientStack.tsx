import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductScreen from '../screens/MenuProductScreen';

const ClientSearch = createNativeStackNavigator();

export default function ClientStack({navigation, route}) {

useLayoutEffect(()=>{ //Changing layout design
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "RestaurantHomeScreen" || routeName == "MenuProductScreen"){
        console.log('false visible');
        navigation.setOptions({ tabBarVisible:false, 
            tabBarStyle: {display: 'none'} }); //Hide TabBar on RestaurantHomeScreen
    } else {
        console.log('true visible');
        navigation.setOptions({ tabBarVisible:true });
    }
},[navigation,route])

  return (
    <ClientSearch.Navigator>
        <ClientSearch.Screen
            name = "SearchScreen"
            component = {SearchScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        
        <ClientSearch.Screen
            name = "SearchResultScreen"
            component = {SearchResultScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        <ClientSearch.Screen
            name = "RestaurantHomeScreen"
            component = {RestaurantHomeScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        <ClientSearch.Screen
            name = "MenuProductScreen"
            component = {MenuProductScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        
    </ClientSearch.Navigator>
  )
}