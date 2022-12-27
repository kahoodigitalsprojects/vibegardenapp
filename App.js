import React, {useEffect} from 'react';
import MyStack from './src/navigation/Stack';
import {Text} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import RootStack from './src/navigation/RootStack';
const App = props => {
  {
    useEffect(() => {
      return () => {
        if (Text.defaultProps == null) Text.defaultProps = {};
        Text.defaultProps.allowFontScaling = false;
      };
    }, []);
  }
  return (
    <MenuProvider>
      {/* <MyStack {...props} /> */}
      <RootStack />
    </MenuProvider>
  );
};

export default App;
