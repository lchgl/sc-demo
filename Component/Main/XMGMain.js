/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';
import {
    createBottomTabNavigator,
    BottomTabBar
} from 'react-navigation-tabs';

import Home from '../Home/XMGHome';
import Mine from '../Mine/XMGMine';
import More from '../More/XMGMore';
import Shop from '../Shop/XMGShop';


const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const TabScreens = createBottomTabNavigator(
    {
      '主页':{screen:Home},
      '商家':{screen:Shop},
      '我的':{screen:Mine},
      '更多':{screen:More}
    },
    {
        tabBarComponent: props =>
            <TabBarComponent
                {...props}
                style={{ borderTopColor: '#605F60' }}
            />,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#D6D6D6',
            inactiveTintColor: '#605F60',
            inactiveBackgroundColor: '#fff',
            activeBackgroundColor: '#fff',
            labelStyle: {
                fontSize: 16,
                paddingBottom: 3,
            },
            style: {
                backgroundColor: '#fff',
            },
        },
        showIcon: true,
        swipeEnabled: true,
    },
);
const myNavigator=createStackNavigator(
    {
        TabNav:{
            screen:TabScreens,
            navigationOptions: ({ navigation }) => ({
                // title: 'Home',
                header:null,
            }),
        },
        // Home:Home
    },
    {
        initialRouteName:'TabNav',
    }
);
export default myNavigator

// export default TabScreens

// export default class Main extends Component<Props> {
//   //初始化页面变量
//     constructor(props){
//         super(props);
//         // const page = this.props.navigation.state.page?this.props.navigation.state.page:'首页';
//         this.state = {
//             selectTab:'home'
//         }
//     }
//   render() {
//     return (
//       <View>
//           <Text>main入口</Text>
//           <TabScreens></TabScreens>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   iconStyle:{
//     width:Platform.OS === 'ios' ? 30 : 25,
//     height:Platform.OS === 'ios' ? 30 : 25,
//   }
// });
