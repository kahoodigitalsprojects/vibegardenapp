import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform} from 'react-native';
import Images from '../constants';
import HomeStackScreen from './HomeStack';
import GroundworkStackScreen from './GroundworkStack';
import ToolsStackScreen from './ToolsStack';
import MeStackScreen from './MeStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1C5C2E',
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={HomeStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (focusedRouteName === 'Search') {
            return {
              tabBarStyle: {
                display: 'none',
                bottom: -200,
                height: 0,
              },
            };
          }
          if (focusedRouteName === 'Search2') {
            return {
              tabBarStyle: {
                display: 'none',
                bottom: -200,
                height: 0,
              },
            };
          }
          return {
            tabBarStyle: {
              display: 'flex',
              height: 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarLabel: 'Garden',
            tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={Images.Logos.greenlogo} />
              ) : (
                <Image source={Images.Logos.greylog} />
              ),
          };
        }}
      />

      <Tab.Screen
        name="tools"
        component={ToolsStackScreen}
        options={{
          tabBarLabel: 'Tools',
          tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Logos.hands} />
            ) : (
              <Image source={Images.Logos.layer2} />
            ),
        }}
      />

      <Tab.Screen
        name="GroundWork"
        component={GroundworkStackScreen}
        options={{
          tabBarLabel: 'Groundwork',
          tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Icons.leaf} />
            ) : (
              <Image source={Images.Logos.layer} />
            ),
        }}
      />
      <Tab.Screen
        name="me"
        component={MeStackScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Icons.small} />
            ) : (
              <Image source={Images.Icons.small} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
