import React from 'react'
import { StackNavigator } from 'react-navigation'
import { AuthScreen } from '../../auth'
import { IDScreen } from '../../id'
import { HomeScreen } from '../../home'
import { MessageScreen } from '../../message'

const settings = {
  headerMode: 'none',
}

const screens = {
    auth: { screen: AuthScreen },
    id: { screen: IDScreen },
    home: { screen: HomeScreen },
    message: { screen: MessageScreen },
}

const AppNavigator = StackNavigator(screens, settings)

export default AppNavigator
