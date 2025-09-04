import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, parameters } from "../global/styles";
import { HeaderProps } from "../types/index";
import { Icon } from '@rneui/themed'; // https://fonts.google.com/icons?icon.query=arrow

export function Header({title, navigation}){
   
    return (
        <View style={styles.header}>
            <View style={{marginLeft: 20,alignItems:'center',justifyContent:'center'}}>
                <Icon 
                    type="material-icons"
                    name="arrow-back"
                    color={colors.headerText}
                    size={25}
                    onPress={()=>{ 
                        if (navigation !== undefined){
                            navigation.goBack()
                        }
                     }}
                />
            </View>
            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.statusbar,
        height:parameters.headerHeight
    },
    headerText: {
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.statusbar,
        color: colors.headerText,
        fontSize: 25,
        fontWeight:"bold",
        marginLeft: 30,
        paddingTop:8
    }
});