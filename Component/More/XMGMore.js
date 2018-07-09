
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import CommonCell from './CommonCell';

type Props = {};

export default class More extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          {this.renderNavBar()}
        <ScrollView>
          <View style={{marginTop:15}}>
            <CommonCell title="搜一搜"/>
          </View>
          <View style={{marginTop:15}}>
            <CommonCell
                title="省流量模式"
                isSwitch={true}
            />
            <CommonCell
                title="消息提醒"
            />
            <CommonCell
                title="邀请好友"
            />
            <CommonCell
                title="清空缓存"
                rightTitle="123.5M"
            />
          </View>
          <View style={{marginTop:15}}>
            <CommonCell
                title="意见反馈"
            />
            <CommonCell
                title="问卷调查"
            />
            <CommonCell
                title="支付帮助"
            />
            <CommonCell
                title="网络诊断"
            />
            <CommonCell
                title="关于"
            />
            <CommonCell
                title="我要应聘"
            />
          </View>
            <View style={{marginTop:15}}>
                <CommonCell
                    title="精品应用"
                />
                <CommonCell
                    title="问卷调查"
                />
                <CommonCell
                    title="支付帮助"
                />
                <CommonCell
                    title="网络诊断"
                />
                <CommonCell
                    title="关于"
                />
                <CommonCell
                    title="我要应聘"
                />
            </View>
        </ScrollView>
      </View>
    );
  }
  renderNavBar(){
    return (
        <View style={styles.navBar}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>更多</Text>
            <TouchableOpacity onPress={()=>{alert('点击！！！')}} style={styles.IconPosition}>
                <Image source={require('../../src/images/more/setting.png')} style={styles.barIcons}></Image>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navBar:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#8fbcf9',
    height:50,
    justifyContent:'center'
  },
  barIcons:{
    width:24,
    height:24
  },
  IconPosition:{
    position:'absolute',
    right:10
  }
});
