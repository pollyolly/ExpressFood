import React,{useState, useRef} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Modal,TextInput,FlatList} from 'react-native';
import { Header } from '../components/Header';
import {colors, parameters} from '../global/styles';
import { Icon } from '@rneui/themed'; // https://fonts.google.com/icons?icon.query=arrow
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { slideArray } from '../images/index';
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash/filter';

export default function SearchComponent() {

    const navigation = useNavigation();

    const [data, setData] = useState([...slideArray]);
    // console.log(data);
    const [modalVisible, setmodalVisible] = useState(false);
    const [textInputFocused,settextInputFocused] = useState(true);
    const textInput = useRef(0);

const contains = ({name}, query) => {
    if(name.includes(query)){
        return true
    }
    return false
}

const handleSearch = text => {
    const datas = filter(slideArray, userSearch => {
        return contains(userSearch, text)
    })
    setData([...datas])
}


  return (
    <View style={{alignItems:'center'}}>
    <TouchableWithoutFeedback
      onPress={()=>{
        setmodalVisible(true)
      }}>
      <View style={styles.SearchArea}>
        <Icon 
          name="search"
          style={styles.searchIcon}
          iconStyle = {{marginLeft:5}}
          size={32}
        />
        <Text style={{color:colors.grey1,fontSize:15}}>What are you looking for ?</Text>
      </View>
    </TouchableWithoutFeedback>
    <Modal
        animationType='fade'
        transparent = {false}
        visible = {modalVisible}>
        <View style={styles.modal}>
            {/* <TouchableWithoutFeedback onPress={()=>{
                setmodalVisible(false)
            }}> */}
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View>
                                <Icon 
                                    name = {textInputFocused ? 'arrow-back' : 'search'}
                                    onPress={()=>{
                                        if(textInputFocused)
                                        setmodalVisible(false)
                                        settextInputFocused(false)
                                    }}
                                    style={styles.icon2}
                                    iconStyle={{marginRight:5}}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:'90%'}}
                                placeholder=""
                                autofocus = {false}
                                ref = {textInput}
                                onFocus = {()=>{
                                    settextInputFocused(true)
                                }}
                                onBlur={()=>{
                                    settextInputFocused(false)
                                }}
                            />
                            <Animatable.View
                                animation = {textInputFocused? 'fadeInLeft' : ''}
                                duration = {400}
                            >
                            <Icon 
                                    name = {textInputFocused ? 'cancel' : null}
                                    onPress={()=>{
                                        textInput.current.clear();
                                    }}
                                    style={styles.icon2}
                                    iconStyle={{color:colors.grey3}}
                                />
                            </Animatable.View>
                        </View>
                    </View>

                    <FlatList
                        data = {data}
                        renderItem={({item})=>(
                            <TouchableOpacity
                                onPress={()=>{
                                    Keyboard.dismiss
                                    navigation.navigate('SearchResultScreen',{item:item.name})
                                    setmodalVisible(false)
                                    settextInputFocused(true)
                                }}>
                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey2, fontSize:15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />

                </View>
            {/* </TouchableWithoutFeedback> */}
        </View>
    </Modal>
</View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    text1: {
      color:colors.grey3
    },
    TextInput: {
      borderWidth:1,
      borderRadius:12,
      marginHorizontal:0,
      borderColor:'#86939e',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignContent:'center',
      alignItems:'center',
      paddingLeft:10,
      paddingRight:10
    },
    SearchArea: {
        width:'100%',
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon: {
      fontSize:24,
      padding:5,
      color:colors.grey2
    },
    view1: {
        height:70,
        justifyContent:'center',
        paddingHorizontal:10
    },
    view2: {
      flexDirection: 'row',
      padding:15,
      alignItems:'center'
    },
    icon2: {
      fontSize:24,
      padding:5,
      color:colors.grey2
    },
    modal: {
        flex: 1
      },
  })