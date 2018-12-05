// @flow
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import List from './src/screens/List'
import Detail from './src/screens/Detail'

const App = createStackNavigator({
    List: { screen: List },
    Detail: { screen: Detail }
  }, {
    headerMode: 'none'
  }
)

export default createAppContainer(App);