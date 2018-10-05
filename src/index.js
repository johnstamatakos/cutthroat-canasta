/*
  App is the main entrypoint to the application. This is where we do app bootstrapping.
*/

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppNavigator from './routes';

const { store } = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
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
