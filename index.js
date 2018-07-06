import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
//隐藏黄色的警告，最后一个Method警告自己加的
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Method']);
AppRegistry.registerComponent('XMGBuy', () => App);
