import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Login';

const AppNavigator = createStackNavigator(
    {
        Login,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);

const AppRoute = createAppContainer(AppNavigator);
export default class NativeRoute extends Component {
    render() {
        return <AppRoute />
    }
}