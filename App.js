import React from 'react';
import MyStack from './src/navigation/Stack';
import BloomsCheck from './src/screens/Homes/bloomsCheck';
import PaymentMethod from './src/screens/Homes/paymentmethode';

const App = props => {
  return <MyStack {...props} />;
  // return <PaymentMethod />;
};

export default App;
