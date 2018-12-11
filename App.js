// @flow
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './src/reducers'

import Home from "./src/screens/Home";
import List from "./src/screens/List";
import Detail from "./src/screens/Detail";

const store = createStore(reducers);

const AppNavigator = createStackNavigator(
  {
    List: { screen: List },
    Detail: { screen: Detail }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#ffe207",
        borderBottomWidth: 0,
        marginLeft: 15,
        marginRight: 15
      }
    }
  }
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigatorContainer />
      </Provider>
    )
  }
}

export default App;
