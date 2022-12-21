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

const SignUp = ({route, navigation}) => {
  const registerd2 = route.params?.registerd2 || null;
  const [state, setState] = useState(true);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={{marginTop: 10}}>
            <Header
              iconName="arrowleft"
              header2
              OnPress={() => navigation.replace('Welcome')}
            />
          </View>
          <Text
            style={[styles.headtext, {fontFamily: 'BrandonGrotesque-Bold'}]}>
            You're so very welcome,
            {'\n'} Erin
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: '#1C5C2E',
              fontSize: 18,
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            Let's Get You Setup With An Account
          </Text>
          <View style={{marginVertical: 20}}>
            <Image
              source={Images.Logos.logo1}
              style={{width: 64, height: 65}}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, fontFamily: 'BrandonGrotesque-Medium'}}>
              Sign Up With Email
            </Text>

            <View style={{marginTop: 30}}>
              <TouchableOpacity
                onPress={() => setState(!state)}
                style={{borderBottomWidth: 1, borderColor: '#75997E'}}>
                {state === true ? (
                  <View>
                    <Text
                      style={{
                        color: '#1C5C2E',
                        fontSize: 14,
                        // fontWeight: '500',
                        marginVertical: 15,
                        // fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      davidmichael.198@gmail.com
                    </Text>
                  </View>
                ) : (
                  <View style={{}}>
                    <TextInput
                      placeholder="Email Adddress"
                      placeholderTextColor="#1C5C2E"
                      style={{opacity: 0.8}}
                    />
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setState(!state)}
                style={{borderBottomWidth: 1, borderColor: '#75997E'}}>
                <View style={{}}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#1C5C2E"
                    style={{opacity: 0.8}}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 50}}>
              <Pinkbtn
                onPress={() => {
                  registerd2
                    ? navigation.navigate('verify', {})
                    : navigation.navigate('registerd', {
                        registerd1: () => navigation.navigate('signup'),
                        itemId: 86,
                        otherParam: 'anything you want here',
                      });
                }}
                width={'60%'}
                btntxt="Continue"
              />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('loginoption');
                }}>
                <Text
                  style={{
                    marginTop: 35,
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
                    marginTop: 20,
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  input: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    borderBottomWidth: 0.8,
    borderColor: '#1C5C2E',
    opacity: 0.6,
    marginTop: 20,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  headtext: {
    marginTop: 20,
    color: '#1C5C2E',
    fontSize: 25,
    fontWeight: '600',

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
