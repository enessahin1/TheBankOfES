import React, { Component } from "react";
import { Text, Image, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import HomePage from "./src/screens/homePage/HomePage";
import ScreenSwitcher from 'react-native-device-screen-switcher';

export default class App extends Component {

  render() {
    return (
      <>
        <ScreenSwitcher>
          <HomePage />
        </ScreenSwitcher>
      </>
    )
  }
}