import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
//���ػ�ɫ�ľ��棬���һ��Method�����Լ��ӵ�
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Method']);
AppRegistry.registerComponent('XMGBuy', () => App);
