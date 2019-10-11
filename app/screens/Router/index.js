import React from 'react';
import { Platform } from 'react-native';
import NativeRoute from './nativeRoute';
import WebRoute from './webRoute';
import { connect } from 'react-redux';
import OfflineNotice from '../../screens/networkHandle'
import { View, Text } from 'react-native'
import { Root } from "native-base";

function AppRoute(props) {
    console.log('is internet', props.internet)
    return (
        <Root>
            {!props.internet ? <Text>No Internet</Text> : Platform.OS === 'web' ? <WebRoute /> : <NativeRoute />}
            <OfflineNotice />
        </Root>
    )
}

const mapStateToProps = state => ({
    internet: state.deviceInternet.internet
})

export default connect(mapStateToProps)(AppRoute)