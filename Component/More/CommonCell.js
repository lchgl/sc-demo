
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Modal
} from 'react-native';

type Props = {};

export default class CommonCell extends Component<Props> {
    static defaultProps = {
        isSwitch:false,
        title:'',
        rightTitle:''
    };

    //static propTypes = {
    //    isSwitch: PropTypes.boolean.isRequired
    //};
    constructor(props){
	  super(props)
      this.state={
          //title:'111',//标题
          //isSwitch:this.props.isSwitch//是否要开关
          switchIsOn:false,
      }
  }
  render() {
    return (
    <TouchableOpacity onPress={()=>{alert('点了')}}>
      <View style={styles.container}>
		<Text style={{marginLeft:15}}>{this.props.title}</Text>
        <View style={{marginRight:15,flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginRight:10}}>{this.props.rightTitle}</Text>
            {this.renderRightPart()}
        </View>

      </View>
    </TouchableOpacity>
    );
  }
  //cell右边的内容
  renderRightPart() {
    if(this.props.isSwitch){
        return(
            <Switch value={this.state.switchIsOn} onValueChange={()=>{this.setState({switchIsOn:!this.state.switchIsOn})}}  />
        )
    }else{
        return(
            <Image source={require('../../src/images/more/right.png')} style={styles.IconImg}/>
        )
      }
  }
}

const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:1
    },
    IconImg:{
        width:10,
        height:15
    }
});
