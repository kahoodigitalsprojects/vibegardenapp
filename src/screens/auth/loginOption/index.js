import React from 'react';
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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from '../../../componrnts';
import Images from '../../../constants';

const LoginOption = (props) => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <StatusBar animated={true} backgroundColor="#000" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Header
                header2
                OnPress={() => props.navigation.replace('Welcome')}
              />
            </View>
            <Text style={styles.headtext}>
              Welcome Back,
              {'\n'} Erin
            </Text>
            <Text
              style={{
                marginTop: 20,
                color: '#1C5C2E',
                fontSize: 18,
              }}>
              Let's Get You Setup With An Account
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('login')} style={styles.input}>
              <View style={{ marginTop: 5, paddingRight: 20 }}>
                <Image source={Images.Icons.bluee}
                  style={{ width: 40, height: 40 }} />

              </View>
              <View>
                <Text style={{ marginTop: 15 }}>Sign Up With Email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 40 }}
              onPress={() => {
                props.navigation.navigate('signup');
              }}>
              <Text
                style={{
                  marginTop: 25,
                  color: '#1C5C2E',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Don't have an account?
                <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: 'center', color: 'yellow' },
  input: {
    marginTop: 60,
    flexDirection: 'row',
    paddingLeft: 40,

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
    fontWeight: '700',
    lineHeight: 42,
  },
});

export default LoginOption;
