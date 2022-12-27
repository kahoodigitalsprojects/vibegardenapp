import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Journey from '../screens/Homes/journey';
import Meet from '../screens/Homes/meet';
import ChuchuasDetails from '../screens/Homes/ChuchuhuasDetails';
import GroundWork from '../screens/Homes/Groundwork';
import MeetScreen2 from '../screens/Homes/meetScreen2';
import BlueLotus from '../screens/Homes/BlueLotus';
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
        name="journey"
        component={Journey}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="meet"
        component={Meet}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="chuchuhuasDetails"
        component={ChuchuasDetails}
        options={{headerShown: false}}
      />

      <GroundworkStack.Screen
        name="GroundWork"
        component={GroundWork}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="MeetScreen2"
        component={MeetScreen2}
        options={{headerShown: false}}
      />
      <GroundworkStack.Screen
        name="Bluelotus"
        component={BlueLotus}
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
