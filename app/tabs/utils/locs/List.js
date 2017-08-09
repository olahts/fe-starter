import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const List = ({ listdata, onItemTouch }) => {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return (
        <ListView
        ref={ c => _setRefs(c) }
        dataSource={ds.cloneWithRows(listdata)}
        onScroll={ e => _onScroll(e) }
        renderRow={(rowData, secId, rowId) => _renderRow(rowData, secId, rowId, onItemTouch)} />
    )
}


const _renderRow = (rowData, secId, rowId, onTouch) => {
      return (
          <TouchableOpacity style={styles.container} onPress = {() => onTouch({id: rowId, data: rowData})}>
            <View style={styles.image}>
            </View>  
            <Text style={styles.text}> {rowData.name} </Text>
          </TouchableOpacity>
      )
}

const _onScroll = e => {
    
}

const _setRefs = c => {
    
}
     
    
const styles = StyleSheet.create({
      container: {
      flexDirection: "row",
      margin: 4,
      height:50,
      padding: 5,
      borderWidth: 1,
      borderColor: "#E4E4E4",
      backgroundColor: "blue",
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 40/2,
      backgroundColor: 'red'
    },
    text:{

    },
})

export default List