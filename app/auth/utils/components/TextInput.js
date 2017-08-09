import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, TextInput, } from 'react-native'
 
const TextInputA = (props) => {
    return (
        <View style={styles.container}>
          <TextInput 
            secureTextEntry = {props.secureTextEntry}
            keyboardType = {props.keyboardType}
            placeholder={props.placeholder} 
            placeholderTextColor="gray"
            value={props.textValue}
            onChangeText={textValue => props.onChangeHandler(textValue)}
            style={styles.input} />
        </View>
    )
}

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  textValue: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeHandler: PropTypes.func.isRequired,
}

const defaultProps = {
  keyboardType: 'default',
  secureTextEntry: false,
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 250,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    color: "#333333",
    fontSize: 15,
  },
})

TextInputA.propTypes = propTypes
TextInputA.defaultProps = defaultProps
 
export default TextInputA