import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import GroundWork from '../screens/Homes/Groundwork';
import Video from '../screens/Homes/video';
import Buddhisim from '../screens/Homes/Budhisim';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';

export default function GroundworkStackScreen() {
  const GroundworkStack = createNativeStackNavigator();

  return (
    <GroundworkStack.Navigator
      initialRouteName="Groundworkscreen"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <GroundworkStack.Screen
        name="Groundworkscreen"
        component={GroundWork}
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
