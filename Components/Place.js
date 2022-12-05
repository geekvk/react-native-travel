import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get("screen");

const Place = ({ place }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress = {() => navigation.navigate("Place", place)}
    >
        <ImageBackground
            style={styles.bgImage}
            source={place.image}
        >
            <Text style={styles.text}>{place.name}</Text>
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginBottom: 10
            }}>
                <View style={{
                    flexDirection:'row'
                }}>
                    <Icon name='place' size={20} color="white"/>
                    <Text style={styles.text}>{place.location}</Text>
                </View>
                <View style={{
                    flexDirection:'row'
                }}>
                    <Icon name='star' size={20} color="white"/>
                    <Text style={styles.text}>{place.rating}</Text>
                </View>
            </View>
        </ImageBackground>
    </TouchableOpacity>
    
  )
}

export default Place

const styles = StyleSheet.create({
    bgImage:{
        width: width/2,
        height: 220,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 20,
        overflow: 'hidden',
        borderRadius: 5
    },
    text:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'

    }
})