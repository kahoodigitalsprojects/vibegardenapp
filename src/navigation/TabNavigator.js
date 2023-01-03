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
        unmountOnBlur: true,
        headerShown: false,
        tabBarActiveTintColor: '#1C5C2E',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 85 : 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={HomeStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
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
              height: Platform.OS === 'ios' ? 85 : 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarLabel: 'Garden',
            tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
            tabBarIcon: ({focused}) =>
              focused ? (
                <>{Images.svgs.gardenDark}</>
              ) : (
                <>{Images.svgs.gardenLight}</>
              ),
          };
        }}
      />

      <Tab.Screen
        name="tools"
        component={ToolsStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
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
              height: Platform.OS === 'ios' ? 85 : 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarLabel: 'Tools',
            tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
            tabBarIcon: ({focused}) =>
              focused ? (
                <>{Images.svgs.toolsDark}</>
              ) : (
                <>{Images.svgs.toolsLight}</>
              ),
          };
        }}
      />

      <Tab.Screen
        name="GroundWork"
        component={GroundworkStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
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
              height: Platform.OS === 'ios' ? 85 : 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarLabel: 'Groundwork',
            tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
            tabBarIcon: ({focused}) =>
              focused ? (
                <>{Images.svgs.groundworkDark}</>
              ) : (
                <>{Images.svgs.groundworkLight}</>
              ),
          };
        }}
      />
      <Tab.Screen
        name="me"
        component={MeStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
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
              height: Platform.OS === 'ios' ? 85 : 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },

            tabBarLabel: 'Me',
            tabBarItemStyle: {paddingBottom: Platform.OS === 'ios' ? 0 : 10},
            tabBarIcon: () => (
              <Image
                source={Images.Icons.meIcon}
                resizeMode="contain"
                style={{height: 34, width: 34}}
              />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

const hiddenTabrBarScreens = [
  'Video',
  'Buddhisim',
  'question4',
  'question3',
  'question2',
  'question',
  'resonance',
  'star',
  'Bigblooms',
  'BloomsCheck',
  'Result',
  'FressBlooms',
  'Packges',
  'PrivacyPolicy',
  'CancelSubscription',
  'PaymentMethod',
  'Contactus',
  'ManageSubscription',
  'EditScreen',
  'Pushnotification',
  'EmailNotification',
  'notification',
  'settings',
  'Search',
  'Search2',
  'Search3',
];
