import { StyleSheet, Text, StatusBar, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlaceScreen = ({ navigation, route }) => {
    const place = route.params;  
  return (
    <SafeAreaView style={styles.contaier}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)'/> 
      <ImageBackground 
        style={styles.bgImage}
        source={place.image}
       >
        <View style={styles.header}>
            <Icon 
                name='arrow-back-ios' 
                size={25} 
                color="white"
                onPress={navigation.goBack}
            />
            <Icon 
                name='more-vert' 
                size={25} 
                color="white"
                onPress={navigation.goBack}
            />
        </View>
        <View style={styles.imageDetails}>
            <Text style={{
                    width: "70%",
                    fontSize: 30,
                    color: "white"
            }}>{place.name}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='star' size={30} color="orange"/>
                <Text style={{
                    fontSize: 25,
                    color: "white",
                    fontWeight: 'bold'
            }}>{place.rating}</Text>
            </View>
        </View>
        
      </ImageBackground>
      <View style={styles.detailContailer}>
        <View style={styles.iconContainer}>
            <Icon name='favorite'  
                  size={30} 
                  color="red" 
            />
        </View>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Icon name='place' size={28} color="#216b75"/>
            <Text style={{
                fontSize: 22 ,
                fontWeight: 'bold',
                color: "#216b75"
            }}>{place.location}</Text>
        </View>
        <View style={styles.description}>
            <Text style={{
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 10
            }}> About the Trip</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22
            }}>
                {place.details}
            </Text>
            
        </View>
      </View>
      <View style={styles.footer}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white'
            }}> $ 100/day</Text>
            <View style={{
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>BOOK NOW</Text>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default PlaceScreen

const styles = StyleSheet.create({
    contaier:{
        flex: 1,
        backgroundColor: 'white'
    },
    bgImage:{
        flex: 0.7
    },
    header:{
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    imageDetails:{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 40,
        alignItems: 'flex-start'
    },
    detailContailer:{
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    iconContainer:{
       height: 60,
       width: 60,
       backgroundColor: 'white',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       position: 'absolute',
       top: -30,
       borderRadius: 30,
       right: 20,
       elevation: 10
    },
    description:{
        marginTop: 20
    },
    footer:{
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#216b75",
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        bottom: 0,
        width: '100%'
    }
})