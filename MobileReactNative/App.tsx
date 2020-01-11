import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {TasksScreen} from "./screen/TasksScreen";
import {HomeScreen} from "./screen/HomeSreen";
import {Provider} from 'react-redux';
import {store} from './store/store';
import Counter from "./screen/CounterScreen";


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Tasks: TasksScreen,
        Counter: Counter,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
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
