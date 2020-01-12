import React from 'react';
import {StyleSheet, Button, View, Text, Dimensions} from 'react-native';
import {Container, Header, Content, List, ListItem, Separator} from 'native-base';
import entityWords from '../listWords.js'

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export class ListWordsScreen extends React.Component {

    setModalVisible(event: boolean, it: any) {
        console.warn('click', event, it);
    }

    render() {
        const {commonWords} = entityWords;

        return (
            <View style={styles.view}>

                <Container>
                    <Header/>
                    <Content>

                        <List style={{width: Dimensions.get('window').width}}
                              dataArray={commonWords}
                              keyExtractor={(item, index) => index.toString()}
                              renderRow={(item, index) =>
                                  <ListItem button
                                            onPress={() => this.setModalVisible(true, item)}>
                                      <Text>
                                          {item}
                                      </Text>
                                  </ListItem>
                              }/>

                    </Content>
                </Container>
            </View>
        );
    }
}