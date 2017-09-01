import React from 'react'
import { StackNavigator } from 'react-navigation'
import Feeds from './feeds'
import Feed from './feed';
import Histories from '../../ucomponents/histories'

const settings = {
  headerMode: 'none',
};


const screens = {
    feeds: { screen: Feeds },
    feed: { screen: Feed },
    histories: { screen: Histories },
};

export default StackNavigator(screens, settings)
