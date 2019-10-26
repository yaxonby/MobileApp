import React, {Component} from 'react';
import {Alert, Button, FlatList, InputAccessoryView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        console.warn('event', event);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.warn('name', name);
        // console.warn('value', value);
        
        this.setState({
            [name]: value
        },
       //     () => console.warn('this.state', this.state)
        );
        
        
    }

    handleSubmit(event) {
        Alert.alert('Simple Button pressed', this.state);
        
       // console.warn(this.state);
        event.preventDefault();
    }

    render() {
        let users = [
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
        ];

        const inputAccessoryViewID1 = "uniqueID1";
        const inputAccessoryViewID2 = "uniqueID2";

        return (
            <View>
                <ScrollView keyboardDismissMode="interactive">
                   
                            <Text> Add User name: </Text>
                            <TextInput
                                style={{
                                    padding: 10,
                                    paddingTop: 50,
                                }}
                                name="name"
                                type="string"
                                value={this.state.name}
                                inputAccessoryViewID={inputAccessoryViewID1}
                                onChange={this.handleInputChange}
                            />
                            
                            <Text> Add User age: </Text>
                            <TextInput
                                style={{
                                    padding: 10,
                                    paddingTop: 50,
                                }}
                                name="age"
                                type="number"
                                value={this.state.age}
                                inputAccessoryViewID={inputAccessoryViewID2}
                                onChange={this.handleInputChange}
                            />
                        <Button
                            title="Press me"
                            onPress={this.handleSubmit}
                        />

                </ScrollView>

                <FlatList
                    data={users}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}
