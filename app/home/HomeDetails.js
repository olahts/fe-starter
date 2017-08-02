import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class HomeDetails extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Home Details
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.homedetails)

export default HomeDetails