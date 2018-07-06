
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

type Props = {};

export default class More extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          {this.renderNavBar()}
        <Text style={styles.welcome}>
          More更多组件页面
        </Text>
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
    backgroundColor: '#F5FCFF',
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
