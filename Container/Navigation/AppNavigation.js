import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native'
import React from 'react'


// import all screens
import LoginComponent from "../Components/Login/index"
import SignUpComponent from '../Components/SignUp/index'
import LandingComponent from '../Components/Landing/index'
import SeniorProfileComponent from '../Components/SeniorProfile/index'
import DateComponent from '../Components/DateComponent/index'



// Senior Stack
const SeniorStack = StackNavigator(
    {
        SeniorProfileComponent: { screen: SeniorProfileComponent },
        LandingComponent: { screen: LandingComponent },
        DateComponent: {screen: DateComponent}
    },
    {
        headerMode: 'none',
        initialRouteName: 'LandingComponent',
        navigationOptions: ({ navigation }) => ({
			gesturesEnabled: false,
		}),
    }
)

// login stack
const LoginStack = StackNavigator(
    {
        LoginComponent: { screen: LoginComponent },
        SignUpComponent: { screen: SignUpComponent }
    }, 
    {
        headerMode: 'none',
        initialRouteName: 'LoginComponent'
    }
)
    // Manifest of possible screens
const PrimaryNav = StackNavigator(
    {
        LoginStack: { screen: LoginStack },
        SeniorStack: { screen: SeniorStack }
    }, 
    {
        // Default config for all screens
        headerMode: 'none',
        initialRouteName: 'LoginStack'
    }
)

export default PrimaryNav