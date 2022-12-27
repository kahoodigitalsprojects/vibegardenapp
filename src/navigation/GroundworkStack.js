import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import GroundWork from '../screens/Homes/Groundwork';

import Packages from '../screens/Homes/packages';
import Video from '../screens/Homes/video';
import EditScreen from '../screens/auth/editScreen';
import Buddhisim from '../screens/Homes/Budhisim';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';

export default function GroundworkStackScreen() {
  const GroundworkStack = createNativeStackNavigator();

  return (
    <GroundworkStack.Navigator
      initialRouteName="GroundWork"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>


      <GroundworkStack.Screen
        name="GroundWork"
        component={GroundWork}
        options={{headerShown: false}}
      />

      <GroundworkStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="Packges"
        component={Packages}
        options={{headerShown: false}}
      />

      <GroundworkStack.Screen
        name="Video"
        component={Video}
        options={{headerShown: false}}
      />

      <GroundworkStack.Screen
        name="Buddhisim"
        component={Buddhisim}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="CancelSubscription"
        component={CancelSubscription}
        options={{headerShown: false}}
      />
    </GroundworkStack.Navigator>
  );
}
