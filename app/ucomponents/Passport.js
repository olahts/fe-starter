import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Passport = ({ uri, style }) => {
    return (

      <View style={[styles.container, style ]}>
          <Image style={styles.image}
              source={{uri}} />
      </View>
    )
}

const styles = StyleSheet.create({
	container: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:150,
    backgroundColor:'#fff',
    borderRadius:150,
  },
  image: {width: 50, height: 50}
})

Passport.propTypes = {
  uri: PropTypes.string,
}
Passport.defaultProps = {
  uri: 'https://pbs.twimg.com/profile_images/855395440598110209/bKHRP5Qx_bigger.jpg'
}

export default Passport
