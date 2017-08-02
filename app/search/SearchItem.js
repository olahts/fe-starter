import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class SearchItem extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Search Item
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.searchitem)

export default SearchItem