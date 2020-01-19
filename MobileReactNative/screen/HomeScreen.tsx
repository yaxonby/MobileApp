import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                
                <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'}}>
                    <Text>Home Screen</Text>
                </View>
                
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column'}}>
                    <Text onPress={() => this.props.navigation.push('ListWords')}
                    >List Words </Text>

                    <Text onPress={() => this.props.navigation.push('Words')}
                    >Words</Text>

                    <Text onPress={() => this.props.navigation.push('Tasks')}
                    > Tasks</Text>

                    <Text onPress={() => this.props.navigation.navigate('Counter')}
                    > Counter</Text>
                </View>

            </View>
        );
    }
}