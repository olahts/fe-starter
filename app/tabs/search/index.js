import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'
import style from './styles'
import { SearchBar, OptionButton } from '../../ucomponents'


class Search extends Component {

  render() {
    return (
        <View style={styles.container}>
            <SearchBar style={styles.searchbar}/>
            <OptionButton style={styles.optionbutton}/>
        </View>
    )
  }

}

const styles = StyleSheet.create(style);

const stateToProps = (state) => {
    return {
    }
};

const dispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(stateToProps,dispatchToProps)(Search)
