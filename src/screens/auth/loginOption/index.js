import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from '../../../componrnts';
import Images from '../../../constants';

const LoginOption = props => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    return () => {
      checkJourney();
    };
  }, []);

  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        setShow(true);
      } else {
        setShow(false);
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.main}>
        {/* <StatusBar animated={true} backgroundColor="#000" /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Header
              show={show}
              iconName="arrowleft"
              header2
              OnPress={() => props.navigation.replace('Welcome')}
            />

            <View style={{width: '90%', alignSelf: 'center'}}>
              <Text style={styles.headtext}>Welcome Back, {'\n'} Erin</Text>
              <Text
                style={{
                  marginTop: 20,
                  color: '#1C5C2E',
                  fontSize: 17,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Let's Get You Setup With An Account
              </Text>
              <View style={[styles.input, {marginTop: 5, paddingRight: 20}]}>
                <Image
                  source={Images.Icons.bluee}
                  style={{width: 40, height: 40}}
                />
                <TouchableOpacity
                  style={{paddingLeft: 20, marginTop: -7}}
                  onPress={() => props.navigation.navigate('login')}>
                  <Text
                    style={{
                      marginTop: 15,
                      textAlign: 'center',
                      fontFamily: 'BrandonGrotesque-Medium',
                      color: '#030303',
                    }}>
                    Sign Up With Email
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{marginTop: 40, marginVertical: 20}}
                onPress={() => {
                  props.navigation.navigate('signup', {
                    showVerifyScreen: false,
                  });
                }}>
                <Text
                  style={{
                    marginTop: 25,
                    color: '#1C5C2E',
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: 'BrandonGrotesque-Medium',
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  input: {
    width: '100%',
    marginTop: 100,
    flexDirection: 'row',
    paddingLeft: 40,
    alignSelf: 'center',

    // justifyContent: 'space-around',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    // marginVertical: 40,
    borderRadius: 15,
  },
  headtext: {
    marginTop: 40,
    color: '#1C5C2E',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 42,
    fontFamily: 'BrandonGrotesque-Bold',
  },
});

export default LoginOption;
