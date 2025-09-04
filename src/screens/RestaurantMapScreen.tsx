import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../global/styles';
import { Header } from '../components/Header';

export default function RestaurantMapScreen({navigation}) {
  return (
    <View>
      <Header title="Restaurant Map" navigation={navigation}/>
        <Text style={{color:colors.grey1}}>Restaurant Map Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({

});