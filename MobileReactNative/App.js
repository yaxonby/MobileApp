// import React, {Component} from 'react';
// import {Alert, Button, FlatList, InputAccessoryView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
// import UserForm from "./UserForm";
//
//
// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//         let users = [
//             {key: 'Devin'},
//             {key: 'Dan'},
//             {key: 'Dominic'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//         ];
//
//         const inputAccessoryViewID1 = "uniqueID1";
//         const inputAccessoryViewID2 = "uniqueID2";
//
//         return (
//             <View>
//                 <UserForm />
//                 <FlatList
//                     data={users}
//                     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//                 />
//             </View>
//         );
//     }
// }


import React from 'react';
import {AppLoading} from 'expo';
import {Container, Header, Content, Form, Item, Input, List, ListItem, Text} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {FlatList} from "react-native-web";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }


    setModalVisible(event) {
        console.warn('click', event);
}

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
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

        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <Container>
                <Header/>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username"/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password"/>
                        </Item>
                    </Form>

                    <List dataArray={users} renderRow={ item =>
                        <ListItem button onPress={() => this.setModalVisible(true, item)}>
                        <Text>{item.key}</Text>
                        </ListItem>
                        } />
                </Content>
            </Container>
        );
    }
}