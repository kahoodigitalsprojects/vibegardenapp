import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Notification from '../screens/Homes/notification';

import FressBlooms from '../screens/Homes/FreshBlooms';
import Me from '../screens/Homes/ME';

import Settings from '../screens/Homes/settings';
import BloomsCheck from '../screens/Homes/bloomsCheck';
import BigBlooms from '../screens/Homes/BigBlooms';
import Star from '../screens/Homes/star';
import Packages from '../screens/Homes/packages';
import ManageSubscription from '../screens/Homes/manageSubscription';
import EditScreen from '../screens/auth/editScreen';
import Contactus from '../screens/Homes/contactus';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';
import Result from '../screens/Homes/result';
import EmailNotification from '../screens/Homes/emailNotification';
import Pushnotification from '../screens/Homes/pushnotification';
import PrivacyPolicy from '../screens/Homes/privacyPolicy';
export default function MeStackScreen() {
  const MeStack = createNativeStackNavigator();

  return (
    <MeStack.Navigator
      initialRouteName="me"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <MeStack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />

    

      <MeStack.Screen
        name="FressBlooms"
        component={FressBlooms}
        options={{headerShown: false}}
      />
      <MeStack.Screen name="me" component={Me} options={{headerShown: false}} />

      <MeStack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="BloomsCheck"
        component={BloomsCheck}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="Bigblooms"
        component={BigBlooms}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="star"
        component={Star}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="Packges"
        component={Packages}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="ManageSubscription"
        component={ManageSubscription}
        options={{headerShown: false}}
      />

      <MeStack.Screen
        name="Contactus"
        component={Contactus}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="CancelSubscription"
        component={CancelSubscription}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="EmailNotification"
        component={EmailNotification}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="Pushnotification"
        component={Pushnotification}
        options={{headerShown: false}}
      />
      <MeStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
    </MeStack.Navigator>
  );
}
