import React, { Component } from 'react';
import {
    createStackNavigator,
    createTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from '../Home/XMGHome';
import Mine from '../Mine/XMGMine';
import More from '../More/XMGMore';
import Shop from '../Shop/XMGShop';
import HomeDetail from '../Home/HomeDetail';
import LaunchImg from '../Main/LaunchImage';

const ScreenTab = createTabNavigator({
        Home:{
            screen:Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '主页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons
                        name={focused?'ios-home':'ios-home-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            })
        },
        Shop:{
            screen:Shop,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '商家',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons
                        name={focused?'ios-cart':'ios-cart-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            })
        },
        Mine:{
            screen:Mine,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons
                        name={focused?'ios-contact':'ios-contact-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            })
        },
        More:{
            screen:More,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '更多',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Ionicons
                        name={focused?'ios-more':'ios-more-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            })
        }
    },
    {
        tabBarPosition: 'bottom',//位置
        tabBarOptions: {
            showIcon: true,//是否显示图标！！！！！！！
            style: {
                height: 45,//底部导航的宽度
                backgroundColor: '#6f6f6f',//底部导航的颜色
            },
            labelStyle: {
                fontSize: 12,//字体大小
                marginTop: -2,//字体距离图标大小
            },
            indicatorStyle:{
                backgroundColor:'#6f6f6f'//设置底部滑动线的颜色
            }
        }
    }
);

const myNavigator=createStackNavigator(
    {
        LaunchImg:LaunchImg,
        TabNav:{
            screen:ScreenTab,
            navigationOptions: ({ navigation }) => ({
                // title: 'Home',
                header:null,
            }),
        },
        HomeDetail:HomeDetail
    },
    {
        initialRouteName:'LaunchImg',
        navigationOptions: ({ navigation }) => ({
            // title: 'Home',
            header:null,
        })
    }
);
export default myNavigator