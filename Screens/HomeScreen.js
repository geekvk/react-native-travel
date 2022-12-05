import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Category from '../Components/Category';
import Place from '../Components/Place';
import places from '../db/places';
import RecommendedPlace from '../Components/RecommendedPlace';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor="#216b75"/>
      <View style={styles.header}>
          <Icon name='sort' size={28} color="white"/>
          <Icon name='notifications-none' size={28} color="white"/>
      </View>
      <ScrollView
          showsVerticalScrollIndicator={false}
      >
      <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>Explore the</Text>
            <Text style={styles.headerText}>beautyfull places</Text>
            <View style={styles.inputContainer}>
                <Icon name='search' size={28}/> 
                <TextInput placeholder='search places' style={{color: 'gray', fontSize: 18}}/> 
            </View>
          </View>
          
      </View>
        <View style={styles.categoryContainer}>
              <Category name="airplanemode-active"/>
              <Category name="beach-access"/>
              <Category name="near-me"/>
              <Category name="place"/>
        </View>
        <View style={styles.places}>
          <Text style={styles.text}>Places</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <Place place={item}/>}  
            />
          </View>
        </View>
        <View style={styles.places}>
          <Text style={styles.text}>Recommended</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <RecommendedPlace place={item}/>}  
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    header:{
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#216b75",
      paddingHorizontal: 20
    },
    headerContent:{
      backgroundColor: '#216b75',
      height: 120,
      paddingHorizontal: 20
    },
    headerText:{
      color: "white",
      fontSize: 25,
      fontWeight: 'bold'
    },
    inputContainer:{
      height: 60,
      width: "100%",
      backgroundColor: "white",
      borderRadius: 10,
      position: "absolute",
      top: 90,
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems:'center',
      elevation: 12,
    },
    categoryContainer:{
      marginTop: 50,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    places:{
      display: "flex",
      marginTop: 20,
      paddingHorizontal: 20,
      width: '100%' 
    },
    text:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    }
})