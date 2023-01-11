import React, {useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Platform, Text, StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import RootStack from './src/navigation/RootStack';
import {enableScreens} from 'react-native-screens';
import MyStatusBar from './src/componrnts/statusBar';
import DeviceInfo from 'react-native-device-info';
let hasNotch = DeviceInfo.hasNotch();
const App = props => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, []);
  useEffect(() => {
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MenuProvider>
        <MyStatusBar
          backgroundColor={hasNotch ? 'transparent' : '#000'}
          barStyle={hasNotch ? 'dark-content' : 'light-content'}
        />
        <RootStack />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
