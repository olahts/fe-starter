import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = (props) => {
     
    { return props.showSearchBar ? ( 
        <View style={styles.container}>
          <TouchableOpacity style={styles.leftButton} >
            <Text> Back </Text>
          </TouchableOpacity>
          <View style={styles.searchbar}>
            <Icon name="search" size={15} color="#E4E4E4" style={styles.icon}/>
            <TextInput
             style={styles.textinput}
             placeholder="Search" /> 
          </View>
          <TouchableOpacity style={styles.rightButton} >
            <Icon name="plus" size={20} color="#000000" style={styles.icon}/>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.leftButton} >
            <Text> healthID </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton} >
            <Icon name="heartbeat" size={20} color="#000000" style={styles.icon}/>
          </TouchableOpacity>
        </View>
      ) 
    }


}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingTop: 30,
      paddingHorizontal: 20,
      justifyContent: "space-between",
    },
    leftButton: {
      height: 30,
    },
    rightButton: {
      height: 30,
    },
    searchbar: {
      flex: 1,
      flexDirection: "row",
      borderRadius: 10,
      paddingHorizontal: 5,
      height: 23,
      marginHorizontal: 22,
      borderWidth: 1,
      borderColor: "#E4E4E4",
    },
    textinput: {
      flex: 1,
      paddingHorizontal: 10,
      fontSize: 12,
    },
    icon:{
      paddingHorizontal: 5,
      paddingVertical: 1,
    },
})

export default Header
