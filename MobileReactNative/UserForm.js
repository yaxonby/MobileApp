import React, {Component} from 'react';
import {Alert, Button, FlatList, InputAccessoryView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

export default function UserForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    const handleSubmit = () => {

    };

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <form className={classes.container} noValidate autoComplete="off">
                <Text> Add User name: </Text>

                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />

                <Text> Add User age: </Text>
                <TextField
                    id="standard-age"
                    label="Age"
                    className={classes.textField}
                    value={values.age}
                    onChange={handleChange('age')}
                    margin="normal"
                />
                <Button
                    title="Press me"
                    onPress={handleSubmit}
                />
            </form>
        </View>
    )
}