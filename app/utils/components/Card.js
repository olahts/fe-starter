import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const Card = (props) => {
  
    return ( 
        <View style={styles.container}>
          <View style={styles.header}>
            <Text> H45455 </Text>
          </View>
          <View style={styles.label}>
            <Text> H45455 </Text>
          </View>
          <View style={styles.passport}>
            <View style={styles.image}>
            </View>
            <Text style={styles.name}> JOHN OBI </Text>
            <Text style={styles.id}> HB4545 </Text>
            <Text style={styles.blood}> A+ . OO </Text>
            <Text style={styles.index}> 70 . 5.7 </Text>
          </View>
          <View style={styles.label}>
            <Text> H45455 </Text>
          </View>
          <View style={styles.footer}>
            <Text> H45455 </Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      marginTop: 70,
      marginHorizontal: 30,
      backgroundColor: '#F5FCCC',
      borderRadius: 10,
    },
    header: {
      justifyContent: "space-around",
      height: 40,
      backgroundColor: 'brown',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    footer: {
      height: 40,
      alignItems: "flex-end",
      backgroundColor: 'brown',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    label: {
      alignSelf: "stretch",
      height: 70,
      alignItems: "center",
      backgroundColor: 'grey',
    },
    passport: {
      marginTop: 30,
      alignSelf:"center",
      alignItems: "center",
    },
    image:{
      backgroundColor: 'red',
      width: 100,
      height: 100,
    },
    name:{
    },
    id:{
    },
    blood:{
    },
    index:{
    },
})

export default Card