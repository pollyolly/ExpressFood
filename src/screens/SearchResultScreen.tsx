import React from 'react'
import {StyleSheet, View, Text, Dimensions,FlatList} from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { foodArray } from '../images';
import { colors,parameters } from '../global/styles'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchResultScreen({navigation}) {
  return (
    <View style={styles.container}>
        {/* <View>
          <Text style={styles.listHeader}>{foodArray.length} Result for {route.params.item}</Text>
        </View> */}
        <FlatList 
            style = {{backgroundColor:colors.cardbackground}}
            data = {foodArray}
            keyExtractor = {(item,index)=>index.toString()}
            renderItem = {({item, index}) => (
              <SearchResultCard 
                screenWidth = {SCREEN_WIDTH}
                images = {item.image}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                OnPressRestaurantCard={()=>{
                  navigation.navigate('RestaurantHomeScreen',{id:index, restaurant:item.restaurantName })
                }}
              />
            )}
            ListHeaderComponent={
              <View>
                <Text style ={styles.listHeader}>{foodArray.length} Results Test</Text>
              </View>
            }
            showsVerticalScrollIndicator = {false}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    listHeader: {
      color:colors.grey1,
      fontSize:20,
      paddingHorizontal:10,
      paddingVertical:15,
      fontWeight:'bold'
    }
})