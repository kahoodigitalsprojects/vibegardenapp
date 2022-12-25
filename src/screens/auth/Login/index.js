import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Appearance,
} from 'react-native';
import { Header, Pinkbtn } from '../../../componrnts';
import Images from '../../../constants';
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Login = ({ route, navigation }) => {
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(true);
  const [message, setMessage] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    Orientation.unlockAllOrientations();
    checkJourney();
  }, [isFocused]);


  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        return;
      } else {
        await AsyncStorage.setItem('journeyCompleted', 'DONE');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const registerd1 = route.params?.registerd1 || null;
  // console.log(colorScheme);
  return (
    <SafeAreaView style={styles.imageContainer}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.screenHeader}>
          <Header
            iconName="arrowleft"
            header2
            OnPress={() => navigation.navigate('loginoption')} />
        </View>
        <View style={styles.screenBody}>
          <View style={styles.logo} >
            <View style={{ width: 110, height: 120 }}>
              <Image source={Images.Logos.logo1} resizeMode="contain"
                style={{ width: '100%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Medium',
                marginTop: 17,
              }}>
              Login With Email
            </Text>
            <View style={{ marginTop: 40 }}>
              <TouchableOpacity
                onPress={() => setState(!state)}
                style={{ borderBottomWidth: 1, borderColor: '#75997E' }}>
                {state ? (
                  <View>
                    <Text
                      style={{
                        color: '#1C5C2E',
                        fontSize: 14,
                        // fontWeight: '400',
                        // marginVertical: 15,
                        // fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      davidmichael.198@gmail.com
                    </Text>
                  </View>
                ) : (
                  <View style={{}}>
                    <Text
                      style={{
                        color: '#1C5C2E',
                        fontSize: 14,

                        // fontWeight: '400',
                        // marginVertical: 15,
                        // fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      Email Adddress
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setState1(!state1)}
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#75997E',
                  marginTop: 80,
                }}>
                {state1 ? (
                  <View>
                    <Text
                      style={{
                        color: '#1C5C2E',
                        opacity: 0.65,
                        fontSize: 14,
                        // fontWeight: '400',
                        // marginVertical: 15,
                        // fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      Password
                    </Text>
                  </View>
                ) : (
                  <View style={{}}>
                    <Text
                      style={{
                        color: '#1C5C2E',
                        fontSize: 14,
                        // fontWeight: '400',
                        // marginVertical: 15,
                        // fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      **********
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('forgerpsaaword')}>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#1C5C2E',
                  fontSize: 14,
                  marginTop: 5,
                  fontFamily: 'BrandonGrotesque-Bold',
                  marginTop: 10,
                }}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{}}>
          <Pinkbtn

            shadow="'#CD258D'"
            onPress={() => {
              {
                registerd1
                  ? navigation.replace(
                    'Mytabs',
                    { screen: 'Home' },
                    {
                      itemId: 86,
                    },
                  )
                  : navigation.navigate(
                    'Auth',
                    { screen: 'NotRegisterd' },
                    {
                      itemId: 86,
                    },
                  );
              }
            }}
            width={'60%'}
            btntxt="Continue"
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            color: '#1C5C2E',
            fontSize: 18,
            fontWeight: '500',
            // fontFamily: 'BrandonGrotesque-Regular',
          }}>
          Or
        </Text>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            navigation.navigate('signup', {
              registerd1: () => navigation.navigate('signup'),
              itemId: 86,
              registerd2: () =>
                navigation.replace('Mytabs', { Screen: 'Home' }),
              otherParam: 'anything you want here',
            });
          }}>
          <Text
            style={{
              textAlign: 'center',

              color: '#1C5C2E',
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            Don't have an account?
            <Text
              style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },
  screenHeader: {
    width: '90%',
    // height: 150,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenBody: {
    width: '90%',
    alignSelf: 'center',
  },
  logo: {
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,

  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#ffff'
    // height: 300,
    // paddingTop: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Login;
