import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import { Passport, FieldTypeTwo, FieldTypeOne, SimpleBar, Logo, OptionBar } from '../'


class Card extends Component {

  render() {
        return (
            <View style={styles.container}>
                <Passport style={styles.passport}/>
                <OptionBar style={styles.optionbar} navigateTo={ this.props.navigateTo } origin={this.props.screenProps.origin}/>
                <FieldTypeOne style={styles.fieldone}/>
                <FieldTypeTwo style={styles.fieldtwo}/>
                <FieldTypeTwo style={styles.fieldthree}/>
                <SimpleBar style={styles.simplebar}/>
                <Logo style={styles.logo}/>
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
      navigateTo: (params) => dispatch(actions.navigateTo(params)),
  }
};

export default connect(stateToProps,dispatchToProps)(Card)