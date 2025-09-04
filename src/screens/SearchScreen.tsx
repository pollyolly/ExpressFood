import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Modal,Dimensions, FlatList,ImageBackground} from 'react-native';
import { Header } from '../components/Header';
import {colors, parameters} from '../global/styles';
import { Icon } from '@rneui/themed'; // https://fonts.google.com/icons?icon.query=arrow
import {slideArray } from '../images';

import SearchComponent from '../components/SearchComponent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {

  return (
    <View style={{}}>
        <SearchComponent />
        <View>
          <FlatList
            style = {{marginBottom:10}}
            data = {slideArray}
            keyExtractor = {item=>item.id}
            renderItem = {({item})=>(
              <TouchableWithoutFeedback
                onPress={()=>{
                  navigation.navigate("SearchResultScreen",{item:item.name});
                }}
              >
                <View style={styles.image}>
                  <ImageBackground
                    style = {styles.image}
                    source = {item.image}>
                    <View style={styles.textView}>
                      <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal = {false}
            showsVerticalScrollIndicator = {false}
            numColumns={2}
            ListHeaderComponent={
            <Text style ={styles.listHeader}>Top Categories</Text> 
          }
          ListFooterComponent={<Footer />}
          />
        </View>
    </View>
  )
}

const Footer = () => {
  return(
    <View style={{marginTop:10,marginBottom:20}}>
          <FlatList
            style = {{marginBottom:10}}
            data = {slideArray}
            keyExtractor = {item=>item.id}
            renderItem = {({item})=>(
              <TouchableWithoutFeedback>
                <View style={styles.image}>
                  <ImageBackground
                    style = {styles.image}
                    source = {item.image}>
                    <View style={styles.textView}>
                      <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal = {false}
            showsVerticalScrollIndicator = {false}
            numColumns={2}
            ListHeaderComponent={
            <Text style ={styles.listHeader}>More Categories</Text> 
          }
          />
        </View>
  )
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:SCREEN_WIDTH*0.4475,
    height:SCREEN_WIDTH*0.4475,
    marginLeft:SCREEN_WIDTH*0.035,
    marginBottom:SCREEN_WIDTH*0.035
  },
  image: {
    height:SCREEN_WIDTH*0.4475,
    width:SCREEN_WIDTH*0.4475,
    borderRadius:10,
    margin:6
  },
  listHeader: {
    fontSize:16,
    color:colors.grey2,
    paddingBottom:10,
    marginLeft:12
  },
  textView: {
    height:SCREEN_WIDTH*0.4475,
    width:SCREEN_WIDTH*0.4475,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(52,52,52,0.3)'
  }
})