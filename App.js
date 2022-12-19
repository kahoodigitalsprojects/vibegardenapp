import React from 'react';
import MyStack from './src/navigation/Stack';
import BloomsCheck from './src/screens/Homes/bloomsCheck';
import CancelSubscription from './src/screens/Homes/cancelSubsceiption';
import Home from './src/screens/Homes/home';
import PaymentMethod from './src/screens/Homes/paymentmethode';

const App = props => {
  return <MyStack {...props} />;
  // return <Home />;
};

export default App;
