import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

import color from './stylesGlobal/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        header: navigation => <Header {...navigation} />,
        cardStyle: {
          backgroundColor: color.dark,
        },
      },
    }
  )
);

export default Routes;
