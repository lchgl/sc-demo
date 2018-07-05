import React, { Component } from 'react';
import {
    createStackNavigator,
    createTabNavigator
} from 'react-navigation';

import Home from '../Home/XMGHome';
import Mine from '../Mine/XMGMine';
import More from '../More/XMGMore';
import Shop from '../Shop/XMGShop';

const ScreenTab = createTabNavigator({
        Home:{
            screen:Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '主页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = { focused }
                        normalImage = { require('../../src/images/tab/tab-home-1.png') }
                        selectedImage = { require('../../src/images/tab/tab-home-2.png') }
                    />
                )
            })
        },
        Shop:{
            screen:Shop,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '商家',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = { focused }
                        normalImage = { require('../../src/images/tab/tab-shop-1.png') }
                        selectedImage = { require('../../src/images/tab/tab-shop-2.png') }
                    />
                )
            })
        },
        Mine:{
            screen:Mine,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = { focused }
                        normalImage = { require('../../src/images/tab/tab-main-1.png') }
                        selectedImage = { require('../../src/images/tab/tab-main-2.png') }
                    />
                )
            })
        },
        More:{
            screen:More,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '更多',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused = { focused }
                        normalImage = { require('../../src/images/tab/tab-more-1.png') }
                        selectedImage = { require('../../src/images/tab/tab-more-2.png') }
                    />
                )
            })
        }
    },
    {
        // tabBarPosition: 'bottom',//位置
        // tabBarOptions: {
        //     showIcon: true,//是否显示图标！！！！！！！
            // style: {
            //     height: 45,//底部导航的宽度
            //     backgroundColor: '#211305',//底部导航的颜色
            // },
            // labelStyle: {
            //     fontSize: 12,//字体大小
            //     marginTop: -2,//字体距离图标大小
            // },

        // }
    }
);

const myNavigator=createStackNavigator(
    {
        TabNav:{
            screen:ScreenTab,
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