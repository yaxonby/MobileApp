import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {TasksScreen} from "./screen/TasksScreen";
import {HomeScreen} from "./screen/HomeSreen";

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Tasks: TasksScreen,
    },
    {
      initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return (
      <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/*<View style={styles.container}>*/}
{/*  <Text>Open up App.js to start working on your app!</Text>*/}
{/*</View>*/}
