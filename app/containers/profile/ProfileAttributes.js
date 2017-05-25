import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class ProfileAttributes extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Profile Attributes
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.profileattributes)

export default ProfileAttributes