/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Main from "./ui/containers/Main";
import {createStackNavigator} from "react-navigation";
import TestContainer from "./ui/containers/TestContainer";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <RootStack/>
    );
  }
}

const RootStack = createStackNavigator({
  Main: Main,
  TestContainer: TestContainer,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
