import React from 'react';
import {StyleSheet, Button, Text, View, Image, FlatList} from 'react-native';
import entityWords from '../listWords.js'

function Item({ title }) {
    return (
        <View >
            <Button
                title={title}
                onPress={() => {console.warn("title", title)}}
            />
        </View>
    );
}

export class TasksScreen extends React.Component {
    render() {
        const listWords: string[] = entityWords.commonWords;
        const randomWords = [];
        function getRandomIntInclusive(): number {
            const min = 0;
            const max = listWords.length;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        for (let i = 0; i < 4; i++) {
            randomWords.push(listWords[getRandomIntInclusive()]);
        }
       
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Tasks Screen</Text>

                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />



                <FlatList
                    data={randomWords}
                    renderItem={ ({ item }) => <Item title={item} />
                    }
                    keyExtractor={(item, index) => index.toString()}

                />


                <Button
                    title="Previous word"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Next word"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}