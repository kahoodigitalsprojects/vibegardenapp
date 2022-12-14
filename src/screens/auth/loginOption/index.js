import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../componrnts';
import Images from '../../../constants';

const LoginOption = props => {
  return (
    <SafeAreaView style={styles.main}>
      <Header
        iconName="arrowleft"
        OnPress={() => props.navigation.replace('Story1')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
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
            <TouchableOpacity
              style={{paddingLeft: 20, marginTop: -7}}
              onPress={() => props.navigation.navigate('login')}>
              <View
                style={[styles.input, {marginVertical: 80, paddingRight: 20}]}>
                <Image
                  source={Images.Icons.bluee}
                  style={{width: 40, height: 40}}
                />

                <Text
                  style={{
                    marginTop: 15,
                    textAlign: 'center',
                    fontFamily: 'BrandonGrotesque-Medium',
                    color: '#030303',
                  }}>
                  Sign Up With Email
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                // marginTop: 50,
              }}>
              <Text style={styles.bottomLine}>Don't have an account? </Text>
              <TouchableOpacity
                // style={{marginTop: -2.5}}
                onPress={() => {
                  props.navigation.navigate('signup', {
                    showVerifyScreen: false,
                  });
                }}>
                <Text
                  style={[
                    styles.bottomLine,
                    {
                      fontSize: 18,
                      textDecorationLine: 'underline',
                      fontFamily: 'BrandonGrotesque-Bold',
                    },
                  ]}>
                  Sign Up
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
  bottomLine: {
    textAlign: 'center',
    color: '#1C5C2E',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Medium',
  },
});

export default LoginOption;
