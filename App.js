import React, { useEffect } from 'react';
import MyStack from './src/navigation/Stack';
import { Text } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
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
      <MyStack {...props} />
    </MenuProvider>
  );

}

// return <Video />;


export default App;
