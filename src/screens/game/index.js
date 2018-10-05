import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const initialState = {};

export default class Game extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Game Time!</Text>
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
