import React from 'react'
import {View, Text, StyleSheet } from 'react-native';
import { Icon, Button, SocialIcon, withBadge } from '@rneui/themed'; 
import { parameters, colors } from '../global/styles';

export default function HomeHeader({navigation}) {

    const BadgeIcon = withBadge(0)(Icon); /* BadgeIcon */

  return (
    <View style={styles.header}>
        <View style={{alignItems: 'center', justifyContent:'center', marginLeft:15}}>
                <Icon name="menu"
                    iconStyle={{color:"#ffffff", marginRight:10}}
                    size = {35}
                    onPress={()=>{
                        navigation.toggleDrawer();
                    }}
                />
        </View>
        <View style={{alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:colors.cardbackground, fontSize:25, fontWeight:'bold'}}>ExpressFood</Text>
        </View>
        <View style={{alignItems:"center", justifyContent:"center", marginRight:15}}>
            <BadgeIcon 
                name="shopping-cart"
                size={35}
                color ={colors.cardbackground}
            />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
        justifyContent: "space-between" /* even space */
    }
})