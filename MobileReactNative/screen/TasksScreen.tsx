import React from 'react';
import {StyleSheet, Button, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import entityWords from '../listWords.js'

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        width: 130,
        marginTop:10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',

    },
});

function Item({ title }) {
    return (
        <TouchableOpacity onPress={() =>{console.warn("title", title)}}
                          style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
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

                <View style={{flex: 1, alignItems: 'space-between', justifyContent: 'space-between', flexDirection: 'row'}}>

                    <TouchableOpacity onPress={() => this.props.navigation.push('Home')}
                                      style={styles.button}>
                        <Text style={styles.buttonText}>Previous word</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.push('Home')}
                                      style={styles.button}>
                        <Text style={styles.buttonText}>Next word</Text>
                    </TouchableOpacity>
                    
                </View>
          
            </View>
        );
    }
}