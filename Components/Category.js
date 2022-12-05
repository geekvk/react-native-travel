import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Category = ({ name }) => {
  return (
        <TouchableOpacity style={styles.container}>
            <Icon name= {name} size={28} color="#065a69"/>
        </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: 60,
        padding: 10,
        backgroundColor: '#ddedf0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})