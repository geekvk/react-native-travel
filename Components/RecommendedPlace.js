import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get("screen");

const RecommendedPlace = ({ place }) => {
  return (
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
        </View>
    </ImageBackground>
    
  )
}

export default RecommendedPlace

const styles = StyleSheet.create({
    bgImage:{
        width: width - 40,
        height: 200,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 20,
        overflow: 'hidden',
        borderRadius: 5,
        marginBottom: 30
    },
    text:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'

    }
})