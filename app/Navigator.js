import React from 'react'
import { StackNavigator } from 'react-navigation'
import Auth from './auth/index'
import Tabs from './tabs/index'

const settings = {
  headerMode: 'none',
}

const screens = {
    auth: { screen: Auth },
    tabs: { screen: Tabs },
}

export default StackNavigator(screens, settings)
