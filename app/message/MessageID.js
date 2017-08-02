import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class MessageID extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Message ID
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.messageid)

export default MessageID
