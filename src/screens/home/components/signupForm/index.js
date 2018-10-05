import { FormLabel, FormInput } from 'react-native-elements';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const initialState = {
    username: null
};

export default class SignupForm extends Component {
    setUsername = username => {
        console.log(username);
        this.setState({
            username: username
        });
    };

    submit = () => {
        const payload = {
            username: this.state.username
        };
        this.props.createAccount(payload);
    };

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Username</FormLabel>
                <FormInput onChangeText={this.setUsername} />
                <Button title="Create Account!" onPress={this.submit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
