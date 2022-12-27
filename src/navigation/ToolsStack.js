import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Journey from '../screens/Homes/journey';
import Meet from '../screens/Homes/meet';
import ChuchuasDetails from '../screens/Homes/ChuchuhuasDetails';
import Tools from '../screens/Homes/Tools';
import Result from '../screens/Homes/result';
import MeetScreen2 from '../screens/Homes/meetScreen2';
import BlueLotus from '../screens/Homes/BlueLotus';
import Question from '../screens/Homes/Question';
import Question2 from '../screens/Homes/question2';
import Resonance from '../screens/Homes/Resonance';
import Question3 from '../screens/Homes/question3';
import Question4 from '../screens/Homes/question4';
import Packages from '../screens/Homes/packages';
import EditScreen from '../screens/auth/editScreen';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';

export default function ToolsStackScreen() {
  const ToolsStack = createNativeStackNavigator();

  return (
    <ToolsStack.Navigator
      initialRouteName="tools"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <ToolsStack.Screen
        name="tools"
        component={Tools}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="journey"
        component={Journey}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="meet"
        component={Meet}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="chuchuhuasDetails"
        component={ChuchuasDetails}
        options={{headerShown: false}}
      />

      <ToolsStack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />

      <ToolsStack.Screen
        name="MeetScreen2"
        component={MeetScreen2}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="Bluelotus"
        component={BlueLotus}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="resonance"
        component={Resonance}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="question"
        component={Question}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="question2"
        component={Question2}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="question3"
        component={Question3}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="question4"
        component={Question4}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="Packges"
        component={Packages}
        options={{headerShown: false}}
      />

      <ToolsStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <ToolsStack.Screen
        name="CancelSubscription"
        component={CancelSubscription}
        options={{headerShown: false}}
      />
    </ToolsStack.Navigator>
  );
}
