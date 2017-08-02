import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class MessageItem extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Message Item
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.messageitem)

export default MessageItem