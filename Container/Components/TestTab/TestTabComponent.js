import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import LandingComponent from '../Landing/index'
import BrowseSeniorsComponent from '../BrowseSeniors/index'
import styles from './styles'

const FirstRoute = () => (
  <LandingComponent />
);
const SecondRoute = () => (
  <BrowseSeniorsComponent />
);

export default class TabTestComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderPager={this._renderPager}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        useNativeDriver
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.header}
      />
    );
  }
}