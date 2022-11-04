import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Homes/home/index';
import Splash from '../../screens/auth/Splash/index';
import Welcome from '../../screens/auth/Welcome';
import Login from '../../screens/auth/Login';
import Mytabs from '../TabNavigation';
import Notification from '../../screens/Homes/notification';
import Tools from '../../screens/Homes/Tools';
import NameScreen from '../../screens/auth/NameScreen';
import Spalsh2 from '../../screens/auth/Splah2';
import SignUp from '../../screens/auth/singup';
import Verify from '../../screens/auth/verification';
import Journey from '../../screens/Homes/journey';
import Meet from '../../screens/Homes/meet';
import ChuchuasDetails from '../../screens/Homes/ChuchuhuasDetails';
import FressBlooms from '../../screens/Homes/FreshBlooms';
import GroundWork from '../../screens/Homes/Groundwork';
import Me from '../../screens/Homes/ME';
import Result from '../../screens/Homes/result';
import MeetScreen2 from '../../screens/Homes/meetScreen2';
import BlueLotus from '../../screens/Homes/BlueLotus';
import LoginOption from '../../screens/auth/loginOption';
import Story1 from '../../screens/Homes/Story1';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
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
        name="Tools"
        component={Tools}
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
    </Stack.Navigator>
  );
};
export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tools"
        component={Tools}
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
        name="FressBlooms"
        component={FressBlooms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroundWork"
        component={GroundWork}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Stack.Screen name="me" component={Me} options={{headerShown: false}} />
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
        name="story1"
        component={Story1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mytabs"
          component={Mytabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
