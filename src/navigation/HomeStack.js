import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Homes/home/index';
import EditScreen from '../screens/auth/editScreen';

export default function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="EditScreen" component={EditScreen} />
    </HomeStack.Navigator>
  );
}
