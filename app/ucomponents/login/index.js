import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import { Button, TextInput, Alert } from '../'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInputChange (name, text) {
    this.setState({
      [name]: text
    })
  }

  login(){
    this.props.login(this.state)
  }

  signup(){
    this.props.signup({})
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert style={styles.alert} message={''}/>
        <View style={styles.inputelements} >
          <TextInput placeholder={'Username'} onChangeHandler={this.handleInputChange.bind(this, 'username')} />
          <TextInput placeholder={'Password'} onChangeHandler={this.handleInputChange.bind(this, 'passowrd')} secureTextEntry={true}/>
          <View style={styles.button}>
            <Button label={'LOGIN'} onTouch= {this.login.bind(this)}/>
          </View>
          <View style={styles.button}>
            <Button label={'SIGN UP'} onTouch= {this.signup.bind(this)} />
          </View>
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create(style)

const stateToProps = ({ auth }) => {
  return {
    login: auth.login,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(actions.login(params)),
    signup: (params) => dispatch(actions.gotoSignup(params)),
  }
}

export default connect(stateToProps,dispatchToProps)(Login)
