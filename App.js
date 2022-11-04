import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyStack from './src/navigation/Stack';
import Login from './src/screens/auth/Login';
import BlueLotus from './src/screens/Homes/BlueLotus';
import GroundWork from './src/screens/Homes/Groundwork';
import Notification from './src/screens/Homes/notification';
import Story1 from './src/screens/Homes/Story1';
import Terms from './src/screens/Homes/Terms';
import Tools from './src/screens/Homes/Tools';
import PrivacyPolicy from './src/screens/Homes/privacyPolicy';
import ToolsTry from './src/screens/Homes/ToolsTry';
import FressBlooms from './src/screens/Homes/FreshBlooms';
import Journey from './src/screens/Homes/journey';
import Meet from './src/screens/Homes/meet';
import LoginOption from './src/screens/auth/loginOption';
import ChuchuasDetails from './src/screens/Homes/ChuchuhuasDetails';
import MeetScreen2 from './src/screens/Homes/meetScreen2';

const App = props => {
  return <MyStack {...props} />;
  // return <MeetScreen2 />;
};

export default App;
