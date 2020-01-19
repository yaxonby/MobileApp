import React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        width: 130,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',

    },
});

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>

                <View style={{alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'}}>
                    <Text>Home Screen</Text>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.push('ListWords')}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>List words</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('LearnWords')}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>Learn words</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Tasks')}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>Tasks</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Counter')}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>Counter</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Words')}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>Words</Text>
                </TouchableOpacity>

            </View>
        );
    }
}