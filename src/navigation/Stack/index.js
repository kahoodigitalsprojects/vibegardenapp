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
