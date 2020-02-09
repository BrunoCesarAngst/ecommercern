import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import Routes from './Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
