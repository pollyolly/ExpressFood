import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,
    FlatList,Pressable,Image,Dimensions} from 'react-native';
import HomeHeader from './HomeHeader'
import { parameters, colors } from '../global/styles';
import { Icon } from '@rneui/themed'; // https://fonts.google.com/icons?icon.query=arrow
import { slideArray, foodArray } from '../images';
import FoodCard from '../components/FoodCard';
// import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {

    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState('0'); /* support data type string number in slideArray */

  return (
<View style={styles.container}>    
    <HomeHeader navigation={navigation}/>
    <ScrollView
        stickyHeaderIndices={[-1]} 
        showsVerticalScrollIndicator = {true}
>

        <View style= {{ flexDirection: 'row',  marginTop:10, justifyContent: 'space-evenly' }}>
            <TouchableOpacity
                onPress={()=>{
                    setDelivery(true)
                }}>
                <View style = {{...styles.deliveryButton, backgroundColor: delivery? colors.buttons : colors.grey4}}>
                    <Text style ={styles.deliveryText}>Delivery</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    setDelivery(false)
                    if(navigation !== undefined){
                        navigation.navigate('RestaurantMapScreen');
                    }
                }}>
                <View style = {{...styles.deliveryButton, backgroundColor: delivery? colors.grey4 : colors.buttons}}>
                    <Text style ={styles.deliveryText}>Pick-Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    <View style={styles.filterView}>
        <View style={styles.addressView}>
            <View style={{flexDirection:'row', alignItems:'center',paddingLeft:10}}>
                <Icon 
                    name="location-on"
                    color = {colors.grey1}
                    size = {26}
                />
                <Text style={{marginLeft:5}}>Quiapo Street</Text>
            </View>
            
            <View style={styles.clockView}>
                <Icon 
                    name="schedule"
                    color = {colors.grey1}
                    size = {26}
                />
                <Text style={{marginLeft:5}}>Now</Text>
            </View>
        </View>
        <View >
            <View>
                <Icon 
                    name="tune"
                    color = {colors.grey1}
                    size = {26}
                />
            </View>
        </View>

    </View>
    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Categories</Text>
    </View>
    {/* </ScrollView> */}
    <View>
        {/* We cannot put FlatList inside ScrollView */}
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data = {slideArray}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem = {({item,index})=> (
                <Pressable
                    onPress={()=>{setIndexCheck(item.id)}}
                >
                    <View style={indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                        <Image style={{height:60, width:60,borderRadius:30}}
                        source={item.image}/>
                        <View>
                            <Text style={indexCheck === item.id ? 
                            {...styles.smallCardTextSelected} : {...styles.smallCardText}}>
                                {item.name}
                            </Text>
                        </View>
                    </View>

                </Pressable>
            )}
        />
    </View>
    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Free Delivery Now</Text>
    </View>
    <View>
        <View style = {{flexDirection: 'row',alignItems:'center'}}>
            <Text style={{marginLeft:15,fontSize:16,marginTop:8,marginRight:5,fontWeight:'bold',color:colors.grey2}}>Options Changing in</Text>
            {/* <CountDown
                until={60 * 30}
                size={16}
                style={{marginTop:20}}
                timeToShow={['M','S']}
                timeLabels={{m: 'Min', s: 'Sec'}}
                digiStyle={{backgroundColor:'green'}}
                digitTxtStyle={{color:'#fff'}}
            /> */}
        </View>

        <FlatList 
            style = {{marginTop:10, marginBottom:10}}
            horizontal={true}
            data = {foodArray}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(
                <View>
                    <FoodCard 
                        screenWidth={SCREEN_WIDTH * 0.8} 
                        OnPressFoodCard={undefined}
                        restaurantName={item.restaurantName} 
                        deliveryAvailable={item.deliveryTime} 
                        discountAvailable={item.discount} 
                        discountPercent={undefined} 
                        numberOfReview={item.numberOfReview} 
                        businessAddress={item.businessAddress} 
                        farAway={item.farAway} 
                        averageReview={item.averageReview}
                        images= {item.image}
                    />
                </View>
            )}
            
        />
    </View>
    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Promotions Available</Text>
    </View>
    <View>
        <FlatList 
            style = {{marginTop:10, marginBottom:10}}
            horizontal={true}
            data = {foodArray}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(
                <View>
                    <FoodCard 
                        screenWidth={SCREEN_WIDTH * 0.8} 
                        OnPressFoodCard={undefined}
                        restaurantName={item.restaurantName} 
                        deliveryAvailable={item.deliveryTime} 
                        discountAvailable={item.discount} 
                        discountPercent={undefined} 
                        numberOfReview={item.numberOfReview} 
                        businessAddress={item.businessAddress} 
                        farAway={item.farAway} 
                        averageReview={item.averageReview}
                        images= {item.image}
                    />
                </View>
            )}
            
        />
    </View>
    <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Restauran In Your Area Available</Text>
    </View>
    <View style={{marginBottom:50, width:SCREEN_WIDTH,paddingTop:10}}>
        {
            foodArray.map(item => (
                <View key={item.id} style={{paddingBottom:20}}>
                    <FoodCard 
                        screenWidth={SCREEN_WIDTH * 0.95} 
                        OnPressFoodCard={undefined}
                        restaurantName={item.restaurantName} 
                        deliveryAvailable={item.deliveryTime} 
                        discountAvailable={item.discount} 
                        discountPercent={undefined} 
                        numberOfReview={item.numberOfReview} 
                        businessAddress={item.businessAddress} 
                        farAway={item.farAway} 
                        averageReview={item.averageReview}
                        images= {item.image}
                    />
                </View>
            ))
        }
    </View>
    </ScrollView>
    <View style={styles.floatingButton}>
        <TouchableOpacity
            onPress={()=>{
                if(navigation !== undefined){
                    navigation.navigate('RestaurantMapScreen');
                }
            }}
            >
            <Icon
                name="location-on"
                size = {32}
                color = {colors.buttons}
            />
            <Text style ={{color:colors.grey2}}>Map</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 20, 
        borderRadius: 15,
        paddingVertical: 5
    },
    deliveryText:  {
        marginLeft: 5,
        fontSize: 15
    },
    filterView: {
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between',
        justifyContent:'space-evenly',
        marginHorizontal:10,
        marginVertical:10
    },
    clockView: {
        flexDirection:'row', 
        alignItems:'center',
        paddingLeft:10,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    addressView:{
        flexDirection:'row',
        backgroundColor:colors.grey4,
        borderRadius:15,
        paddingVertical:5,
        marginTop:10,
        justifyContent:'space-between',
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.grey1,
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    headerTextView:{
        backgroundColor: colors.grey5,
        paddingVertical:3
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor:colors.cardbackground,
        // backgroundColor:colors.buttons,
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,   
    },
    smallCardSelected:{
        borderRadius: 30,
        backgroundColor:colors.buttons,
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,   
    },
    smallCardText: {
        fontWeight: 'bold',
        color:colors.grey2
    },
    smallCardTextSelected: {
        fontWeight: 'bold',
        color:colors.cardbackground,
    },
    floatingButton: {
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center',
        marginBottom:50
    }
    
})