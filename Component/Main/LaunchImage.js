import React, { Component } from 'react';

import {
    AppRegistry,
    Platform,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

type Props = {};
export default class LaunchImage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../src/images/main/tangwei.jpg')} style={styles.launchImg}/>
            </View>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('TabNav')
        },1500)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    launchImg:{
        flex:1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});