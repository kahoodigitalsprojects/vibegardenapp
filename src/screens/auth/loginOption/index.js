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
} from 'react-native';
import {yellow100} from 'react-native-paper/lib/typescript/styles/colors';
import {Header} from '../../../componrnts';

const LoginOption = () => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <StatusBar animated={true} backgroundColor="#000" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{width: '90%'}}>
            <View style={{width: '90%', marginTop: 10}}>
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
            <View style={styles.input}></View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('');
              }}>
              <Text
                style={{
                  marginTop: 25,
                  color: '#1C5C2E',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', color: 'yellow'},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 10,
    marginTop: 20,
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
