import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/auth/Splash/index';
import Welcome from '../../screens/auth/Welcome';
import Login from '../../screens/auth/Login';
import Mytabs from '../TabNavigation';
import NameScreen from '../../screens/auth/NameScreen';
import Spalsh2 from '../../screens/auth/Splah2';
import SignUp from '../../screens/auth/singup';
import Verify from '../../screens/auth/verification';
import Journey from '../../screens/Homes/journey';
import Notification from '../../screens/Homes/notification';
import Meet from '../../screens/Homes/meet';
import Home from '../../screens/Homes/home/index';
import ChuchuasDetails from '../../screens/Homes/ChuchuhuasDetails';
import FressBlooms from '../../screens/Homes/FreshBlooms';
import GroundWork from '../../screens/Homes/Groundwork';
import Me from '../../screens/Homes/ME';
import Tools from '../../screens/Homes/Tools';
import Result from '../../screens/Homes/result';
import MeetScreen2 from '../../screens/Homes/meetScreen2';
import BlueLotus from '../../screens/Homes/BlueLotus';
import LoginOption from '../../screens/auth/loginOption';
import Registerd from '../../screens/auth/registered';
import forgetPassword from '../../screens/auth/forgotPassword';
import Search from '../../screens/Homes/search';
import Search2 from '../../screens/Homes/search2';
import Search3 from '../../screens/Homes/Search3';
import Question from '../../screens/Homes/Question';
import Question2 from '../../screens/Homes/question2';
import Resonance from '../../screens/Homes/Resonance';
import Question3 from '../../screens/Homes/question3';
import Question4 from '../../screens/Homes/question4';
import Settings from '../../screens/Homes/settings';
import BloomsCheck from '../../screens/Homes/bloomsCheck';
import BigBlooms from '../../screens/Homes/BigBlooms';
import {StoryData} from '../../componrnts';
import Star from '../../screens/Homes/star';
import Packages from '../../screens/Homes/packages';
import ManageSubscription from '../../screens/Homes/manageSubscription';
import NotRegisterd from '../../screens/auth/notregistered';
import Video from '../../screens/Homes/video';
import EmailNotification from '../../screens/Homes/emailNotification';
import Pushnotification from '../../screens/Homes/pushnotification';
import EditScreen from '../../screens/auth/editScreen';
import Contactus from '../../screens/Homes/contactus';
import PrivacyPolicy from '../../screens/Homes/privacyPolicy';
import Story1 from '../../screens/Homes/Story1';
import Buddhisim from '../../screens/Homes/Budhisim';
import PaymentMethod from '../../screens/Homes/paymentmethode';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash2"
        component={Spalsh2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tools"
        component={Tools}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="namescreen"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="verify"
        component={Verify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginoption"
        component={LoginOption}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="registerd"
        component={Registerd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgerpsaaword"
        component={forgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotRegisterd"
        component={NotRegisterd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailNotification"
        component={EmailNotification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pushnotification"
        component={Pushnotification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Story1"
        component={Story1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tools"
        component={Tools}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="journey"
        component={Journey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="meet"
        component={Meet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chuchuhuasDetails"
        component={ChuchuasDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FressBlooms"
        component={FressBlooms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroundWork"
        component={GroundWork}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Stack.Screen name="me" component={Me} options={{headerShown: false}} />
      <Stack.Screen
        name="MeetScreen2"
        component={MeetScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bluelotus"
        component={BlueLotus}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search2"
        component={Search2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search3"
        component={Search3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="resonance"
        component={Resonance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="question"
        component={Question}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="question2"
        component={Question2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="question3"
        component={Question3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="question4"
        component={Question4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BloomsCheck"
        component={BloomsCheck}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bigblooms"
        component={BigBlooms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="star"
        component={Star}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Packges"
        component={Packages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManageSubscription"
        component={ManageSubscription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contactus"
        component={Contactus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Buddhisim"
        component={Buddhisim}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mytabs"
          component={Mytabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
