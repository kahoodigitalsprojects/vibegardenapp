import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyStack from './src/navigation/Stack';
import Notification from './src/screens/Homes/notification';
import Tools from './src/screens/Homes/Tools';

const App = props => {
  return <MyStack {...props} />;
  // return <Tools />;
};

export default App;
