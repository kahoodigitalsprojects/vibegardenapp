import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {shadow} from 'react-native-paper';

const SignUp = ({route, navigation}) => {
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(true);
  const {showVerifyScreen} = route.params;
  return (
    <>
      <SafeAreaView style={styles.imageContainer}>
        <StatusBar animated={true} backgroundColor="#000" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.screenHeader}>
            <Header
              iconName="arrowleft"
              header2
              OnPress={() => navigation.replace('Welcome')}
            />
          </View>
          <View style={styles.screenBody}>
            <View>
              <Text
                style={[
                  styles.headtext,
                  {fontFamily: 'BrandonGrotesque-Bold'},
                ]}>
                You're so very welcome, {'\n'}
                Erin
              </Text>
              <Text
                style={{
                  // marginVertical: 10,
                  color: '#1C5C2E',
                  fontSize: 18,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Let's Get You Setup With An Account
              </Text>
            </View>
            <View style={styles.logo}>
              <View style={{width: 64, height: 65}}>
                <Image
                  source={Images.Logos.logo1}
                  resizeMode="contain"
                  style={{width: '100%'}}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={{marginTop: 50}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'BrandonGrotesque-Medium',
                    color: '#030303',
                  }}>
                  Sign Up With Email
                </Text>
              </View>
              <View style={{marginTop: 50}}>
                <View style={{}}>
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

                <View style={{marginVertical: 50}}>
                  <Pinkbtn
                    shadow={'#CD258D'}
                    onPress={() =>
                      showVerifyScreen
                        ? navigation.navigate('verify')
                        : navigation.navigate('registerd', {
                            registerd1: () => navigation.navigate('signup'),
                          })
                    }
                    width={'60%'}
                    btntxt="Continue"
                  />
                </View>
                <View
                  style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      // marginVertical: 20,
                    }}
                    onPress={() => {
                      navigation.navigate('loginoption');
                    }}>
                    <Text
                      style={{
                        color: '#1C5C2E',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'BrandonGrotesque-Medium',
                      }}>
                      Already have an account?
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                        }}>
                        Login
                      </Text>
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.replace('Story1', {
                        param: {istrue: true},
                      });
                    }}
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      // marginVertical: 20,
                    }}>
                    <View style={styles.blue}>
                      <Icon name="play" color={'#fff'} size={12} />
                    </View>
                    <Text
                      style={{
                        marginTop: 19,
                        color: '#1492E6',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      Want to See How Works?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
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
  },
  inputContainer: {
    width: '100%',
    // height: 300,
    // paddingTop: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  headtext: {
    // marginTop: 17,
    color: '#1C5C2E',
    fontSize: 25,

    fontFamily: 'BrandonGrotesque-Regular',
  },
  blue: {
    marginVertical: 10,
    marginTop: 22,
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#1492E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
