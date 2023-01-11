import React, {useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Platform, Text, StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import RootStack from './src/navigation/RootStack';
import {enableScreens} from 'react-native-screens';
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
        <StatusBar
          barStyle="-content"
          hidden={false}
          backgroundColor="#000"
          translucent={true}
        />
        <RootStack />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
