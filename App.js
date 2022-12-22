import React, {useEffect} from 'react';
import MyStack from './src/navigation/Stack';
<<<<<<< HEAD
import BloomsCheck from './src/screens/Homes/bloomsCheck';
import CancelSubscription from './src/screens/Homes/cancelSubsceiption';
import PaymentMethod from './src/screens/Homes/paymentmethode';
import {MenuProvider} from 'react-native-popup-menu';

const App = props => {
 return (
=======
import {Text} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
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
>>>>>>> 54440a4c25999ce50254ac84b6cb91ebab562b7e
    <MenuProvider>
      <MyStack {...props} />
    </MenuProvider>
  );
<<<<<<< HEAD
 }
=======
  // return <Video />;
};
>>>>>>> 54440a4c25999ce50254ac84b6cb91ebab562b7e

export default App;
