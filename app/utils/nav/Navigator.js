import React from 'react'
import { StackNavigator } from 'react-navigation'
import Auth from '../../auth'
import Tabs from '../../tabs'

const settings = {
  headerMode: 'none',
}

const screens = {
    auth: { screen: Auth },
    tabs: { screen: Tabs },
}

export default StackNavigator(screens, settings)
