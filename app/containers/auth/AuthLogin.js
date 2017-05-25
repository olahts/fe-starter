import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { Button, TextInput, Alert } from '../../components'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'

class AuthLogin extends Component {
  
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

  signup(){

  }

  login(){
    this.props.login(this.state) 
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert style={styles.alert} message={this.props.auth.error}/> 
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

const styles = StyleSheet.create(style.userlogin)

const stateToProps = ({ auth }) => {
  return {
    auth: auth,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(actions.login(params)),
  }
}

export default connect(stateToProps,dispatchToProps)(AuthLogin)




