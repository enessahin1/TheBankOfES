import React, { Component } from "react";
import { Text, Image, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import HomePage from "./src/screens/homePage/HomePage";
import ScreenSwitcher from 'react-native-device-screen-switcher';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <>
        <ScreenSwitcher>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomePage} />
            </Drawer.Navigator>
          </NavigationContainer>
        </ScreenSwitcher>
      </>
    )
  }
}