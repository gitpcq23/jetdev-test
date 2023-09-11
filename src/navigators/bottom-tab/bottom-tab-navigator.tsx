import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../utils/theme';
import {Header} from '../../components';
import {TabScreenParamList} from '../navigation-routes';
import {styles} from './styles';
import {TabBarLabel, TabIcon} from './bottom-tab-component';
import {HomeScreen, FavoriteScreen} from '../../screens';

const Tab = createBottomTabNavigator<TabScreenParamList>();

export function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HOME_SCREEN"
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarAllowFontScaling: true,
        tabBarIcon: ({focused}) => <TabIcon focused={focused} route={route} />,
        headerShown: true,
        header: () => <Header />,
        tabBarLabel: ({focused}) => (
          <TabBarLabel focused={focused} route={route} />
        ),
        tabBarStyle: [styles.tabContainer],
        tabBarItemStyle: navigation.isFocused()
          ? styles.tabItemStyleActive
          : styles.tabItemStyle,
      })}>
      <Tab.Screen
        name="HOME_SCREEN"
        options={() => ({
          title: 'Home',
        })}
        component={HomeScreen}
      />
      <Tab.Screen
        name="FAVORITE_SCREEN"
        options={() => ({
          title: 'Favorite',
        })}
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
}
