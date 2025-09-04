import React from 'react'
import {View,Text,Linking,Pressable,
    Alert,Switch,StyleSheet} from 'react-native';
import { Header } from "../components/Header";
import {colors, parameters} from "../global/styles";

export default function BusinessConsoleScreen({ navigation }) {
  return (
    <View>
        <Header title="Business Console" navigation={navigation}/>
        <Text style={{color:colors.grey1}}>Business Console Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({

})