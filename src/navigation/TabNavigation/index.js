import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../constants';
import Welcome from '../../screens/auth/Welcome';
import GroundWork from '../../screens/Homes/Groundwork';
import Home from '../../screens/Homes/home';
import Me from '../../screens/Homes/ME';
import Notification from '../../screens/Homes/notification';
import Tools from '../../screens/Homes/Tools';

const Tab = createBottomTabNavigator();
Mytabs = props => {
  return (
    <Tab.Navigator
      initialRouteName={props.fisrt}
      screenOptions={{
        tabBarActiveTintColor: '#1C5C2E',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Garden',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Logos.greenlogo} style={styles.activeImg} />
            ) : (
              <Image source={Images.Logos.greylog} style={styles.deActiveImg} />
            ),
        }}
      />

      <Tab.Screen
        name="tools"
        component={Tools}
        options={{
          headerShown: false,
          tabBarLabel: 'Tools',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Logos.hands} style={styles.activeImg} />
            ) : (
              <Image source={Images.Logos.layer2} style={styles.deActiveImg} />
            ),
        }}
      />

      <Tab.Screen
        name="Ground work"
        component={GroundWork}
        options={{
          tabBarActiveTintColor: '#1C5C2E',
          headerShown: false,
          tabBarLabel: 'Groundwork',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Icons.leaf} style={styles.activeImg} />
            ) : (
              <Image source={Images.Logos.layer} style={styles.deActiveImg} />
            ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          headerShown: false,
          tabBarLabel: 'Me',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.Icons.small} style={styles.activeImg} />
            ) : (
              <Image source={Images.Icons.small} style={styles.deActiveImg} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});
export default Mytabs;
