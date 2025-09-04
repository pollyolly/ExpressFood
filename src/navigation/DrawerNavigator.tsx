import React from 'react';
import { Icon} from '@rneui/themed';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTab from './RootClientTab';
import {colors } from '../global/styles'
// import MyAccountScreen from '../screens/MyAccountScreen';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent'; /* DrawerContent */

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}   /* DrawerNavigator props passed to DrawerContent */
        >
            <Drawer.Screen
                name = "RootClientTab"
                component={RootClientTab}
                options = {{
                    headerShown: false,
                    title: 'Client',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = 'home'
                            color = {focused ? '#7CC' : colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name = "BusinessConsoleScreen"
                component={BusinessConsoleScreen}
                options = {{
                    headerShown: false,
                    title: 'Business Console',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = 'business'
                            color = {focused ? '#7CC' : colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
} 