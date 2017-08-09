import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
export {default as signupreducers} from './reducers'
import style from './styles'
import { Button, TextInput, Alert } from '../utils/components'

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleInputChange (name, text) {
    this.setState({
      [name]: text
    })
  }

  signup(){
    this.props.signup(this.state)
  }

  login(){
    this.props.login({})
  }

  render() {
    return (

              <View style={styles.container}>
                <Alert style={styles.alert} message={''}/>
                <View style={styles.inputelements} >
                  <TextInput placeholder={'Username'} onChangeHandler={this.handleInputChange.bind(this, 'username')} />
                  <TextInput placeholder={'Password'} onChangeHandler={this.handleInputChange.bind(this, 'passowrd')} secureTextEntry={true}/>
                  <TextInput placeholder={'Confirm Password'} onChangeHandler={this.handleInputChange.bind(this, 'confirmPassword')} secureTextEntry={true}/>
                  <View style={styles.button}>
                    <Button label={'SIGN UP'} onTouch= {this.signup.bind(this)}/>
                  </View>
                  <View style={styles.button}>
                    <Button label={'LOGIN'} onTouch= {this.login.bind(this)} />
                  </View>
                </View>
              </View>


    )
  }

}

const styles = StyleSheet.create(style)

const stateToProps = ({ auth }) => {
  return {
    signup: auth.signup,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    signup: (params) => dispatch(actions.signup(params)),
    login: (params) => dispatch(actions.gotoLogin(params)),
  }
}

export default connect(stateToProps,dispatchToProps)(SignUp)
