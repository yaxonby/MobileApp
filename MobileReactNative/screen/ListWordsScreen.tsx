import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import {Container, Header, Content, List, ListItem, Separator} from 'native-base';
import entityWords from '../listWords.js'

export class ListWordsScreen extends React.Component {

    setModalVisible(event: boolean, it: any) {
        console.warn('click', event, it);
    }

    render() {
        const {commonWords} = entityWords;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <Container>
                    <Header/>
                    <Content>

                        <List dataArray={commonWords}
                              renderRow={(item, index) =>
                                  <ListItem button onPress={() => this.setModalVisible(true, item)}>
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