import React, { Component } from 'react'
// import { StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { PrimaryNav, LoginStack } from './Container/Navigation/AppNavigation';
import WalkthroughComponent from './Container/Components/Walkthrough/index'
import APITestComponent from './Container/Components/APITest/APITestComponent'
import UserType from './Container/Components/UserType/index'

// import provider
import { Provider } from 'react-redux'
// import store
import store from './store'


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
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PrimaryNav />
      </Provider>
    )
  }
}
