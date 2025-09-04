import React from 'react'
import { View, Text } from 'react-native';
import { Icon, Button, SocialIcon, withBadge } from '@rneui/themed'; 
import { Header } from "../components/Header";
import {colors, parameters} from "../global/styles";

export default function MyAccountScreen({navigation}) {
  return (
    <View>
        <Header title="My Account" navigation={navigation}/>
        <Text style={{color:colors.grey1}}>My Account Sreen</Text>
    </View>
  )
}