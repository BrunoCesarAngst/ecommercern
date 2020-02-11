import React from 'react';

import { connect, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import color from '../../stylesGlobal/colors';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon
            name="shopping-basket"
            color={color.headerFontColor}
            size={24}
          />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
