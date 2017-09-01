import { StackNavigator } from 'react-navigation'
import Login from './login'
import Signup from './signup'

const screens = {
    login: { screen: Login },
    signup: { screen: Signup },
}

export default StackNavigator(screens,{ headerMode: 'none'})
