import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { StatusBar } from 'react-native';

import store from './store';

import color from './stylesGlobal/colors';

import Routes from './Routes';

import ServiceOfNavigation from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={color.dark} />
      <Routes
        ref={navigatorOption =>
          ServiceOfNavigation.setNavigator(navigatorOption)
        }
      />
    </Provider>
  );
}
