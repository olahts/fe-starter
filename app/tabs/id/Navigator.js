import React from 'react'
import { StackNavigator } from 'react-navigation'
import Card from './card';
import Histories from '../../ucomponents/histories'

const settings = {
  headerMode: 'none',
};


const screens = {
    card: { screen: Card },
    histories: { screen: Histories },
};

export default StackNavigator(screens, settings)
