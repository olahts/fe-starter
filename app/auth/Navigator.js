import { StackNavigator } from 'react-navigation'
import Login from '../ucomponents/login'
import Signup from '../ucomponents/signup'

const screens = {
    login: { screen: Login },
    signup: { screen: Signup },
}

export default StackNavigator(screens,{ headerMode: 'none'})
