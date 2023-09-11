import {Icon} from '@rneui/themed';
import React from 'react';
import {colors} from '../../utils/theme';
import {horizontalScale} from '../../utils/scaling';
import {Text} from 'react-native';
import {FAVORITE_SCREEN, HOME_SCREEN} from '../navigation-routes';
import {styles} from './styles';

type TabComponentProps = {route: any; focused: boolean};

const getIconName = (route: any, focused: boolean) => {
  let icon = '';

  if (route.name === HOME_SCREEN) {
    icon = focused ? 'home-filled' : 'home';
  } else if (route.name === FAVORITE_SCREEN) {
    icon = focused ? 'star-fill' : 'star';
  }
  return icon;
};

const TabIcon = ({route, focused}: TabComponentProps) => {
  return (
    <Icon
      name={getIconName(route, focused)}
      type={
        getIconName(route, focused) === 'home-filled' ? 'material' : 'octicon'
      }
      color={colors.primary}
      size={horizontalScale(20)}
    />
  );
};

const TabBarLabel = ({route, focused}: TabComponentProps) => (
  <Text style={focused ? styles.tabLabelActive : styles.tabLabel}>
    {route.name === HOME_SCREEN ? 'Home' : 'Favorite'}
  </Text>
);

export {TabIcon, TabBarLabel};
