import React, {useEffect} from 'react';
import MyStack from './src/navigation/Stack';
<<<<<<< HEAD
import {Text} from 'react-native';
import BloomsCheck from './src/screens/Homes/bloomsCheck';
import CancelSubscription from './src/screens/Homes/cancelSubsceiption';
import GroundWork from './src/screens/Homes/Groundwork';
import Home from './src/screens/Homes/home';
import PaymentMethod from './src/screens/Homes/paymentmethode';
import Tools from './src/screens/Homes/Tools';
import Video from './src/screens/Homes/video';
=======
>>>>>>> 3c749e39f1db76297a1f2ef5b5c158d18a0f5f8d

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
