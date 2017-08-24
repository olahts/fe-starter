import React from 'react'
import { StackNavigator } from 'react-navigation'
import Histories from '../../ucomponents/histories'
import Card from '../../ucomponents/card';

const settings = {
  headerMode: 'none',
};


const screens = {
    card: { screen: Card },
    histories: { screen: Histories },
};

export default StackNavigator(screens, settings)
