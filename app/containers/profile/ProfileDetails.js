import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class ProfileDetails extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Profile Details
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.profiledetails)

export default ProfileDetails