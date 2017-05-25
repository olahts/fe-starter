import React from 'react'
import { StackNavigator } from 'react-navigation'
import { AuthScreen } from '../auth'
import { IDScreen } from '../id'
import { ProfileScreen } from '../profile'
import { RequestScreen } from '../request'

const settings = {
  headerMode: 'none',
}

const screens = {
    auth: { screen: AuthScreen },
    id: { screen: IDScreen },
    profile: { screen: ProfileScreen },
    request: { screen: RequestScreen },
}

const AppNavigator = StackNavigator(screens, settings)

export default AppNavigator 