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

const Login = ({route, navigation}) => {
  useEffect(() => {
    Orientation.unlockAllOrientations();
  }, []);
  const registerd1 = route.params?.registerd1 || null;
  // console.log(colorScheme);
  const [state, setState] = useState(true);
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
          <View style={{marginVertical: 20, marginTop: 40}}>
            <Image source={Images.Logos.logo1} style={{}} />
          </View>
          <View>
            <Text style={{fontSize: 18, fontFamily: 'Brandon_reg'}}>
              Login With Email
            </Text>
            <TouchableOpacity
              onPress={() => setState(!state)}
              style={{borderBottomWidth: 1, borderColor: '#1C5C2E'}}>
              {state === true ? (
                <View>
                  <Text
                    style={{
                      color: '#1C5C2E',
                      fontSize: 14,
                      fontWeight: '900',
                      marginVertical: 15,
                      fontFamily: 'Brandon_reg',
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
              style={{borderBottomWidth: 1, borderColor: '#1C5C2E'}}>
              <View style={{}}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#1C5C2E"
                  style={{opacity: 0.8}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('forgerpsaaword')}>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#1C5C2E',
                  fontSize: 14,
                  fontWeight: '900',
                  marginTop: 5,
                  fontFamily: 'Brandon_reg',
                  marginTop: 10,
                }}>
                Forget Password?
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
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
                marginVertical: 10,
                color: '#1C5C2E',
                fontSize: 18,
                fontWeight: '500',
                fontFamily: 'Brandon_reg',
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
                  marginVertical: 10,
                  color: '#1C5C2E',
                  fontSize: 18,
                  fontWeight: '500',
                  fontFamily: 'Brandon_reg',
                }}>
                Don't have an account?{' '}
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
    // justifyContent: 'space-between',
    borderBottomWidth: 0.8,
    borderColor: '#1C5C2E',
    opacity: 0.6,
    marginTop: 20,
  },
});

export default Login;
