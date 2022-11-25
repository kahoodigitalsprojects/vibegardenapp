import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyStack from './src/navigation/Stack';
import Login from './src/screens/auth/Login';
import BlueLotus from './src/screens/Homes/BlueLotus';
import GroundWork from './src/screens/Homes/Groundwork';
import Notification from './src/screens/Homes/notification';
import Story1 from './src/screens/Homes/Story1';
import Terms from './src/screens/Homes/Terms';
import Tools from './src/screens/Homes/Tools';
import PrivacyPolicy from './src/screens/Homes/privacyPolicy';
import ToolsTry from './src/screens/Homes/ToolsTry';
import FressBlooms from './src/screens/Homes/FreshBlooms';
import Journey from './src/screens/Homes/journey';
import Meet from './src/screens/Homes/meet';
import LoginOption from './src/screens/auth/loginOption';
import ChuchuasDetails from './src/screens/Homes/ChuchuhuasDetails';
import MeetScreen2 from './src/screens/Homes/meetScreen2';

import Resonance from './src/screens/Homes/Resonance';
import Search3 from './src/screens/Homes/Search3';
import Search2 from './src/screens/Homes/search2';
import Question from './src/screens/Homes/Question';
import BigBlooms from './src/screens/Homes/BigBlooms';
import Contactus from './src/screens/Homes/contactus';
import Pushnotification from './src/screens/Homes/pushnotification';
import EmailNotification from './src/screens/Homes/emailNotification';
import Packages from './src/screens/Homes/packages';
import ManageSubscription from './src/screens/Homes/manageSubscription';
import Search from './src/screens/Homes/search';
import Home from './src/screens/Homes/home';
import Video from './src/screens/Homes/video';
import Question2 from './src/screens/Homes/question2';
import Buddhisim from './src/screens/Budhisim';
import Settings from './src/screens/Homes/settings';

const App = props => {
  return <MyStack {...props} />;
  // return <Search2 />;
};

export default App;
