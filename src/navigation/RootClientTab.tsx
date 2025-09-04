import React from 'react'
import { Icon} from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { colors, parameters } from '../global/styles';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import ClientStack from '../navigation/ClientStack';

const ClientTab = createBottomTabNavigator();

export default function RootClientTab() {
  return (
    <ClientTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.buttons
            }}
        >
        <ClientTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({color,size}) => (
                    <Icon 
                        name = 'home'
                        color = {color}
                        size = {size}
                    />
                )
            }}
        />
        <ClientTab.Screen
            name="MyOrderScreen"
            component={MyOrderScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'My Order',
                tabBarIcon: ({color,size}) => (
                    <Icon 
                        name = 'view-list'
                        color = {color}
                        size = {size}
                    />
                )
            }}
        />
        <ClientTab.Screen
            name="ClientStack"
            component={ClientStack}
            options={{
                headerShown: false,
                tabBarLabel: 'Search',
                tabBarIcon: ({color,size}) => (
                    <Icon 
                        name = 'search'
                        color = {color}
                        size = {size}
                    />
                )
            }}
        />
        <ClientTab.Screen
            name="MyAccountScreen"
            component={MyAccountScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'My Accoount',
                tabBarIcon: ({color,size}) => (
                    <Icon 
                        name = 'person'
                        color = {color}
                        size = {size}
                    />
                )
            }}
        />
    </ClientTab.Navigator>
  )
}