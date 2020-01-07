import React from 'react';
import {AppLoading} from 'expo';
import {Container, Header, Content, Form, Item, Input, List, ListItem, Text} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
// import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;


// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isReady: false,
//             data: null,
//         };
//         this.setModalVisible = this.setModalVisible.bind(this);
//     }
//
//
//     setModalVisible(event) {
//        
//        // console.warn('click', event);
//        
//     }
//
//     async componentDidMount() {
//        console.warn('api');
//
//
//         // const axiosApi =  {
//         //     get: () => axios.get('htt://172.18.108.33:44300/api/users'),
//         //     add: values => axios.post('/patients', values),
//         //     show: id => axios.get('/patients/' + id),
//         // };
//         //
//         //
//         // axiosApi
//         //     .get()
//         //     .then((answer) => {
//         //         console.warn('answer', answer)
//         //     })
//         //     .catch(e => {
//         //         console.warn('errror', e)
//         //     })
//        
//        
//         await Font.loadAsync({
//             Roboto: require('native-base/Fonts/Roboto.ttf'),
//             Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//             ...Ionicons.font,
//         });
//         this.setState({isReady: true});
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
//         if (!this.state.isReady) {
//             return <AppLoading/>;
//         }
//
//         return (
//             <Container>
//                 <Header/>
//
//                 <Text>Загрузил: {this.state.data}</Text>
//                
//                
//                 <Content>
//                     <Form>
//                         <Item>
//                             <Input placeholder="Username"/>
//                         </Item>
//                         <Item last>
//                             <Input placeholder="Password"/>
//                         </Item>
//                     </Form>
//
//                     <List dataArray={users}
//                           renderRow={item =>
//                         <ListItem button onPress={() => this.setModalVisible(true, item)}>
//                             <Text>Name: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.key}</Text></Text>
//                           
//                         </ListItem>
//                     }/>
//                 </Content>
//                
//             </Container>
//         );
//     }
// }