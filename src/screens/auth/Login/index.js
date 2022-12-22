import React, {useState, useEffect} from 'react';
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
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
const Login = ({route, navigation}) => {
  const [state, setState] = useState(true);
<<<<<<< HEAD
  const [state1, setState1] = useState(true);
  const [message, setMessage] = useState('');
=======
>>>>>>> 3c749e39f1db76297a1f2ef5b5c158d18a0f5f8d
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View style={{width: '90%'}}>
          <View style={{width: '100%', marginTop: 10}}>
            <Header
              iconName="arrowleft"
              header2
              OnPress={() => navigation.navigate('loginoption')}
            />
          </View>
          <View style={{marginVertical: 20, marginTop: 60}}>
            <Image source={Images.Logos.logo1} style={{}} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Medium',
                marginTop: 17,
              }}>
              Login With Email
            </Text>
            <View style={{marginTop: 47}}>
              <TouchableOpacity
                onPress={() => setState(!state)}
                style={{borderBottomWidth: 1, borderColor: '#75997E'}}>
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
            <View style={{marginTop: 42}}>
              <Pinkbtn
                onPress={() => {
                  {
                    registerd1
                      ? navigation.replace(
                          'Mytabs',
                          {screen: 'Home'},
                          {
                            itemId: 86,
                          },
                        )
                      : navigation.navigate(
                          'Auth',
                          {screen: 'NotRegisterd'},
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
                    navigation.replace('Mytabs', {Screen: 'Home'}),
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',dlew
    borderBottomWidth: 0.8,
    borderColor: '#1C5C2E',
    opacity: 0.6,
    marginTop: 20,
  },
});

export default Login;
