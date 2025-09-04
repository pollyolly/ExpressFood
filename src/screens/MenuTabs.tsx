import React from 'react'
import { StyleSheet,View,Text,FlatList,TouchableOpacity } from 'react-native';
import MenuCard from '../components/MenuCard';
import { menuDetailedData } from '../images';

export function Route1({navigation}){
  return (
    <View style = {{flex:1}}>
        <View style = {styles.view2}>
            <FlatList
                style = {{backgroundColor:'white'}}
                data = {menuDetailedData}
                keyExtractor={(item, index)=>index.toString()}
                renderItem = {({item, index}) => (
                    <TouchableOpacity onPress = {() =>{
                        navigation.navigate('PreferenceScreen');
                    }}>
                        <MenuCard
                            productName={item.meal} 
                            price={item.price} 
                            image={item.image} 
                            productDetails={item.details}                        />
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    </View>
  )
}

export const Route2 = ()=> (<View style = {styles.scene}></View>)
export const Route3 = ()=> (<View style = {styles.scene}></View>)
export const Route4 = ()=> (<View style = {styles.scene}></View>)
export const Route5 = ()=> (<View style = {styles.scene}></View>)
export const Route6 = ()=> (<View style = {styles.scene}></View>)
export const Route7= ()=> (<View style = {styles.scene}></View>)
export const Route8 = ()=> (<View style = {styles.scene}></View>)

const styles = StyleSheet.create({
    scene: {
        flex:1,
        backgroundColor: '#673ab7'
    },
    view2: {
        marginTop:5,
        paddingBottom:20
    },
    scene2: {
        backgroundColor:'#673ab7'
    }
})