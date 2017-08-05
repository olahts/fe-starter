import { StackNavigator } from 'react-navigation'
import LoginScreen from '../../login'
import SignupScreen from '../../signup'

const screens = {
    login: { screen: LoginScreen },
    signup: { screen: SignupScreen },
}

export default StackNavigator(screens,{ headerMode: 'none'})
