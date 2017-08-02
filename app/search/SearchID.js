import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class SearchID extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Search ID
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.searchid)

export default SearchID