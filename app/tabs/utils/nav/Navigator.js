import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';
import Home from '../../home'
import Id from '../../id'
import Message from '../../message'
import Search from '../../search'

const settings = {
  headerMode: 'none',
  tabBarOptions: {
    showLabel: false,
  },
}

const screens = {
    home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />,
      },
    },
    search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={30} color={tintColor} />,
      },
    },
    message: {
      screen: Message,
      navigationOptions: {
        tabBarLabel: 'Message',
        tabBarIcon: ({ tintColor }) => <Icon name="email" size={30} color={tintColor} />,
      },
    },
    id: {
      screen: Id,
      navigationOptions: {
        tabBarLabel: 'Id',
        tabBarIcon: ({ tintColor }) => <Icon name="perm-identity" size={30} color={tintColor} />,
      },
    },
}

export default TabNavigator(screens, settings)
