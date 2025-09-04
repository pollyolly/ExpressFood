import React,{useEffect, useState} from 'react'
import { StyleSheet, View, Text, ImageBackground, Animated} from 'react-native';
import { colors, parameters } from '../global/styles';
import { foodArray } from '../images/index'
import { Icon } from '@rneui/themed';

export default function RestaurantHeader({id, navigation}) {
    const index2 = 10;
    const currentValue = new Animated.Value(1)

    const [liked,setLiked] = useState(false);
    const [counter, setCounter] = useState(-2);
    const [visible, setVisible] = useState(false);
 
    const likeHander = () => {
        if(liked == false)
            setVisible(true)
        setLiked(!liked)
        setCounter(index2)
    }
    //Heart Animation
    useEffect(()=>{
        if(liked == true){
            Animated.spring(currentValue,{
                toValue: 3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue,{
                    toValue:1,
                    friction:2,
                    useNativeDriver:true,
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[liked])

  return (
    <View>
        <ImageBackground
            style={styles.container}
            source = {foodArray[id].image}
            imageStyle = {styles.image}
        >
            <View style = {styles.view1}>
                <View style = {styles.view2}>
                    <Icon
                        name = 'arrow-back'
                        color = {colors.black}
                        size = {25}
                        onPress = {()=>navigation.goBack()}
                    />
                </View>
                <View style = {styles.view3}>
                    <Icon
                        name = {liked && (index2 == counter) ? 'favorite' : 'favorite-border'}
                        color = 'red'
                        size = {25}
                        onPress ={()=>likeHander}
                    />
                </View>
            </View>
            <View style = {styles.view4}>
                { visible && (index2 == counter) &&
                    <Animated.View style = {{transform:[{scale:currentValue}]}}>
                        <Icon name = 'favorite' 
                        size = {40} 
                        color = 'red' />
                    </Animated.View>
                }
            </View>
        </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height:150,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    view1: {
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'space-between'
    },
    view2: {
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view3: {
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view4: {
        alignItems:'center',
        justifyContent:'center'
    }
})