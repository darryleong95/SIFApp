import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native'
import React from 'react'


// import all screens
import LoginComponent from "../Components/Login/index"
import SignUpComponent from '../Components/SignUp/index'
import LandingComponent from '../Components/Landing/index'
import SeniorProfileComponent from '../Components/SeniorProfile'
import DateComponent from '../Components/DateComponent/index'
import CustomerProfileComponent from '../Components/CustomerProfile/index'
import UserType from '../Components/UserType/index'
import NewClassComponent from '../Components/NewClassComponent/index'

// Senior Stack
export const SeniorStack = createStackNavigator(
    {
        SeniorProfileComponent: { screen: SeniorProfileComponent },
        NewClassComponent: { screen: NewClassComponent },
        LandingComponent: { screen: LandingComponent },
        DateComponent: {screen: DateComponent}
    },
    {
        headerMode: 'none',
        initialRouteName: 'SeniorProfileComponent',
    }
)

// login stack
export const LoginStack = createStackNavigator(
    {
        LoginComponent: { screen: LoginComponent },
        SignUpComponent: { screen: SignUpComponent },
        UserTypeComponent: { screen: UserType }
    }, 
    {
        headerMode: 'none',
        initialRouteName: 'UserTypeComponent'
    }
)
    // Manifest of possible screens
export const PrimaryNav = createStackNavigator(
    {
        LoginStack: { screen: LoginStack },
        SeniorStack: { screen: SeniorStack },
        CustomerProfile: { screen: CustomerProfileComponent }
    }, 
    {
        // Default config for all screens
        headerMode: 'none',
        initialRouteName: 'LoginStack'
    }
)
