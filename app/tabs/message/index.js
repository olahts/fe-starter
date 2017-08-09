import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'
export { default as messagereducers } from './reducers'


class Message extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Message Page
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style)

export default Message
