/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import App_nav from './App_nav';

// AppRegistry.registerComponent(appName, () => App_nav);

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
// import App from './App';
import App_nav from './App_nav';
import {name as appName} from './app.json';
import configureStore from './Redux/store';
import feed from './feed';

const store = configureStore();

// const RNRedux = () => (
//   <Provider store={store}>
//     <App_nav />
//   </Provider>
// );

AppRegistry.registerComponent(appName, () => feed);
