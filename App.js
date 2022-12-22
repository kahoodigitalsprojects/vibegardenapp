import React, {useEffect} from 'react';
import MyStack from './src/navigation/Stack';
import {Text} from 'react-native';
import BloomsCheck from './src/screens/Homes/bloomsCheck';
import CancelSubscription from './src/screens/Homes/cancelSubsceiption';
import GroundWork from './src/screens/Homes/Groundwork';
import Home from './src/screens/Homes/home';
import PaymentMethod from './src/screens/Homes/paymentmethode';
import Tools from './src/screens/Homes/Tools';
import Video from './src/screens/Homes/video';

const App = props => {
  {
    useEffect(() => {
      return () => {
        if (Text.defaultProps == null) Text.defaultProps = {};
        Text.defaultProps.allowFontScaling = false;
      };
    }, []);
  }
  return <MyStack {...props} />;
  // return <Video />;
};

export default App;
