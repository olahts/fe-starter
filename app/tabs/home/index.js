import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Home Page
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style)

export default Home
