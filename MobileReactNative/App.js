import React from 'react';
import {AppLoading} from 'expo';
import {Container, Header, Content, Form, Item, Input, List, ListItem, Text} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;


// axios.defaults.baseURL =
//     'http://' +
//     (typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
//         ? manifest.debuggerHost
//             .split(`:`)
//             .shift()
//             .concat(`:6666`)
//         : `api.example.com`);


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            data: null,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }


    setModalVisible(event) {
        console.warn('click', event);
    }

    async componentDidMount() {
       // console.warn('api', api);


        const axiosApi =  {
            get: () => axios.get('htt://172.18.108.33:44300/api/users'),
            add: values => axios.post('/patients', values),
            show: id => axios.get('/patients/' + id),
        };


        axiosApi
            .get()
            .then((answer) => {
                console.warn('answer', answer)
            })
            .catch(e => {
                console.warn('errror', e)
            })
        
        
        
        
        
        
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'htt://172.18.108.33/api/users';
        
        // http://172.18.108.33:1137/some-api/some-request
        // 172.18.108.33
        // 192.168.0.107
        //
        
        // baseURL
        
        //const url =  '/api/users';
    // htt://192.168.1.20/routname
        
        // let response = await fetch(url);
        // let json;
        // if (response.ok) { // если HTTP-статус в диапазоне 200-299
        //                    // получаем тело ответа (см. про этот метод ниже)
        //     json = await response.json();
        // } else {
        //     console.warn("Ошибка HTTP: " + response.status);
        // }
        // console.warn('load succsess', json);
        //
        // this.setState({data:  json ? json  : "Ошибка HTTP: " + response.status});
        
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

                <Text>Загрузил: {this.state.data}</Text>
                
                
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username"/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password"/>
                        </Item>
                    </Form>

                    <List dataArray={users}
                          renderRow={item =>
                        <ListItem button onPress={() => this.setModalVisible(true, item)}>
                            <Text>Name: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.key}</Text></Text>
                           
                        </ListItem>
                    }/>
                </Content>
                
            </Container>
        );
    }
}