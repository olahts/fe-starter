import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Logo = ({ uri, style }) => {
    return (

      <View style={[styles.container, style ]}>
          <Image style={styles.image}
              source={{uri}} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
	image: {
    width: 70,
    height: 70
  }
})

Logo.propTypes = {
  uri: PropTypes.string,
}
Logo.defaultProps = {
  uri: 'https://pbs.twimg.com/profile_images/855395440598110209/bKHRP5Qx_bigger.jpg'
}

export default Logo
