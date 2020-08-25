/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const _XHR = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;
XMLHttpRequest = _XHR;
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
AppRegistry.registerComponent(appName, () => App);
