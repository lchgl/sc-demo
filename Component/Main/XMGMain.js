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
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

type Props = {};
export default class Main extends Component<Props> {
  //初始化页面变量
  getInitialState(){
    return {
      selectTab:'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
            title='首页'
            renderIcon={() => <Image style={styles.iconStyle} source={require('../../src/images/tab/tab-main-2.png')} />}
            rederSelectedIcon={() => <Image source={require('../../src/images/tab/tab-main-1.png')} style={styles.iconStyle}/>}
            onPress={()=>{this.setState({selectTab:'home'})}}
            selected={this.state.selectTab === 'home'}
        >
        </TabNavigator.Item>
          <TabNavigator.Item
              title='商家'
              renderIcon={() => <Image style={styles.iconStyle} source={require('../../src/images/tab/tab-shop-2.png')} />}
              rederSelectedIcon={() => <Image source={require('../../src/images/tab/tab-shop-1.png')} style={styles.iconStyle}/>}
              onPress={()=>{this.setState({selectTab:'shop'})}}
              selected={this.state.selectTab === 'shop'}
          >
          </TabNavigator.Item>
          <TabNavigator.Item
              title='我的'
              renderIcon={() => <Image style={styles.iconStyle} source={require('../../src/images/tab/tab-home-2.png')} />}
              rederSelectedIcon={() => <Image source={require('../../src/images/tab/tab-home-1.png')} style={styles.iconStyle}/>}
              onPress={()=>{this.setState({selectTab:'mine'})}}
              selected={this.state.selectTab === 'mine'}
          >
          </TabNavigator.Item>
          <TabNavigator.Item
              title='更多'
              renderIcon={() => <Image style={styles.iconStyle} source={require('../../src/images/tab/tab-more-2.png')} />}
              rederSelectedIcon={() => <Image source={require('../../src/images/tab/tab-more-1.png')} style={styles.iconStyle}/>}
              onPress={()=>{this.setState({selectTab:'more'})}}
              selected={this.state.selectTab === 'more'}
          >
          </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle:{
    width:30,
    height:30,
  }
});
