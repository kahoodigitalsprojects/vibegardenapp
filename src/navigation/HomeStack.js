import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import Meet from '../screens/Homes/meet';
import Home from '../screens/Homes/home/index';
import ChuchuasDetails from '../screens/Homes/ChuchuhuasDetails';
import MeetScreen2 from '../screens/Homes/meetScreen2';
import BlueLotus from '../screens/Homes/BlueLotus';
import Search from '../screens/Homes/search';
import Search2 from '../screens/Homes/search2';
import Search3 from '../screens/Homes/Search3';
import Packages from '../screens/Homes/packages';
import EditScreen from '../screens/auth/editScreen';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';

export default function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Search2"
        component={Search2}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Search3"
        component={Search3}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Packges"
        component={Packages}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CancelSubscription"
        component={CancelSubscription}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}
