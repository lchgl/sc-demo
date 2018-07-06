/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
const{width,height} = Dimensions.get('window');

type Props = {};
export default class Home extends Component<Props> {
  render() {
    const {navigation} = this.props;
    console.log(width,height)
    return (
      <View style={styles.container}>
          {this.rederNavBar()}
        <Text style={styles.welcome}>
          Home组件页面
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeDetail')}>
            <Text>详情页</Text>
        </TouchableOpacity>
      </View>
    );
  }
  rederNavBar () {
    return (
        <View style={styles.topNav}>
            <TouchableOpacity onPress={()=>alert('点击了')}>
            <Text>深圳</Text>
            </TouchableOpacity>
            <TextInput
              placeholder='请输入关键字'
              style={styles.topInput}
              underlineColorAndroid='transparent'
            />
            <View style={styles.rightImg}>
                <TouchableOpacity onPress={()=>alert('点击了')}>
                    <Image source={require('../../src/images/home/bell-message.png')} style={styles.TopIcons}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('点击了')}>
                    <Image source={require('../../src/images/home/scan-code.png')} style={styles.TopIconsTwo}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  topNav:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'#8fbcf9',
    height:50,
  },
  topInput:{
    width:0.6*width,
    backgroundColor:'#fff',
    height:34,
    borderRadius:17,
    paddingLeft: 20,
    paddingTop:0,
    paddingBottom:0,
  },
  rightImg:{
    flexDirection:'row',
  },
  TopIcons:{
    width:30,
    height:30,
  },
  TopIconsTwo:{
    width:30,
    height:30,
    marginLeft:5
  }
});
