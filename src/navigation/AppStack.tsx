import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from '../navigation/DrawerNavigator';

const AppStacks = createNativeStackNavigator();

export default function AppStack() {
  return (
  
        <AppStacks.Navigator>
          <AppStacks.Screen 
                    name="DrawerNavigator"
                    component={DrawerNavigator}
                    options = {{
                        headerShown: false
                    }}
                />
          <AppStacks.Screen 
                    name="RestaurantMapScreen"
                    component={RestaurantMapScreen}
                    options = {{
                        headerShown: false
                    }}
                />
        </AppStacks.Navigator>
    
  )
}
