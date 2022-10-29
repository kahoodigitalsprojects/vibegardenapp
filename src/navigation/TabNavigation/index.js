import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../constants';
import Welcome from '../../screens/auth/Welcome';
import Home from '../../screens/Homes/home';
import Notification from '../../screens/Homes/notification';
import Tools from '../../screens/Homes/Tools';

const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Garden',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="tools"
        component={Tools}
        options={{
          headerShown: false,
          tabBarLabel: 'Tools',
          tabBarIcon: ({color, size}) => (
            <View style={{marginVertical: 10}}>
              <Image source={Images.Logos.hands} style={{}} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: 'Groundwork',
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <View>
              <View style={{marginVertical: 10}}>
                <Image source={Images.Logos.hands} style={{}} />
              </View>
            </View>
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}
export default Mytabs;
