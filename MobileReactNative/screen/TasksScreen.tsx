import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export class TasksScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Tasks Screen</Text>
              

                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}