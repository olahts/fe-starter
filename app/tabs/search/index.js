import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'
export { default as searchreducers } from './reducers'


class Search extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Search Page
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style)

export default Search
