import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import ScrollableTabView  from 'react-native-scrollable-tab-view'
import List from './List'

const SwiperWithTabs = ({ listdata, showItem }) => {
  return ( 
     <ScrollableTabView >
        <List listdata={listdata} tabLabel="Scheduled" onItemTouch={showItem}/>
        <List listdata={listdata} tabLabel="Pending" onItemTouch={showItem}/>
        <List listdata={listdata} tabLabel="Completed" onItemTouch={showItem}/>
      </ScrollableTabView>

  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#F5FCFF',
    },
    id: {
      flex: 1,
      marginVertical: 65,
      marginHorizontal: 50,
      borderRadius: 10,
        backgroundColor: '#F5FCCC',
    },
    wrapper: {
    },
})

export default SwiperWithTabs