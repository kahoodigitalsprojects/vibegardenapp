import React from 'react';
import MyStack from './src/navigation/Stack';
import BloomsCheck from './src/screens/Homes/bloomsCheck';
import CancelSubscription from './src/screens/Homes/cancelSubsceiption';
import PaymentMethod from './src/screens/Homes/paymentmethode';
import {MenuProvider} from 'react-native-popup-menu';

const App = props => {
 return (
    <MenuProvider>
      <MyStack {...props} />
    </MenuProvider>
  );
 }

export default App;
