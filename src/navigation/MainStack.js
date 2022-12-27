import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/auth/Splash/index';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import NameScreen from '../screens/auth/NameScreen';
import Spalsh2 from '../screens/auth/Splah2';
import SignUp from '../screens/auth/singup';
import Verify from '../screens/auth/verification';
import LoginOption from '../screens/auth/loginOption';
import Registerd from '../screens/auth/registered';
import forgetPassword from '../screens/auth/forgotPassword';
import NotRegisterd from '../screens/auth/notregistered';
import Journey from '../screens/Homes/journey';
import PrivacyPolicy from '../screens/Homes/privacyPolicy';
import Story1 from '../screens/Homes/Story1';
import TabNavigator from './TabNavigator';
import MeetScreen2 from '../screens/Homes/meetScreen2';
import BlueLotus from '../screens/Homes/BlueLotus';
import Meet from '../screens/Homes/meet';
import ChuchuasDetails from '../screens/Homes/ChuchuhuasDetails';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash2"
        component={Spalsh2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="namescreen"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="verify"
        component={Verify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginoption"
        component={LoginOption}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="registerd"
        component={Registerd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgerpsaaword"
        component={forgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotRegisterd"
        component={NotRegisterd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Story1"
        component={Story1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="journey"
        component={Journey}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="meet"
        component={Meet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chuchuhuasDetails"
        component={ChuchuasDetails}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MeetScreen2"
        component={MeetScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bluelotus"
        component={BlueLotus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
