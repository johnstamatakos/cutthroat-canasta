import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignupForm from './containers/signupForm';

const initialState = {
    username: null
};

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Canasta!</Text>
                <SignupForm />
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
