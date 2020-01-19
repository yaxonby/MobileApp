import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import styled from 'styled-components/native'



const StyledView = styled.View`
background-color: gold;
`;

export class WordsScreen extends React.Component {
    render() {
        return (
            <StyledView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Tasks Screen</Text>


                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </StyledView>
        );
    }
}