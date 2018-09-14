import React from 'react'
// import { StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation';
import PrimaryNav from './Container/Navigation/AppNavigation';
import WalkthroughComponent from './Container/Components/Walkthrough/index'
import SignUpComponent from './Container/Components/SignUp/index'

// login stack
const MainStack = StackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
    WalkthroughComponent: {screen: WalkthroughComponent}
  }, 
  {
    headerMode: 'none',
    initialRouteName: 'WalkthroughComponent'
  }
)


// import SeniorProfileComponent from './Container/Components/SeniorProfile/index'
export default class App extends React.Component {
  render() {
    return <MainStack />
  }
}
