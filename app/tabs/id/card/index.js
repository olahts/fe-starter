import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import { Passport, FieldTypeTwo, FieldTypeOne, SimpleBar, Logo, OptionBar } from '../../../ucomponents/index'
import navconstants from '../constants'

class Card extends Component {


  render() {
      const historiesactions = this.props.historiesactions

      return (
            <View style={styles.container}>
                <Passport style={styles.passport}/>
                <OptionBar style={styles.optionbar}
                           navigateTo={ this.props.navigateTo }
                           navconstants={navconstants}
                           histories={ { historiesactions, ...this.props.histories } }
                />
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

const stateToProps = ({ auth, tabs }) => {
  return {
      user: auth.login.user,
      histories: tabs.id.card.histories
  }
};

const dispatchToProps = (dispatch) => {
  return {
      navigateTo: (params) => dispatch(actions.navigateTo(params)),
      historiesactions: (params) => dispatch(actions.historiesactions(params)),
  }
};

export default connect(stateToProps,dispatchToProps)(Card)