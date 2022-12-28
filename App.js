import React, {useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import RootStack from './src/navigation/RootStack';
const App = props => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MenuProvider>
        <RootStack />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
