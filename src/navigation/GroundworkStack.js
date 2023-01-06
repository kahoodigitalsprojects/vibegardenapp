import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import GroundWork from '../screens/Homes/Groundwork';
import Video from '../screens/Homes/video';
import Buddhisim from '../screens/Homes/Budhisim';

export default function GroundworkStackScreen() {
  const GroundworkStack = createNativeStackNavigator();

  return (
    <GroundworkStack.Navigator
      initialRouteName="Groundworkscreen"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}>
      <GroundworkStack.Screen name="Groundworkscreen" component={GroundWork} />
      <GroundworkStack.Screen name="Video" component={Video} />
      <GroundworkStack.Screen name="Buddhisim" component={Buddhisim} />
    </GroundworkStack.Navigator>
  );
}
