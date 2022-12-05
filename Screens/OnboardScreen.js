import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const OnboardScreen = () => {
    const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)'/>
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/onboardImage.jpg')}
      >
        <View style={styles.details}>
            <Text style={styles.headerText}>Discover</Text>
            <Text style={styles.headerText}>World With Us</Text>
            <Text style={styles.subTitle}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</Text>
            <TouchableOpacity 
                onPress={() => navigate.navigate("Home")}
                activeOpacity={0.8}
            >
                <View style={styles.button}>
                <Text style={styles.btnText}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
        
       </ImageBackground>
    </View>
  )
}

export default OnboardScreen

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    bgImage:{
        flex: 1
    },
    details:{
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40
    },
    headerText:{
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold'
    },
    subTitle:{
        color: 'white',
        fontSize: 16,
        lineHeight: 25
    },
    btnText:{
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    button:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        borderRadius: 30
    }
})